/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect} from 'react'
import { useGLTF } from '@react-three/drei'

const Room = (props) => {
  const { nodes, materials } = useGLTF('/models/room/scene.gltf')

  const ref = useRef()

  useEffect(()=> {
    const gui = props.gui
    

    const roomGUI = gui.addFolder('Room');
    roomGUI.add(props.guiHelper.position, 'x').min(-20).max(20).step(0.00005)
          .name('Pos x').onChange(()=> {ref.current.position.x = props.guiHelper.position.x})
    roomGUI.add(props.guiHelper.position, 'y').min(-20).max(20).step(0.00005)
          .name('Pos y').onChange(()=> {ref.current.position.y = props.guiHelper.position.y})
    roomGUI.add(props.guiHelper.position, 'z').min(-20).max(20).step(0.00005)
          .name('Pos z').onChange(()=> {ref.current.position.z = props.guiHelper.position.z})
    roomGUI.add(props.guiHelper.rotation, 'x').min(-20).max(20).step(0.00005)
          .name('Rot x').onChange(()=> {ref.current.rotation.x = props.guiHelper.rotation.x})
    roomGUI.add(props.guiHelper.rotation, 'y').min(-20).max(20).step(0.00005)
          .name('Rot y').onChange(()=> {ref.current.rotation.y = props.guiHelper.rotation.y})
    roomGUI.add(props.guiHelper.rotation, 'z').min(-20).max(20).step(0.00005)
          .name('Rot z').onChange(()=> {ref.current.rotation.z = props.guiHelper.rotation.z})
    
    return () => {
      gui.destroy()
    }

  },  [])
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plano.geometry} material={materials['Material.001']} />
      <mesh castShadow  geometry={nodes.Cubo.geometry} material={materials['Material.002']} position={[0, -0.01, 0]} />
    </group>
  )
}

useGLTF.preload('/models/room/scene.gltf')

export default Room
