import ImageMapper from 'react-image-mapper';

export default function Model2D() {
	return null
	/*enterArea = (area) => {
		this.setState({ hoveredArea: area });
	}

	leaveArea = (area) => {
		this.setState({ hoveredArea: null });
	}

	getTipPosition = (area) => {
		return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
	}

	return (
		<>
			<ImageMapper src={"https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg"} map={{
				name: "my-map",
				areas: [
					{ name: "1", shape: "poly", coords: [25, 33, 27, 300, 128, 240, 128, 94], preFillColor: "green", fillColor: "blue" },
					{ name: "2", shape: "poly", coords: [219, 118, 220, 210, 283, 210, 284, 119], preFillColor: "pink" },
					{ name: "3", shape: "poly", coords: [381, 241, 383, 94, 462, 53, 457, 282], fillColor: "yellow" },
					{ name: "4", shape: "poly", coords: [245, 285, 290, 285, 274, 239, 249, 238], preFillColor: "red" },
					{ name: "5", shape: "circle", coords: [170, 100, 25] },
				]
			}} width={500}
				onLoad={() => this.load()}
				onClick={area => this.clicked(area)}
				onMouseEnter={area => this.enterArea(area)}
				onMouseLeave={area => this.leaveArea(area)}
				onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
				onImageClick={evt => this.clickedOutside(evt)}
				onImageMouseMove={evt => this.moveOnImage(evt)}
			/>
			{
				this.state.hoveredArea &&
				<span style={{ ...this.getTipPosition(this.state.hoveredArea) }}>
					{this.state.hoveredArea && this.state.hoveredArea.name}
				</span>
			}
		</>
	)*/
}
