
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import {useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


const Plane = (props) => {
  const ref = useRef()

  useEffect(()=> {
    const gui = props.gui
    

    const planeGUI = gui.addFolder('Plane');
    planeGUI.add(props.guiHelper.position, 'x').min(-20).max(20).step(0.00005)
          .name('Pos x').onChange(()=> {ref.current.position.x = props.guiHelper.position.x})
    planeGUI.add(props.guiHelper.position, 'y').min(-20).max(20).step(0.00005)
          .name('Pos y').onChange(()=> {ref.current.position.y = props.guiHelper.position.y})
    planeGUI.add(props.guiHelper.position, 'z').min(-20).max(20).step(0.00005)
          .name('Pos z').onChange(()=> {ref.current.position.z = props.guiHelper.position.z})
    planeGUI.add(props.guiHelper.rotation, 'x').min(-20).max(20).step(0.00005)
          .name('Rot x').onChange(()=> {ref.current.rotation.x = props.guiHelper.rotation.x})
    planeGUI.add(props.guiHelper.rotation, 'y').min(-20).max(20).step(0.00005)
          .name('Rot y').onChange(()=> {ref.current.rotation.y = props.guiHelper.rotation.y})
    planeGUI.add(props.guiHelper.rotation, 'z').min(-20).max(20).step(0.00005)
          .name('Rot z').onChange(()=> {ref.current.rotation.z = props.guiHelper.rotation.z})
    
    return () => {
      gui.destroy()
    }

  },  [])
  return (
    <mesh ref={ref} receiveShadow rotation={[-0.5*Math.PI,0,0]} >
      <planeGeometry args={[50,70,64,64]} />
      <meshStandardMaterial
      color={'gray'}
        depthTest = {true}
        transparent= {true}
        side = {THREE.DoubleSide}
        map = {useLoader(TextureLoader, 'wireframe.png')}
        displacementMap = {useLoader(TextureLoader, 'height.png')}
        displacementScale = {.5}
        alphaMap = {useLoader(TextureLoader, 'alpha.jpg')}
      />
    </mesh>
  );
};
export default Plane;
