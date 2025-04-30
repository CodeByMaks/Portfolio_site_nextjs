'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useMemo } from 'react'

function ParticleField() {
  const particles = useMemo(() => {
    const count = 5000
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = THREE.MathUtils.randFloatSpread(10)
      const y = THREE.MathUtils.randFloatSpread(10)
      const z = THREE.MathUtils.randFloatSpread(10)
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001
      pointsRef.current.rotation.y += 0.0001
    }
  })

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

export default function CanvasBackground() {
  return (
    <Canvas 
      className="absolute inset-0 z-0" 
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <ParticleField />
    </Canvas>
  )
}