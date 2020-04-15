import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber'

import Model3D from '../components/Model3D';

const Model = () => {
	const [is3d, set3d] = useState(false)

	const changeDim = (is3d) => set3d(is3d)

	return (
		<>
			<Canvas>
        		<ambientLight />
        		<pointLight position={[10, 10, 10]} />
        		{/*<Model3D position={[-1.2, 0, 0]} />
        		<Model3D position={[1.2, 0, 0]} />*/}
    		</Canvas>
			<br />
			<ToggleButtonGroup type="radio" name="dimension" value={is3d} onChange={changeDim}>
				<ToggleButton variant="outline-primary" value={false}>2D</ToggleButton>
				<ToggleButton variant="outline-primary" value={true}>3D</ToggleButton>
			</ToggleButtonGroup>
		</>
	);
}

export default Model
