import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

const canvas = document.getElementById('canvas');

const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const DodecahedronGeometry = new THREE.DodecahedronGeometry();
const DodecahedronMaterial = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });
const Dodecahedron = new THREE.Mesh(DodecahedronGeometry, DodecahedronMaterial);

const BoxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const BoxMaterial = new THREE.MeshStandardMaterial({ color: '#B4B4B3', emissive: '#B4B4B3' });
const Box = new THREE.Mesh(BoxGeometry, BoxMaterial);
Box.position.y = -1.5;

scene.add(Dodecahedron);
scene.add(Box);

const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

function animate() {
    requestAnimationFrame(animate);

    Dodecahedron.rotation.x += 0.01;
    Dodecahedron.rotation.y += 0.01;

    Box.rotation.y += 0.005;

    controls.update();

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.projectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
);

animate();