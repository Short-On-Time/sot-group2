import React, { Suspense, useRef } from 'react'
import { Canvas } from 'react-three-fiber'

import Stacy from './Stacy'

const Model3D = () => {
	const mouse = useRef({ x: 0, y: 0 })

	return (
		<Canvas
			pixelRatio={window.devicePixelRatio}
			camera={{ position: [0, -3, 18] }}
			shadowMap
			onMouseMove={e => (mouse.current = { x: e.clientX, y: e.clientY })}
		>
			<fog attach="fog" args={[0xdfdfdf, 35, 65]} />
			<hemisphereLight skyColor={'black'} groundColor={0xffffff} intensity={0.68} position={[0, 50, 0]} />
			<directionalLight
				position={[-8, 12, 8]}
				shadow-camera-left={-8.25}
				shadow-camera-bottom={-8.25}
				shadow-camera-right={8.25}
				shadow-camera-top={8.25}
				shadow-camera-near={0.1}
				shadow-camera-far={1500}
				castShadow
			/>

			<mesh position={[0, -3, -10]}>
				<circleBufferGeometry attach="geometry" args={[8, 64]} />
				<meshBasicMaterial attach="material" color="lightpink" />
			</mesh>

			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -11, 0]} receiveShadow>
				<planeGeometry attach="geometry" args={[5000, 5000, 1, 1]} />
				<meshLambertMaterial attach="material" color="#9b9b9b" transparent opacity={0.2} />
			</mesh>

			<Suspense fallback={null}>
				<Stacy mouse={mouse} position={[0, -11, 0]} scale={[7, 7, 7]} />
			</Suspense>
		</Canvas>
	)
}

export default Model3D
