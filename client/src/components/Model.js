import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class Model extends Component {
    constructor(props) {
        super(props);

        this.animate = this.animate.bind(this);
        this.addCube = this.addCube.bind(this);
        this.initializeCamera = this.initializeCamera.bind(this);
        this.initializeOrbits = this.initializeOrbits.bind(this);
    }

    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);

        this.initializeOrbits();
        this.initializeCamera();

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        this.animate();
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.frameId);
        this.mount.removeChild(this.renderer.domElement);
    }

    initializeOrbits() {
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;
    }

    initializeCamera() {
        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = 4;
    }

    animate() {
        this.frameId = window.requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);

        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    }

    // I don't think this is necessary. I'm pretty sure we can elimintate it with a minor change to make it all better.    
    addCube(cube) {
        this.scene.add(cube);
    }

    onDocMouseDown(event) {
        const mouse3D = new THREE.Vector3((event.clientX / this.mount.width) * 2 - 1, -(event.clientY / this.mount.height) * 2 - 1, 0.5);
        
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse3D, this.camera);
    }

    render() {
        return (
            <div
                onClick={e => this.onDocMouseDown(e)}
                style={{ width: "400px", height: "400px" }}
                ref={mount => { this.mount = mount; }}
            />
        );
    }
}

export default Model;
