import React, { useRef } from 'react'
import { useFrame, useThree, extend } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const CameraControls = () => {
	const {
		camera,
		gl: { domElement }
	} = useThree()

	const controls = useRef()

	useFrame(() => controls.current.update())

	return (
		<orbitControls
			ref={controls}
			args={[camera, domElement]}
			enableZoom={false}
			maxAzimuthAngle={Math.PI / 4}
			maxPolarAngle={Math.PI}
			minAzimuthAngle={-Math.PI / 4}
			minPolarAngle={0}
		/>
	)
}

export default CameraControls
