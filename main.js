import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper)

const light = new THREE.DirectionalLight(0xefefff, 3);
  light.position.set(5, 5, 100).normalize();
  scene.add(light);

const light2 = new THREE.DirectionalLight(0xffefef, 3);
  light2.position.set(-1, -1, -1).normalize();
  scene.add(light2);

camera.position.z = 500;
camera.position.y = 100;


const loader = new GLTFLoader();
loader.load( '/akh.glb', function ( gltf ) {
	
	scene.add( gltf.scene );
},
undefined, function ( error ) {
	console.error( error );
} );


const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();


function animate()
{
   
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);



