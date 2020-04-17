import React, { useRef } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model3D = () => {
	const group = useRef()
	const { nodes } = useLoader(GLTFLoader, 'model.glb')

	useFrame(() => {
		group.current.rotation.y += 0.004
	})

	return (
		<group ref={group}>
			<mesh visible geometry={nodes["body"].geometry}>
				<meshStandardMaterial
					attach="material"
					color="white"
					roughness={0.3}
					metalness={0.3}
				/>
			</mesh>
		</group>
	)
}

export default Model3D
