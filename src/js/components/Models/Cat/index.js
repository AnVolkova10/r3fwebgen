
import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


const Cat = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/cat/scene.gltf');
  const { actions } = useAnimations(animations, group);

  useEffect(()=> {
    const gui = props.gui

    const catGUI = gui.addFolder('Cat');
    catGUI.add(props.guiHelper.position, 'x').min(-20).max(20).step(0.00005)
          .name('Pos x').onChange(()=> {group.current.position.x = props.guiHelper.position.x})
    catGUI.add(props.guiHelper.position, 'y').min(-20).max(20).step(0.00005)
          .name('Pos y').onChange(()=> {group.current.position.y = props.guiHelper.position.y})
    catGUI.add(props.guiHelper.position, 'z').min(-20).max(20).step(0.00005)
          .name('Pos z').onChange(()=> {group.current.position.z = props.guiHelper.position.z})
    catGUI.add(props.guiHelper.rotation, 'x').min(-20).max(20).step(0.00005)
          .name('Rot x').onChange(()=> {group.current.rotation.x = props.guiHelper.rotation.x})
    catGUI.add(props.guiHelper.rotation, 'y').min(-20).max(20).step(0.00005)
          .name('Rot y').onChange(()=> {group.current.rotation.y = props.guiHelper.rotation.y})
    catGUI.add(props.guiHelper.rotation, 'z').min(-20).max(20).step(0.00005)
          .name('Rot z').onChange(()=> {group.current.rotation.z = props.guiHelper.rotation.z})
    

    return () => {
      gui.destroy()
    }
  },  [])
  
  useFrame(({ clock }) => {
    const frame = clock.getElapsedTime();
    actions?.A_idle.play(); 
    if (frame > 5) {
      actions?.A_walk.play();
    }
    if(frame>6){
      actions?.A_idle.stop();
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group
          name='Sketchfab_model'
          rotation={[-Math.PI / 2, 0, 0]}
          scale={860.73}
        >
          <group
            name='153a0d5dcc9149cfb9856363b51a1918fbx'
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name='Object_2'>
              <group name='RootNode'>
                <group name='Object_4'>
                  <primitive object={nodes._rootJoint} />
                  <group
                    name='Object_6'
                    position={[-0.01, -0.1, 0.22]}
                    scale={1.3}
                  />
                  <skinnedMesh
                    castShadow
                    name='Object_7'
                    geometry={nodes.Object_7.geometry}
                    material={materials.cu_cat2_mt}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/cat/scene.gltf');

export default Cat;
