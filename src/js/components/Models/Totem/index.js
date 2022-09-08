
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Totem = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/totem/scene.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(()=> {
    const gui = props.gui

    const totemGUI = gui.addFolder('Totem');
    totemGUI.add(props.guiHelper.position, 'x').min(-20).max(20).step(0.00005)
          .name('Pos x').onChange(()=> {group.current.position.x = props.guiHelper.position.x})
    totemGUI.add(props.guiHelper.position, 'y').min(-20).max(20).step(0.00005)
          .name('Pos y').onChange(()=> {group.current.position.y = props.guiHelper.position.y})
    totemGUI.add(props.guiHelper.position, 'z').min(-20).max(20).step(0.00005)
          .name('Pos z').onChange(()=> {group.current.position.z = props.guiHelper.position.z})
    totemGUI.add(props.guiHelper.rotation, 'x').min(-20).max(20).step(0.00005)
          .name('Rot x').onChange(()=> {group.current.rotation.x = props.guiHelper.rotation.x})
    totemGUI.add(props.guiHelper.rotation, 'y').min(-20).max(20).step(0.00005)
          .name('Rot y').onChange(()=> {group.current.rotation.y = props.guiHelper.rotation.y})
    totemGUI.add(props.guiHelper.rotation, 'z').min(-20).max(20).step(0.00005)
          .name('Rot z').onChange(()=> {group.current.rotation.z = props.guiHelper.rotation.z})
    
    return () => {
      gui.destroy()
    }
  },  [])

  return (
    <group castShadow ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="pasokon_1">
                <mesh castShadow name="Object_4" geometry={nodes.Object_4.geometry} material={materials.pasokon} />
                <mesh castShadow name="Object_5" geometry={nodes.Object_5.geometry} material={materials.terrarium1} />
              </group>
              <group name="amelia_37" position={[-0.2, 0.9, 0]} rotation={[0, 0.86, 0]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="armies_21" />
                  <group name="armies001_22" />
                  <group name="bode_23" />
                  <group name="bode001_24" />
                  <group name="Cylinder003_25" />
                  <group name="Cylinder004_26" />
                  <group name="eyea_27" />
                  <group name="feets_28" />
                  <group name="feets001_29" />
                  <group name="guitar_30" />
                  <group name="guitar001_31" />
                  <group name="hair_32" />
                  <group name="hairoutline_33" />
                  <group name="mouf_34" />
                  <group name="nogging_35" />
                  <group name="nogging001_36" />
                  <skinnedMesh castShadow name="Object_37" geometry={nodes.Object_37.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_37.skeleton} morphTargetDictionary={nodes.Object_37.morphTargetDictionary} morphTargetInfluences={nodes.Object_37.morphTargetInfluences} />
                  <skinnedMesh castShadow name="Object_10" geometry={nodes.Object_10.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_10.skeleton} />
                  <skinnedMesh castShadow name="Object_12" geometry={nodes.Object_12.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_12.skeleton} />
                  <skinnedMesh castShadow name="Object_14" geometry={nodes.Object_14.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_14.skeleton} />
                  <skinnedMesh castShadow name="Object_16" geometry={nodes.Object_16.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_16.skeleton} />
                  <skinnedMesh castShadow name="Object_18" geometry={nodes.Object_18.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_18.skeleton} />
                  <skinnedMesh castShadow name="Object_19" geometry={nodes.Object_19.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_19.skeleton} />
                  <skinnedMesh castShadow name="Object_21" geometry={nodes.Object_21.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_21.skeleton} />
                  <skinnedMesh castShadow name="Object_23" geometry={nodes.Object_23.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_23.skeleton} />
                  <skinnedMesh castShadow name="Object_25" geometry={nodes.Object_25.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_25.skeleton} />
                  <skinnedMesh castShadow name="Object_27" geometry={nodes.Object_27.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_27.skeleton} />
                  <skinnedMesh castShadow name="Object_29" geometry={nodes.Object_29.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_29.skeleton} />
                  <skinnedMesh castShadow name="Object_31" geometry={nodes.Object_31.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_31.skeleton} />
                  <skinnedMesh castShadow name="Object_33" geometry={nodes.Object_33.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_33.skeleton} />
                  <skinnedMesh castShadow name="Object_35" geometry={nodes.Object_35.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_35.skeleton} />
                  <skinnedMesh castShadow name="Object_39" geometry={nodes.Object_39.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_39.skeleton} />
                  <skinnedMesh castShadow name="Object_41" geometry={nodes.Object_41.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_41.skeleton} />
                </group>
              </group>
              <group name="isopod002_49" position={[0, 0.86, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.07}>
                <group name="GLTF_created_1">
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <group name="isopod_47" />
                  <group name="isopod001_48" />
                  <skinnedMesh castShadow name="Object_65" geometry={nodes.Object_65.geometry} material={materials.terrarium1} skeleton={nodes.Object_65.skeleton} />
                  <skinnedMesh castShadow name="Object_67" geometry={nodes.Object_67.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_67.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/totem/scene.gltf')

export default Totem;
