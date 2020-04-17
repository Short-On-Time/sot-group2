import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = ({ mouse, ...props }) => {
	const mesh = useRef()
	const { nodes } = useLoader(GLTFLoader, 'model.glb')

	const redirect = (url) =>{
		document.location = "/remedies"
	}

	return (
		<mesh
			ref={mesh}
			{...props}
			dispose={null}
			visible
			geometry={nodes["body"].geometry}
			onClick={() => {redirect(true)}}
		>
			<meshPhongMaterial attach="material" skinning />
		</mesh>
	)
}

export default Model
