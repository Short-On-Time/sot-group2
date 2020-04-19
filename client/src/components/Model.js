import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import lerp from 'lerp'

const Model = ({ mouse, ...props }) => {
	const moveJoint = (mouse, joint, degreeLimit = 40) => {
		let degrees = {
			x: degreeLimit * (2 * mouse.current.x / window.innerWidth - 1),
			y: degreeLimit * (2 * mouse.current.y / window.innerHeight - 1)
		}
		joint.rotation.x = THREE.Math.degToRad(lerp(0, degrees.y, 0.1))
		joint.rotation.y = THREE.Math.degToRad(lerp(0, degrees.x, 0.1))
	}

	const group = useRef()
	const { nodes, animations } = useLoader(GLTFLoader, 'stacy.glb')
	const texture = useLoader(THREE.TextureLoader, 'stacy.jpg')

	const actions = useRef()
	const [mixer] = useState(() => new THREE.AnimationMixer())
	useFrame((state, delta) => mixer.update(delta))
	useEffect(() => {
		actions.current = { idle: mixer.clipAction(animations[8], group.current) }
		actions.current.idle.play()
		return (() => (animations.forEach(clip => mixer.uncacheClip(clip))))
	})

	useFrame((state, delta) => {
		mixer.update(delta)
		moveJoint(mouse, nodes.mixamorigNeck)
		moveJoint(mouse, nodes.mixamorigSpine)
	})

	/* 
	 * const redirect = (url) => {
	 * 	   document.location = '/remedies'
	 * }
	 */

	return (
		<group ref={group} {...props} dispose={null}>
			<group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
				<primitive object={nodes['mixamorigHips']} />
				<skinnedMesh
					geometry={nodes['stacy'].geometry}
					skeleton={nodes['stacy'].skeleton}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={[100, 100, 100]}
				>
					<meshPhongMaterial attach="material" map={texture} map-flipY={false} skinning />
				</skinnedMesh>
			</group>
		</group>
	)
}

export default Model
