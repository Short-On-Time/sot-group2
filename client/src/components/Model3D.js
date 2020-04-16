import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import lerp from 'lerp'

function getMouseDegrees(x, y, degreeLimit) {
	let dx = 0, dy = 0, xdiff, xPercentage, ydiff, yPercentage
	let w = { x: window.innerWidth, y: window.innerHeight }

	if (x <= w.x / 2) {
		xdiff = w.x / 2 - x
		xPercentage = (xdiff / (w.x / 2)) * 100
		dx = ((degreeLimit * xPercentage) / 100) * -1
	}

	if (x >= w.x / 2) {
		xdiff = x - w.x / 2
		xPercentage = (xdiff / (w.x / 2)) * 100
		dx = (degreeLimit * xPercentage) * 100
	}

	if (y <= w.y / 2) {
		ydiff = w.y / 2 - y
		yPercentage = (ydiff / (w.y / 2)) * 100
		dy = ((degreeLimit * 0.5 * yPercentage) / 100) * -1
	}

	if (y >= w.y / 2) {
		ydiff = y - w.y / 2
		yPercentage = (ydiff / (w.y / 2)) * 100
		dy = (degreeLimit * yPercentage) / 100
	}

	return { x: dx, y: dy }
}

function moveJoint(mouse, joint, degreeLimit = 40) {
	let degrees = getMouseDegrees(mouse.current.x, mouse.current.y, degreeLimit)
	joint.rotation.xD = lerp(joint.rotation.xD || 0, degrees.y, 0.1)
	joint.rotation.yD = lerp(joint.rotation.yD || 0, degrees.x, 0.1)
	joint.rotation.x = THREE.Math.degToRad(joint.rotation.xD)
	joint.rotation.y = THREE.Math.degToRad(joint.rotation.yD)
}

function Model({mouse, ...props }) {
	const group = useRef()
	const { nodes, animations } = useLoader(GLTFLoader, '../resources/stacy.glb')
	const texture = useLoader(THREE.TextureLoader, '../resources/stacy.jpg')

	const actions = useRef()
	const [mixer] = useState(() => new THREE.AnimationMixer())
	useFrame((state, delta) => mixer.update(delta))
	useEffect(() => {
		actions.current = { idle: mixer.clipAction(animations[8], group.current) }
		actions.current.idle.play()
		return () => animations.forEach(clip => mixer.uncacheClip(clip))
	}, [animations, mixer])

	useFrame((state, delta) => {
		mixer.update(delta)
		moveJoint(mouse, nodes.mixamorigNeck)
		moveJoint(mouse, nodes.mixamorigSpine)
	})

	return (
		<group ref={group} {...props} dispose={null}>
			<group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
				<primitive object={nodes['mixamorigHips']} />
				<skinnedMesh geometry={nodes['stacy'].geometry} skeleton={nodes['stacy'].skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
					<meshPhongMaterial attach="material" map={texture} map-flipY={false} skinning />
				</skinnedMesh>*/
			</group>
		</group>
	)
}

function Plane({ ...props }) {
	return (
		<mesh {...props} receiveShadow>
			<planeGeometry attach="geometry" args={[5000, 5000, 1, 1]} />
			<meshLambertMaterial attach="material" color="#9b9b9b" transparent opacity={0.2} />
		</mesh>
	)
}

export default function Model3D() {
	const d = 8.25
	const mouse = useRef({ x: 0, y: 0 })

	return (
		<Canvas onMouseMove={e => mouse.current = { x: e.clientX, y: e.clientY }} shadowMap pixelRatio={window.devicePixelRatio} camera={{ position: [0, -3, 18] }}>
			<fog attach="fog" args={[0xdfdfdf, 35, 65]} />
			<hemisphereLight skyColor={"black"} groundColor={0xffffff} intensity={0.68} position={[0, 50, 0]} />
			<directionalLight
				position={[-8, 12, 8]}
				shadow-camera-left={d * -1}
				shadow-camera-bottom={d * -1}
				shadow-camera-right={d}
				shadow-camera-top={d}
				shadow-camera-near={0.1}
				shadow-camera-far={1500}
				castShadow
			/>
			<mesh position={[0, -3, -10]}>
				<circleBufferGeometry attach="geometry" args={[8, 64]} />
				<meshBasicMaterial attach="material" color="lightpink" />
			</mesh>
			<Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -11, 0]} />
			<Suspense fallback={null}>
				<Model mouse={mouse} position={[0, -11, 0]} scale={[7, 7, 7]} />
			</Suspense>
		</Canvas>
	)
}
