
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import {useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Logo = (props) => {
  const ref = useRef()

  useEffect(()=> {
    const gui = props.gui
    

    const logoGUI = gui.addFolder('Logo');
    logoGUI.add(props.guiHelper.position, 'x').min(-20).max(20).step(0.00005)
          .name('Pos x').onChange(()=> {ref.current.position.x = props.guiHelper.position.x})
    logoGUI.add(props.guiHelper.position, 'y').min(-20).max(20).step(0.00005)
          .name('Pos y').onChange(()=> {ref.current.position.y = props.guiHelper.position.y})
    logoGUI.add(props.guiHelper.position, 'z').min(-20).max(20).step(0.00005)
          .name('Pos z').onChange(()=> {ref.current.position.z = props.guiHelper.position.z})
    logoGUI.add(props.guiHelper.rotation, 'x').min(-20).max(20).step(0.00005)
          .name('Rot x').onChange(()=> {ref.current.rotation.x = props.guiHelper.rotation.x})
    logoGUI.add(props.guiHelper.rotation, 'y').min(-20).max(20).step(0.00005)
          .name('Rot y').onChange(()=> {ref.current.rotation.y = props.guiHelper.rotation.y})
    logoGUI.add(props.guiHelper.rotation, 'z').min(-20).max(20).step(0.00005)
          .name('Rot z').onChange(()=> {ref.current.rotation.z = props.guiHelper.rotation.z})
    
    return () => {
      gui.destroy()
    }

  },  [])
  return (
    <mesh ref={ref} position={[4, 3.1, -0.4]} rotation={[-3,-6.5,-9.6]} raycast={console.log('hola')}>
      <planeBufferGeometry args={[5,1]} />
      <meshBasicMaterial
        map = {useLoader(TextureLoader, 'genosha-logo.png')}
        transparent={true}
      />
    </mesh>
  );
};
export default Logo;
