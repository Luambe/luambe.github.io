import * as THREE from 'three';
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize( window.innerWidth, window.innerHeight );

const loadbackground = new THREE.CubeTextureLoader();
loadbackground.setPath("scenery/cubeMap/");
const backgroundTexture = loadbackground.load([
    "px.png",
    "nx.png",
    "py.png",
    "ny.png",
    "pz.png",
    "nz.png",
]);
scene.background = backgroundTexture;
camera.position.x = 0;
camera.position.z = 90;
camera.position.y = 5;
document.body.appendChild( renderer.domElement );

const pointLightb = new THREE.PointLight(0xf6cd8b, 4, 800, 4);
pointLightb.castShadow = true;
pointLightb.position.set(0, 68, 0);
scene.add(pointLightb);
let pointLightbHelper = new THREE.PointLightHelper(pointLightb, 5);
scene.add(pointLightbHelper);

const loads = new GLTFLoader();
let wood_floor;
loads.load("./3d_asset/wood.glb", function (gltf) {
  wood_floor = gltf.scene;
  wood_floor.position.x = 0;
  wood_floor.position.y = 0;
  wood_floor.position.z = 0;
  wood_floor.scale.x = 0.9;
  wood_floor.scale.y = 0.9;
  wood_floor.scale.z = 0.9;
  scene.add(wood_floor);
});

let wall_1;
loads.load("./3d_asset/white_wall.glb", function (gltf) {
  wall_1 = gltf.scene;
  wall_1.position.x = -114;
  wall_1.position.y = 86.5;
  wall_1.position.z = 1;
  wall_1.rotateY(-1.285)
  wall_1.scale.x = 5.85;
  wall_1.scale.y = 2.5;
  wall_1.scale.z = 2.5;  
  scene.add(wall_1);
});

// let wall_2;
// loads.load("./3d_asset/white_wall.glb", function (gltf) {
//   wall_2 = gltf.scene;
//   wall_2.position.x = -116;
//   wall_2.position.y = 86.5;
//   wall_2.position.z = -57.8;
//   wall_2.rotateY(-0.97)
//   wall_2.scale.x = 2.5;
//   wall_2.scale.y = 2.5;
//   wall_2.scale.z = 2.5;  
//   scene.add(wall_2);
// });

let wall_3;
loads.load("./3d_asset/white_wall.glb", function (gltf) {
  wall_3 = gltf.scene;
  wall_3.position.x = 0;
  wall_3.position.y = 86.5;
  wall_3.position.z = 114.8;
  wall_3.rotateY(0.295)
  wall_3.scale.x = 5.85;
  wall_3.scale.y = 2.5;
  wall_3.scale.z = 2.5;  
  scene.add(wall_3);
});

// let wall_4;
// loads.load("./3d_asset/white_wall.glb", function (gltf) {
//   wall_4 = gltf.scene;
//   wall_4.position.x = 57.8;
//   wall_4.position.y = 86.5;
//   wall_4.position.z = 115.3;
//   wall_4.rotateY(0.61)
//   wall_4.scale.x = 2.5;
//   wall_4.scale.y = 2.5;
//   wall_4.scale.z = 2.5;  
//   scene.add(wall_4);
// });

let wall_5;
loads.load("./3d_asset/white_wall.glb", function (gltf) {
  wall_5 = gltf.scene;
  wall_5.position.x = 114;
  wall_5.position.y = 86.5;
  wall_5.position.z = 1;
  wall_5.rotateY(1.86)
  wall_5.scale.x = 5.85;
  wall_5.scale.y = 2.5;
  wall_5.scale.z = 2.5;  
  scene.add(wall_5);
});

// let wall_6;
// loads.load("./3d_asset/white_wall.glb", function (gltf) {
//   wall_6 = gltf.scene;
//   wall_6.position.x = 116;
//   wall_6.position.y = 86.5;
//   wall_6.position.z = -57.8;
//   wall_6.rotateY(2.17)
//   wall_6.scale.x = 2.5;
//   wall_6.scale.y = 2.5;
//   wall_6.scale.z = 2.5;  
//   scene.add(wall_6);
// });

let wood_roof;
loads.load("./3d_asset/roof_tile.glb", function (gltf) {
  wood_roof = gltf.scene;
  wood_roof.position.x = 7;
  wood_roof.position.y = 83;
  wood_roof.position.z = 18;
  wood_roof.scale.x = 122;
  wood_roof.scale.y = 100;
  wood_roof.scale.z = 240;
  scene.add(wood_roof);
});

const movements = new PointerLockControls(camera, renderer.domElement);
let clock = new THREE.Clock();

let keyboard = [];
addEventListener("keydown", (e) => {
    keyboard[e.key] = true;
});
    addEventListener("keyup", (e) => {
    keyboard[e.key] = false;
});

function processKeyboard(delta) {
    let speed = 100;
    let actualSpeed = speed * delta;
    if (keyboard["w"]) {
        // if (
        //   cam.position.z > -250 &&
        //   cam.position.z < 250 &&
        //   cam.position.x > -200 &&
        //   cam.position.x < 200
        // ) {
        movements.moveForward(actualSpeed);
        // }
    }
    if (keyboard["a"]) {
        // if (cam.position.x > -200) {
        movements.moveRight(-actualSpeed);
        // }
    }
    if (keyboard["s"]) {
        // if (
        //   cam.position.z > -250 &&
        //   cam.position.z < 250 &&
        //   cam.position.x > -200 &&
        //   cam.position.x < 200
        // ) {
        movements.moveForward(-actualSpeed);
        // }
    }
    if (keyboard["d"]) {
        // if (cam.position.x < 200) {
        movements.moveRight(actualSpeed);
        // }
    }
    if (keyboard["Shift"]) {
        // console.log(cam.position.y)
        // if (camera.position.y > 0) {
        camera.translateY(-actualSpeed);
        // }
    }
    if (keyboard[" "]) {
        // if (cam.position.y < 120) {
        camera.translateY(actualSpeed);
        // }
    }
    // if (cam.position.y > 120) {
    //   cam.position.y = 120;
    // }
}

function drawScene() {
	  renderer.render(scene, camera);
    let delta = clock.getDelta();
    processKeyboard(delta);
    movements.lock();
	  requestAnimationFrame(drawScene);
}
drawScene();