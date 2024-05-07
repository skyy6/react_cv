import React from 'react'
import { RigidBody, CapsuleCollider, useRapier} from '@react-three/rapier'
import * as THREE from "three";
import useKeyboardControls from './useKeyboardControls';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';


const MOVEMENT_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

const Character = ({pointerLocked}) => {
    
    const playerRef = useRef();
    const {forward, backward, left, right} = useKeyboardControls(pointerLocked);

    useFrame((state) => {
        
        if(!playerRef.current) return;


        const velocity = playerRef.current.linvel();
        
        frontVector.set(0,0, backward - forward);
        sideVector.set(left - right, 0,0);
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVEMENT_SPEED).applyEuler(state.camera.rotation);

        playerRef.current.wakeUp();
        playerRef.current.setLinvel({x: direction.x, y: velocity.y, z: direction.z});

        const {x, y, z} = playerRef.current.translation();
        state.camera.position.set(x, y, z);

    });

  return (
    <>
    <RigidBody position={[2.2, 1.95, 1.2]} ref={playerRef} lockRotations>
        <mesh>
            <capsuleGeometry args={[0.5,2.4]}></capsuleGeometry>
        </mesh>
    </RigidBody>
    </>
  )
}

export default Character