import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = ({ mouse, ...props }) => {
	const mesh = useRef()
	const { nodes } = useLoader(GLTFLoader, 'model.glb')

	return (
		<mesh
			ref={mesh}
			{...props}
			dispose={null}
			visible
			geometry={nodes["body"].geometry}
			onClick={() => {console.log("You've clicked the very zoomed-in leg! At this point, I should redirect, but I don't know how!")}}
		>
			<meshPhongMaterial attach="material" skinning />
		</mesh>
	)
}

export default Model
