import React from "react";
import "./styles/App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import {
  Physics,
  RigidBody,
  CylinderCollider,
  CuboidCollider,
} from "@react-three/rapier";
import {
  PointerLockControls,
  Cylinder,
  Sky,
  Gltf,
  Text,
  Html,
  Stars,
} from "@react-three/drei";
import "./styles/env.css";
import Character from "./Character";

const Stage = ({ onButtonClick }) => {
  const [pointerLock, setPointerLock] = useState(false);

  const [pauseScreen, setPauseScreen] = useState(false);

  const [movement, setMovement] = useState(false);

  const [hovered, setHovered] = useState(false);

  const [closeToPC, setCloseToPC] = useState(false);

  const [useKeyPressed, setUseKeyPressed] = useState(false);

  const [buttonText, setButtonText] = useState("Start");

  const [opacity, setOpacity] = useState(false);

  const [showIntro, setShowIntro] = useState(true);

  function buttonClick(event) {
    setPointerLock(true);
    event.currentTarget.style.display = "none";
  }

  useEffect(() => {
    const handleKeyDown = (ev) => {
      if (ev.key === "e" || ev.key === "E") {
        setUseKeyPressed(true);
      }
    };

    const handleKeyUp = (ev) => {
      if (ev.key === "e" || ev.key === "E") {
        setUseKeyPressed(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    let timeoutId;
    const handlePointerLockChange = () => {
      setButtonText("Resume");
      setShowIntro(false);
      clearTimeout(timeoutId);
      setPauseScreen((pauseScreen) => !pauseScreen);
      setMovement((freezeMovement) => !freezeMovement);

      timeoutId = setTimeout(() => {
        setPointerLock(document.pointerLockElement !== null);
      }, 1200);
    };

    document.addEventListener("pointerlockchange", handlePointerLockChange);

    return () => {
      document.removeEventListener(
        "pointerlockchange",
        handlePointerLockChange
      );
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="full-screen">
      <Suspense>
        <div className="ui-element"></div>
        <div className={opacity ? "black-screen" : ""}></div>
        <div
          className="pause-screen"
          style={{
            display: pauseScreen ? "none" : "block",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          }}
        >
          <div
            className={showIntro ? "center-ui" : "center-ui-startbutton-only"}
          >
            <div
              className="intro-box"
              style={{ display: showIntro ? "block" : "none" }}
            >
              <p>
                This was initally just me playing around with the possibilites
                of R3F.
              </p>
              <p>
                I then decided to implement this very simple demo on my personal
                website :){" "}
              </p>
              {/* LÄGG TILL "DO NOT SHOW AGAIN BOX" och "OK"? Kanske inte OK... */}
            </div>
            <button
              className="start-button"
              id="lock-btn"
              onClick={buttonClick}
              style={{ display: pointerLock ? "none" : "block" }}
            >
              {buttonText}
            </button>
          </div>
        </div>
        <div
          className="instruction"
          style={{ display: opacity ? "none" : "block" }}
        >
          <p>- Use WASD to move</p>
          <p>- Press E on the laptop to return</p>
        </div>
        <div className="canvas">
          <Canvas
            shadows
            camera={{ fov: 85 }}
            onCreated={({ camera }) => {
              camera.rotation.set(0, 4.7, 0);
            }}
          >
            <Physics>
              <PointerLockControls selector="#lock-btn" />
              <ambientLight intensity={0.9} />
              <directionalLight
                position={[2, 10, 0]}
                intensity={0.8}
                color="white"
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.001}
              ></directionalLight>
              <Sky sunPosition={[2, 1, 6]} />
              <Stars factor={1} count={2000}></Stars>
              <group>
                <RigidBody colliders={false} type="fixed" position-y={-0.5}>
                  <CylinderCollider args={[1 / 2, 15]} />
                  <Cylinder scale={[15, 1, 15]}>
                    <meshStandardMaterial color="blue" />
                  </Cylinder>
                </RigidBody>
              </group>
              <mesh position={[3.5, 0.6, 1.2]}>
                <CuboidCollider
                  args={[1.2, 1, 0.6]}
                  sensor
                  onIntersectionEnter={() => setCloseToPC(true)}
                  onIntersectionExit={() => setCloseToPC(false)}
                ></CuboidCollider>
              </mesh>
              <group
                onPointerOver={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
              >
                <mesh
                  position={[3.41, 1.31, 1.18]}
                  rotation={[0, Math.PI, 0.42]}
                  scale={[0.05, 0.46, 0.4]}
                  visible={false}
                >
                  <boxGeometry></boxGeometry>
                  <meshStandardMaterial color={"black"}></meshStandardMaterial>
                </mesh>
                <mesh
                  position={[3.212, 1.21, 1.18]}
                  scale={[0.3, 0.06, 0.4]}
                  visible={false}
                >
                  <boxGeometry></boxGeometry>
                  <meshStandardMaterial color={"black"}></meshStandardMaterial>
                </mesh>
              </group>
              <Text
                scale={[0.07, 0.07, 0.07]}
                position={[-0.172, 2.51, 3.78]}
                rotation={[0, Math.PI / 1, 0]}
              >
                First person movement made in R3F
              </Text>
              <Text
                scale={[0.07, 0.07, 0.07]}
                position={[-0.172, 2.41, 3.78]}
                rotation={[0, Math.PI / 1, 0]}
              >
                Models made in Blender
              </Text>

              {useEffect(() => {
                if (closeToPC && hovered && useKeyPressed) {
                  setOpacity(true);
                  setMovement(false);
                  setTimeout(() => {
                    const handleClick = (val) => {
                      onButtonClick(val);
                    };

                    handleClick("home");
                  }, 1000);
                }
              }, [closeToPC, hovered, useKeyPressed, onButtonClick])}
              <RigidBody type="fixed" colliders="trimesh">
                <Gltf castShadow receiveShadow src="/CV_House_v1.glb" />
              </RigidBody>
              <Character pointerLocked={movement} />
            </Physics>
          </Canvas>
        </div>
      </Suspense>
    </div>
  );
};

export default Stage;