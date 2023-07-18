/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 public/SpotifyHipHopDance1M.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from "react";


export function HipHopDance1M(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/SpotifyHipHopDance1M.glb')
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []) 
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="tshirt001" geometry={nodes.tshirt001.geometry} material={materials.tshirt} skeleton={nodes.tshirt001.skeleton} />
          <skinnedMesh name="tshirt056" geometry={nodes.tshirt056.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt056.skeleton} />
          <skinnedMesh name="tshirt057" geometry={nodes.tshirt057.geometry} material={materials.face} skeleton={nodes.tshirt057.skeleton} />
          <skinnedMesh name="tshirt058" geometry={nodes.tshirt058.geometry} material={materials.face} skeleton={nodes.tshirt058.skeleton} />
          <skinnedMesh name="tshirt059" geometry={nodes.tshirt059.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt059.skeleton} />
          <skinnedMesh name="tshirt060" geometry={nodes.tshirt060.geometry} material={materials.face} skeleton={nodes.tshirt060.skeleton} />
          <skinnedMesh name="tshirt061" geometry={nodes.tshirt061.geometry} material={materials.face} skeleton={nodes.tshirt061.skeleton} />
          <group name="tshirt063">
            <skinnedMesh name="tshirt001mesh008" geometry={nodes.tshirt001mesh008.geometry} material={materials['Eye.001']} skeleton={nodes.tshirt001mesh008.skeleton} />
            <skinnedMesh name="tshirt001mesh008_1" geometry={nodes.tshirt001mesh008_1.geometry} material={materials['eye pinnk.001']} skeleton={nodes.tshirt001mesh008_1.skeleton} />
            <skinnedMesh name="tshirt001mesh008_2" geometry={nodes.tshirt001mesh008_2.geometry} material={materials['eye black.001']} skeleton={nodes.tshirt001mesh008_2.skeleton} />
          </group>
          <skinnedMesh name="tshirt064" geometry={nodes.tshirt064.geometry} material={materials.face} skeleton={nodes.tshirt064.skeleton} />
          <skinnedMesh name="tshirt065" geometry={nodes.tshirt065.geometry} material={materials.hands} skeleton={nodes.tshirt065.skeleton} />
          <skinnedMesh name="tshirt066" geometry={nodes.tshirt066.geometry} material={materials.hands} skeleton={nodes.tshirt066.skeleton} />
          <skinnedMesh name="tshirt068" geometry={nodes.tshirt068.geometry} material={materials['Foot.002']} skeleton={nodes.tshirt068.skeleton} />
          <skinnedMesh name="tshirt069" geometry={nodes.tshirt069.geometry} material={materials.face} skeleton={nodes.tshirt069.skeleton} />
          <skinnedMesh name="tshirt070" geometry={nodes.tshirt070.geometry} material={materials.face} skeleton={nodes.tshirt070.skeleton} />
          <skinnedMesh name="tshirt071" geometry={nodes.tshirt071.geometry} material={materials.Material} skeleton={nodes.tshirt071.skeleton} />
          <skinnedMesh name="tshirt072" geometry={nodes.tshirt072.geometry} material={materials['ShoeLace left']} skeleton={nodes.tshirt072.skeleton} />
          <skinnedMesh name="tshirt073" geometry={nodes.tshirt073.geometry} material={materials.Shoes} skeleton={nodes.tshirt073.skeleton} />
          <skinnedMesh name="tshirt074" geometry={nodes.tshirt074.geometry} material={materials['Shoes feet']} skeleton={nodes.tshirt074.skeleton} />
          <skinnedMesh name="tshirt075" geometry={nodes.tshirt075.geometry} material={materials.face} skeleton={nodes.tshirt075.skeleton} />
          <skinnedMesh name="tshirt078" geometry={nodes.tshirt078.geometry} material={materials.face} skeleton={nodes.tshirt078.skeleton} />
          <skinnedMesh name="tshirt079" geometry={nodes.tshirt079.geometry} material={materials['Shoes feet']} skeleton={nodes.tshirt079.skeleton} />
          <skinnedMesh name="tshirt080" geometry={nodes.tshirt080.geometry} material={materials.face} skeleton={nodes.tshirt080.skeleton} />
          <skinnedMesh name="tshirt082" geometry={nodes.tshirt082.geometry} material={materials.face} skeleton={nodes.tshirt082.skeleton} />
          <skinnedMesh name="tshirt084" geometry={nodes.tshirt084.geometry} material={materials['shirt black']} skeleton={nodes.tshirt084.skeleton} />
          <skinnedMesh name="tshirt085" geometry={nodes.tshirt085.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt085.skeleton} />
          <skinnedMesh name="tshirt086" geometry={nodes.tshirt086.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt086.skeleton} />
          <skinnedMesh name="tshirt087" geometry={nodes.tshirt087.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt087.skeleton} />
          <skinnedMesh name="tshirt088" geometry={nodes.tshirt088.geometry} material={materials.face} skeleton={nodes.tshirt088.skeleton} />
          <skinnedMesh name="tshirt089" geometry={nodes.tshirt089.geometry} material={materials.face} skeleton={nodes.tshirt089.skeleton} />
          <skinnedMesh name="tshirt090" geometry={nodes.tshirt090.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt090.skeleton} />
          <skinnedMesh name="tshirt091" geometry={nodes.tshirt091.geometry} material={materials.face} skeleton={nodes.tshirt091.skeleton} />
          <skinnedMesh name="tshirt092" geometry={nodes.tshirt092.geometry} material={materials.face} skeleton={nodes.tshirt092.skeleton} />
          <skinnedMesh name="tshirt093" geometry={nodes.tshirt093.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt093.skeleton} />
          <skinnedMesh name="tshirt094" geometry={nodes.tshirt094.geometry} material={materials.face} skeleton={nodes.tshirt094.skeleton} />
          <skinnedMesh name="tshirt095" geometry={nodes.tshirt095.geometry} material={materials.face} skeleton={nodes.tshirt095.skeleton} />
          <skinnedMesh name="tshirt096" geometry={nodes.tshirt096.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt096.skeleton} />
          <skinnedMesh name="tshirt097" geometry={nodes.tshirt097.geometry} material={materials.face} skeleton={nodes.tshirt097.skeleton} />
          <skinnedMesh name="tshirt098" geometry={nodes.tshirt098.geometry} material={materials.face} skeleton={nodes.tshirt098.skeleton} />
          <skinnedMesh name="tshirt099" geometry={nodes.tshirt099.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt099.skeleton} />
          <skinnedMesh name="tshirt100" geometry={nodes.tshirt100.geometry} material={materials.face} skeleton={nodes.tshirt100.skeleton} />
          <skinnedMesh name="tshirt101" geometry={nodes.tshirt101.geometry} material={materials.face} skeleton={nodes.tshirt101.skeleton} />
          <skinnedMesh name="tshirt102" geometry={nodes.tshirt102.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt102.skeleton} />
          <skinnedMesh name="tshirt103" geometry={nodes.tshirt103.geometry} material={materials.face} skeleton={nodes.tshirt103.skeleton} />
          <skinnedMesh name="tshirt104" geometry={nodes.tshirt104.geometry} material={materials.face} skeleton={nodes.tshirt104.skeleton} />
          <skinnedMesh name="tshirt105" geometry={nodes.tshirt105.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt105.skeleton} />
          <skinnedMesh name="tshirt106" geometry={nodes.tshirt106.geometry} material={materials.face} skeleton={nodes.tshirt106.skeleton} />
          <skinnedMesh name="tshirt107" geometry={nodes.tshirt107.geometry} material={materials.face} skeleton={nodes.tshirt107.skeleton} />
          <skinnedMesh name="tshirt108" geometry={nodes.tshirt108.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt108.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/SpotifyHipHopDance1M.glb')