
import React, { useRef, useEffect, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'

const Cardbox = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/cardbox/scene.gltf')
  

  useEffect(()=> {
    const gui = props.gui

    const cardboxGUI = gui.addFolder('Cardbox');
    cardboxGUI.add(props.guiHelper.position, 'x').min(-20).max(20).step(0.00005)
          .name('Pos x').onChange(()=> {group.current.position.x = props.guiHelper.position.x})
    cardboxGUI.add(props.guiHelper.position, 'y').min(-20).max(20).step(0.00005)
          .name('Pos y').onChange(()=> {group.current.position.y = props.guiHelper.position.y})
    cardboxGUI.add(props.guiHelper.position, 'z').min(-20).max(20).step(0.00005)
          .name('Pos z').onChange(()=> {group.current.position.z = props.guiHelper.position.z})
    cardboxGUI.add(props.guiHelper.rotation, 'x').min(-20).max(20).step(0.00005)
          .name('Rot x').onChange(()=> {group.current.rotation.x = props.guiHelper.rotation.x})
    cardboxGUI.add(props.guiHelper.rotation, 'y').min(-20).max(20).step(0.00005)
          .name('Rot y').onChange(()=> {group.current.rotation.y = props.guiHelper.rotation.y})
    cardboxGUI.add(props.guiHelper.rotation, 'z').min(-20).max(20).step(0.00005)
          .name('Rot z').onChange(()=> {group.current.rotation.z = props.guiHelper.rotation.z})
    
    return () => {
      gui.destroy()
    }

  },  [])

  return (
    <group {...props} ref={group} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh castShadow geometry={nodes.Cardboard_box_Colormap_0.geometry} material={materials.Colormap} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/cardbox/scene.gltf')

export default Cardbox;
