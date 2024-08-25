import React, { useRef } from 'react'
// import {Link} from 'react-scroll'
import '../styling/Start.css'
import { useTexture} from '@react-three/drei'
import * as THREE from 'three'
import imag from './imag.png'
import { useFrame } from '@react-three/fiber'
function Start() {
  let tex=useTexture(imag)
  let cyl=useRef(null)
  useFrame((state,delta)=>{
    cyl.current.rotation.y +=delta
  })
  return (
    <group rotation={[0,1.4,0.5]}>
      <mesh ref={cyl} >
        <cylinderGeometry args={[1,1,1,10,10,true]} />
        <meshStandardMaterial transparent map={tex} side={THREE.DoubleSide} />
      </mesh>
      </group>
  
  )
}

export default Start