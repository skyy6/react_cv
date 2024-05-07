import React from 'react'
import './styles/App.css';
import {Canvas} from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react';
import { Physics, RigidBody, CylinderCollider, CuboidCollider } from '@react-three/rapier';
import { PointerLockControls, Cylinder, Sky, Gltf } from '@react-three/drei';
import './styles/env.css';
import Character from './Character';

const Stage = ({onButtonClick}) => {

  const handleClick = (val) =>{
    onButtonClick(val);
  }

  const[pointerLock, setPointerLock] = useState(false);

  const[hovered, setHovered] = useState(false);

  const[closeToPC, setCloseToPC] = useState(false);

  const[useKeyPressed, setUseKeyPressed] = useState(false);


  function buttonClick(event){
    setPointerLock(true);
    event.currentTarget.style.display = 'none';
  }

   useEffect(() => {
     const handleKeyDown = (ev) =>{
      console.log(ev.key);
       if(ev.key === "e" || ev.key === "E"){
        setUseKeyPressed(true)
       }
     }

     const handleKeyUp = (ev) =>{
      if(ev.key === "e" || ev.key === "E"){
       setUseKeyPressed(false)
      }
    }

     document.addEventListener('keydown', handleKeyDown);
     document.addEventListener('keyup', handleKeyUp);

    
     return () => {
       document.removeEventListener('keydown', handleKeyDown);
       document.removeEventListener('keyup', handleKeyUp);
     }
   }, []);


   useEffect(() => {
    const handlePointerLockChange = () => {
      setPointerLock(document.pointerLockElement !== null);
    };

    document.addEventListener('pointerlockchange', handlePointerLockChange);

    return () => {
      document.removeEventListener('pointerlockchange', handlePointerLockChange);
    };
  }, []);

  return (
    <div className='full-screen'>
    <div className='ui-element'></div>
    <div className='instruction'>HINT: Press E on the laptop to return</div>
    <button className='start-button' id="lock-btn" onClick={buttonClick} style={{ display: pointerLock ? 'none' : 'block' }}>START</button>
    <div className='canvas'>
      <Canvas shadows camera={{position: [2.2, 1.95, 1.2], fov:90}}
        onCreated={({camera}) => {
          camera.rotation.set(0, 4.7, 0);
        }} >
        <color attach="background" args={["#ececec"]} />
        <Suspense>
          <Physics>
            <PointerLockControls selector='#lock-btn'/>
          <ambientLight intensity={0.9} />
          {/* <directionalLight intensity={0.5} position={[4,4,4]} /> */}
             <directionalLight       position={[2, 10, 0]}
      intensity={0.8}
      color="white"
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-bias={-0.001}>
      </directionalLight>       
           <Sky sunPosition={[100, 10, 100]} />
            <group>
            <RigidBody colliders={false} type="fixed" position-y={-0.5}>
          <CylinderCollider args={[1/2, 15]} />
            <Cylinder scale={[15,1,15]}>
                <meshStandardMaterial color="blue" />
            </Cylinder>
            </RigidBody>
        </group>
          <mesh position={[3.5, 0.6, 1.2]}>
            <CuboidCollider
            args={[1.20, 1, 0.6]}
            sensor
            onIntersectionEnter={() => setCloseToPC(true)}
            onIntersectionExit={() => setCloseToPC(false)}           
            ></CuboidCollider>
          </mesh>
          <mesh position={[3.3, 1.3, 1.18]} scale={[0.35,0.46,0.4]} visible={false} onPointerOver={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
            <boxGeometry></boxGeometry>
            <meshStandardMaterial color={"black"}></meshStandardMaterial>
            </mesh>

          {useEffect(() => {
            if (closeToPC && hovered && useKeyPressed) {
              handleClick("home");
            }
          },
          [closeToPC, hovered, useKeyPressed])}
          
          <RigidBody type="fixed" colliders="trimesh">
            <Gltf castShadow receiveShadow src="/CV_House.glb" />
          </RigidBody>
            <Character pointerLocked={pointerLock} />
          </Physics>
        </Suspense>
      </Canvas>
      </div>
      </div> 

  )
}

export default Stage