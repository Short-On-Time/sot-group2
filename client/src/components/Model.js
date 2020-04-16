import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';

import Model2D from '../components/Model2D';
import Model3D from '../components/Model3D';

const Model = () => {
	const [is3d, set3d] = useState(false)

	const changeDim = (is3d) => set3d(is3d)

	return (
		<>
			{is3d ? <Canvas>{/* <Model3D /> */}</Canvas> : <Model2D />}
			<br />
			<ToggleButtonGroup type="radio" name="dimension" value={is3d} onChange={changeDim}>
				<ToggleButton variant="outline-primary" value={false}>2D</ToggleButton>
				<ToggleButton variant="outline-primary" value={true}>3D</ToggleButton>
			</ToggleButtonGroup>
		</>
	);
}

export default Model
