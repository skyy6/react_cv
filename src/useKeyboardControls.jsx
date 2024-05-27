import { useEffect, useState } from 'react'

const useKeyboardControls = (pointerLocked) => {

    const keys =  {
        KeyW: "forward",
        KeyS: "backward",
        KeyA: "left",
        KeyD: "right"
    }

    const moveByKey = (key) => keys[key];

    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false
    });

    const setMovementStatus = (code, status) => {
        setMovement((m) => ({...m, [code]: status}))
    }

    useEffect(() => {

      const handleKeyDown = (ev) =>{
        if(pointerLocked){
        setMovementStatus(moveByKey(ev.code), true);
      }
      };

      const handleKeyUp = (ev) => {
        if(pointerLocked){
        setMovementStatus(moveByKey(ev.code), false);
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      }
    },);
    
    

  return movement;

}

export default useKeyboardControls