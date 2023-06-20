import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.gammaFactor = 2.2;

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
camera.position.y = 20;
document.body.appendChild(renderer.domElement);

const pointLight1 = new THREE.PointLight(0xe47025, 3, 300, 3);
pointLight1.castShadow = true;
pointLight1.position.set(30, 63, -60);
scene.add(pointLight1);
let pointLight1Helper = new THREE.PointLightHelper(pointLight1, 5);
scene.add(pointLight1Helper);

const pointLight2 = new THREE.PointLight(0xe47025, 3, 300, 3);
pointLight2.castShadow = true;
pointLight2.position.set(-45, 63, -60);
scene.add(pointLight2);
let pointLight2Helper = new THREE.PointLightHelper(pointLight2, 5);
scene.add(pointLight2Helper);

const pointLight3 = new THREE.PointLight(0xe47025, 3, 300, 3);
pointLight3.castShadow = true;
pointLight3.position.set(30, 63, 40);
scene.add(pointLight3);
let pointLight3Helper = new THREE.PointLightHelper(pointLight3, 5);
scene.add(pointLight3Helper);

const pointLight4 = new THREE.PointLight(0xe47025, 3, 300, 3);
pointLight4.castShadow = true;
pointLight4.position.set(-45, 63, 40);
scene.add(pointLight4);
let pointLight4Helper = new THREE.PointLightHelper(pointLight4, 5);
scene.add(pointLight4Helper);

// const pointLight2 = new THREE.PointLight(0xf6cd8b, 4, 800, 4);
// pointLight2.castShadow = true;
// pointLight2.position.set(0, 18, 0);
// scene.add(pointLight2);
// let pointLight2Helper = new THREE.PointLightHelper(pointLight2, 5);
// scene.add(pointLight2Helper);

//building
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
  wall_1.rotateY(-1.285);
  wall_1.scale.x = 5.85;
  wall_1.scale.y = 2.5;
  wall_1.scale.z = 2.5;
  scene.add(wall_1);
});

let wall_2;
loads.load("./3d_asset/white_wall.glb", function (gltf) {
  wall_2 = gltf.scene;
  wall_2.position.x = 0;
  wall_2.position.y = 86.5;
  wall_2.position.z = 114.8;
  wall_2.rotateY(0.295);
  wall_2.scale.x = 5.85;
  wall_2.scale.y = 2.5;
  wall_2.scale.z = 2.5;
  scene.add(wall_2);
});

let wall_3;
loads.load("./3d_asset/white_wall.glb", function (gltf) {
  wall_3 = gltf.scene;
  wall_3.position.x = 114;
  wall_3.position.y = 86.5;
  wall_3.position.z = 1;
  wall_3.rotateY(1.86);
  wall_3.scale.x = 5.85;
  wall_3.scale.y = 2.5;
  wall_3.scale.z = 2.5;
  scene.add(wall_3);
});
//////////////////////////////////////////////////////////////

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

//small table set 1
let chair_1;
loads.load("./3d_asset/gray_chair.glb", function (gltf) {
  chair_1 = gltf.scene;
  chair_1.position.x = 89;
  chair_1.position.y = 0;
  chair_1.position.z = -50;
  chair_1.rotateY(1.575);
  chair_1.scale.x = 20;
  chair_1.scale.y = 23;
  chair_1.scale.z = 20;
  scene.add(chair_1);
});

let chair_2;
loads.load("./3d_asset/gray_chair.glb", function (gltf) {
  chair_2 = gltf.scene;
  chair_2.position.x = 91;
  chair_2.position.y = 0;
  chair_2.position.z = -88;
  chair_2.rotateY(4.725);
  chair_2.scale.x = 20;
  chair_2.scale.y = 23;
  chair_2.scale.z = 20;
  scene.add(chair_2);
});

let small_table_1;
loads.load("./3d_asset/small_table.glb", function (gltf) {
  small_table_1 = gltf.scene;
  small_table_1.position.x = 90;
  small_table_1.position.y = 0;
  small_table_1.position.z = -70;
  small_table_1.scale.x = 25;
  small_table_1.scale.y = 18;
  small_table_1.scale.z = 25;
  scene.add(small_table_1);
});

let mug_1;
loads.load("./3d_asset/mug.glb", function (gltf) {
  mug_1 = gltf.scene;
  mug_1.position.x = 90;
  mug_1.position.y = 19.5;
  mug_1.position.z = -75;
  mug_1.rotateY(1.575);
  mug_1.scale.x = 25;
  mug_1.scale.y = 25;
  mug_1.scale.z = 25;
  scene.add(mug_1);
});

let mug_2;
loads.load("./3d_asset/mug.glb", function (gltf) {
  mug_2 = gltf.scene;
  mug_2.position.x = 93;
  mug_2.position.y = 19.5;
  mug_2.position.z = -65;
  mug_2.rotateY(4.725);
  mug_2.scale.x = 25;
  mug_2.scale.y = 25;
  mug_2.scale.z = 25;
  scene.add(mug_2);
});
//////////////////////////////////////////////////////////////

//small table set 2
let chair_3;
loads.load("./3d_asset/gray_chair.glb", function (gltf) {
  chair_3 = gltf.scene;
  chair_3.position.x = 89;
  chair_3.position.y = 0;
  chair_3.position.z = 20;
  chair_3.rotateY(1.575);
  chair_3.scale.x = 20;
  chair_3.scale.y = 23;
  chair_3.scale.z = 20;
  scene.add(chair_3);
});

let chair_4;
loads.load("./3d_asset/gray_chair.glb", function (gltf) {
  chair_4 = gltf.scene;
  chair_4.position.x = 91;
  chair_4.position.y = 0;
  chair_4.position.z = -18;
  chair_4.rotateY(4.725);
  chair_4.scale.x = 20;
  chair_4.scale.y = 23;
  chair_4.scale.z = 20;
  scene.add(chair_4);
});

let small_table_2;
loads.load("./3d_asset/small_table.glb", function (gltf) {
  small_table_2 = gltf.scene;
  small_table_2.position.x = 90;
  small_table_2.position.y = 0;
  small_table_2.position.z = 0;
  small_table_2.scale.x = 25;
  small_table_2.scale.y = 18;
  small_table_2.scale.z = 25;
  scene.add(small_table_2);
});

let book;
loads.load("./3d_asset/book.glb", function (gltf) {
  book = gltf.scene;
  book.position.x = 90;
  book.position.y = 23.5;
  book.position.z = 0;
  book.scale.x = 6;
  book.scale.y = 6;
  book.scale.z = 6;
  scene.add(book);
});
//////////////////////////////////////////////////////////////

//small table set 3
let chair_5;
loads.load("./3d_asset/gray_chair.glb", function (gltf) {
  chair_5 = gltf.scene;
  chair_5.position.x = 89;
  chair_5.position.y = 0;
  chair_5.position.z = 90;
  chair_5.rotateY(1.575);
  chair_5.scale.x = 20;
  chair_5.scale.y = 23;
  chair_5.scale.z = 20;
  scene.add(chair_5);
});

let chair_6;
loads.load("./3d_asset/gray_chair.glb", function (gltf) {
  chair_6 = gltf.scene;
  chair_6.position.x = 91;
  chair_6.position.y = 0;
  chair_6.position.z = 52;
  chair_6.rotateY(4.725);
  chair_6.scale.x = 20;
  chair_6.scale.y = 23;
  chair_6.scale.z = 20;
  scene.add(chair_6);
});

let small_table_3;
loads.load("./3d_asset/small_table.glb", function (gltf) {
  small_table_3 = gltf.scene;
  small_table_3.position.x = 90;
  small_table_3.position.y = 0;
  small_table_3.position.z = 70;
  small_table_3.scale.x = 25;
  small_table_3.scale.y = 18;
  small_table_3.scale.z = 25;
  scene.add(small_table_3);
});
//////////////////////////////////////////////////////////////

//PARTISI MEMBUNUHH!!!!!
//partition 1
let partition_1;
loads.load("./3d_asset/wood_partition.glb", function (gltf) {
  partition_1 = gltf.scene;
  partition_1.position.x = 95;
  partition_1.position.y = 0;
  partition_1.position.z = 38;
  partition_1.scale.x = 25;
  partition_1.scale.y = 49;
  partition_1.scale.z = 25;
  scene.add(partition_1);
});

//partition 2
let partition_2;
loads.load("./3d_asset/wood_partition.glb", function (gltf) {
  partition_2 = gltf.scene;
  partition_2.position.x = 95;
  partition_2.position.y = 0;
  partition_2.position.z = -34;
  partition_2.scale.x = 25;
  partition_2.scale.y = 49;
  partition_2.scale.z = 25;
  scene.add(partition_2);
});
//////////////////////////////////////////////////////////////

//kitchen_set
let cabinet_1;
loads.load("./3d_asset/cabinet_1.glb", function (gltf) {
  cabinet_1 = gltf.scene;
  cabinet_1.position.x = -104;
  cabinet_1.position.y = 68;
  cabinet_1.position.z = 15;
  cabinet_1.scale.x = 833;
  cabinet_1.scale.y = 828;
  cabinet_1.scale.z = 833;
  scene.add(cabinet_1);
});

let cabinet_2;
loads.load("./3d_asset/cabinet_1.glb", function (gltf) {
  cabinet_2 = gltf.scene;
  cabinet_2.position.x = -104;
  cabinet_2.position.y = 68;
  cabinet_2.position.z = 62.5;
  cabinet_2.scale.x = 833;
  cabinet_2.scale.y = 828;
  cabinet_2.scale.z = 833;
  scene.add(cabinet_2);
});

let kitchen;
loads.load("./3d_asset/low_kitchen.glb", function (gltf) {
  kitchen = gltf.scene;
  kitchen.position.x = -83;
  kitchen.position.y = 0;
  kitchen.position.z = 32.5;
  kitchen.rotateY(1.575);
  kitchen.scale.x = 4.5;
  kitchen.scale.y = 4.5;
  kitchen.scale.z = 4.5;
  scene.add(kitchen);
});

let refrigerator;
loads.load("./3d_asset/refrigerator.glb", function (gltf) {
  refrigerator = gltf.scene;
  refrigerator.position.x = -96.5;
  refrigerator.position.y = 0;
  refrigerator.position.z = 103.5;
  refrigerator.rotateY(1.575);
  refrigerator.scale.x = 31;
  refrigerator.scale.y = 34;
  refrigerator.scale.z = 31;
  scene.add(refrigerator);
});

let coffee;
loads.load("./3d_asset/coffee_machine.glb", function (gltf) {
  coffee = gltf.scene;
  coffee.position.x = -98.5;
  coffee.position.y = 28;
  coffee.position.z = 2.5;
  coffee.rotateY(3.15);
  coffee.scale.x = 50;
  coffee.scale.y = 50;
  coffee.scale.z = 50;
  scene.add(coffee);
});

let dish;
loads.load("./3d_asset/dish_rack.glb", function (gltf) {
  dish = gltf.scene;
  dish.position.x = -47;
  dish.position.y = 39;
  dish.position.z = 25;
  dish.rotateY(1.575);
  dish.scale.x = 40;
  dish.scale.y = 40;
  dish.scale.z = 40;
  scene.add(dish);
});

let pillar;
loads.load("./3d_asset/pillar.glb", function (gltf) {
  pillar = gltf.scene;
  pillar.position.x = -39.5;
  pillar.position.y = 40;
  pillar.position.z = 100;
  pillar.scale.x = 6;
  pillar.scale.y = 12;
  pillar.scale.z = 10;
  scene.add(pillar);
});

let lamp_4;
loads.load("./3d_asset/lamp.glb", function (gltf) {
  lamp_4 = gltf.scene;
  lamp_4.position.x = -45;
  lamp_4.position.y = 35;
  lamp_4.position.z = 40;
  lamp_4.scale.x = 20;
  lamp_4.scale.y = 15;
  lamp_4.scale.z = 20;
  scene.add(lamp_4);
});

let plank;
loads.load("./3d_asset/plank.glb", function (gltf) {
  plank = gltf.scene;
  plank.position.x = -38.8;
  plank.position.y = 27;
  plank.position.z = 84;
  plank.scale.x = 7.8;
  plank.scale.y = 0.8;
  plank.scale.z = 11;
  scene.add(plank);
});
//////////////////////////////////////////////////////////////

//wall_photo
let wall_photo;
loads.load("./3d_asset/photo.glb", function (gltf) {
  wall_photo = gltf.scene;
  wall_photo.position.x = 30;
  wall_photo.position.y = 50;
  wall_photo.position.z = 113;
  wall_photo.rotateX(4.725);
  wall_photo.rotateY(3.15);
  wall_photo.scale.x = 100;
  wall_photo.scale.y = 100;
  wall_photo.scale.z = 100;
  scene.add(wall_photo);
});

//shelf
let shelf;
loads.load("./3d_asset/shelf.glb", function (gltf) {
  shelf = gltf.scene;
  shelf.position.x = -104;
  shelf.position.y = 0;
  shelf.position.z = -60;
  shelf.scale.x = 25;
  shelf.scale.y = 25;
  shelf.scale.z = 25;
  scene.add(shelf);
});

//AC
let AC;
loads.load("./3d_asset/air_conditioner.glb", function (gltf) {
  AC = gltf.scene;
  AC.position.x = 110;
  AC.position.y = 72;
  AC.position.z = 2;
  AC.rotateY(4.725);
  AC.scale.x = 20;
  AC.scale.y = 14;
  AC.scale.z = 20;
  scene.add(AC);
});

//big table set 1
let chair_big_1;
loads.load("./3d_asset/black_chair.glb", function (gltf) {
  chair_big_1 = gltf.scene;
  chair_big_1.position.x = 40;
  chair_big_1.position.y = 13;
  chair_big_1.position.z = -85;
  chair_big_1.scale.x = 13;
  chair_big_1.scale.y = 13;
  chair_big_1.scale.z = 13;
  scene.add(chair_big_1);
});

let chair_big_2;
loads.load("./3d_asset/black_chair.glb", function (gltf) {
  chair_big_2 = gltf.scene;
  chair_big_2.position.x = 21;
  chair_big_2.position.y = 13;
  chair_big_2.position.z = -85;
  chair_big_2.scale.x = 13;
  chair_big_2.scale.y = 13;
  chair_big_2.scale.z = 13;
  scene.add(chair_big_2);
});

let chair_big_3;
loads.load("./3d_asset/black_chair.glb", function (gltf) {
  chair_big_3 = gltf.scene;
  chair_big_3.position.x = 40;
  chair_big_3.position.y = 13;
  chair_big_3.position.z = -35;
  chair_big_3.rotateY(3.15);
  chair_big_3.scale.x = 13;
  chair_big_3.scale.y = 13;
  chair_big_3.scale.z = 13;
  scene.add(chair_big_3);
});

let chair_big_4;
loads.load("./3d_asset/black_chair.glb", function (gltf) {
  chair_big_4 = gltf.scene;
  chair_big_4.position.x = 21;
  chair_big_4.position.y = 13;
  chair_big_4.position.z = -35;
  chair_big_4.rotateY(3.15);
  chair_big_4.scale.x = 13;
  chair_big_4.scale.y = 13;
  chair_big_4.scale.z = 13;
  scene.add(chair_big_4);
});

let big_table_1;
loads.load("./3d_asset/big_table.glb", function (gltf) {
  big_table_1 = gltf.scene;
  big_table_1.position.x = 30;
  big_table_1.position.y = 0;
  big_table_1.position.z = -60;
  big_table_1.scale.x = 35;
  big_table_1.scale.y = 29;
  big_table_1.scale.z = 38;
  scene.add(big_table_1);
});

let lamp_1;
loads.load("./3d_asset/lamp.glb", function (gltf) {
  lamp_1 = gltf.scene;
  lamp_1.position.x = 30;
  lamp_1.position.y = 35;
  lamp_1.position.z = -60;
  lamp_1.scale.x = 20;
  lamp_1.scale.y = 15;
  lamp_1.scale.z = 20;
  scene.add(lamp_1);
});
//////////////////////////////////////////////////////////////

//big table set 2
let chair_big_5;
loads.load("./3d_asset/black_chair.glb", function (gltf) {
  chair_big_5 = gltf.scene;
  chair_big_5.position.x = -36;
  chair_big_5.position.y = 13;
  chair_big_5.position.z = -85;
  chair_big_5.scale.x = 13;
  chair_big_5.scale.y = 13;
  chair_big_5.scale.z = 13;
  scene.add(chair_big_5);
});

let chair_big_6;
loads.load("./3d_asset/black_chair.glb", function (gltf) {
  chair_big_6 = gltf.scene;
  chair_big_6.position.x = -55;
  chair_big_6.position.y = 13;
  chair_big_6.position.z = -85;
  chair_big_6.scale.x = 13;
  chair_big_6.scale.y = 13;
  chair_big_6.scale.z = 13;
  scene.add(chair_big_6);
});

let chair_big_7;
loads.load("./3d_asset/black_chair.glb", function (gltf) {
  chair_big_7 = gltf.scene;
  chair_big_7.position.x = -36;
  chair_big_7.position.y = 13;
  chair_big_7.position.z = -35;
  chair_big_7.rotateY(3.15);
  chair_big_7.scale.x = 13;
  chair_big_7.scale.y = 13;
  chair_big_7.scale.z = 13;
  scene.add(chair_big_7);
});

let chair_big_8;
loads.load("./3d_asset/black_chair.glb", function (gltf) {
  chair_big_8 = gltf.scene;
  chair_big_8.position.x = -55;
  chair_big_8.position.y = 13;
  chair_big_8.position.z = -35;
  chair_big_8.rotateY(3.15);
  chair_big_8.scale.x = 13;
  chair_big_8.scale.y = 13;
  chair_big_8.scale.z = 13;
  scene.add(chair_big_8);
});
let big_table_2;
loads.load("./3d_asset/big_table.glb", function (gltf) {
  big_table_2 = gltf.scene;
  big_table_2.position.x = -45;
  big_table_2.position.y = 0;
  big_table_2.position.z = -60;
  big_table_2.scale.x = 35;
  big_table_2.scale.y = 29;
  big_table_2.scale.z = 38;
  scene.add(big_table_2);
});

let lamp_2;
loads.load("./3d_asset/lamp.glb", function (gltf) {
  lamp_2 = gltf.scene;
  lamp_2.position.x = -45;
  lamp_2.position.y = 35;
  lamp_2.position.z = -60;
  lamp_2.scale.x = 20;
  lamp_2.scale.y = 15;
  lamp_2.scale.z = 20;
  scene.add(lamp_2);
});
//////////////////////////////////////////////////////////////

//big table set 3
let chair_big_9;
loads.load("./3d_asset/black_chair.glb", function (gltf) {
  chair_big_9 = gltf.scene;
  chair_big_9.position.x = 40;
  chair_big_9.position.y = 13;
  chair_big_9.position.z = 15;
  chair_big_9.scale.x = 13;
  chair_big_9.scale.y = 13;
  chair_big_9.scale.z = 13;
  scene.add(chair_big_9);
});

let chair_big_10;
loads.load("./3d_asset/black_chair.glb", function (gltf) {
  chair_big_10 = gltf.scene;
  chair_big_10.position.x = 21;
  chair_big_10.position.y = 13;
  chair_big_10.position.z = 15;
  chair_big_10.scale.x = 13;
  chair_big_10.scale.y = 13;
  chair_big_10.scale.z = 13;
  scene.add(chair_big_10);
});

let chair_big_11;
loads.load("./3d_asset/black_chair.glb", function (gltf) {
  chair_big_11 = gltf.scene;
  chair_big_11.position.x = 40;
  chair_big_11.position.y = 13;
  chair_big_11.position.z = 65;
  chair_big_11.rotateY(3.15);
  chair_big_11.scale.x = 13;
  chair_big_11.scale.y = 13;
  chair_big_11.scale.z = 13;
  scene.add(chair_big_11);
});

let chair_big_12;
loads.load("./3d_asset/black_chair.glb", function (gltf) {
  chair_big_12 = gltf.scene;
  chair_big_12.position.x = 21;
  chair_big_12.position.y = 13;
  chair_big_12.position.z = 65;
  chair_big_12.rotateY(3.15);
  chair_big_12.scale.x = 13;
  chair_big_12.scale.y = 13;
  chair_big_12.scale.z = 13;
  scene.add(chair_big_12);
});

let big_table_3;
loads.load("./3d_asset/big_table.glb", function (gltf) {
  big_table_3 = gltf.scene;
  big_table_3.position.x = 30;
  big_table_3.position.y = 0;
  big_table_3.position.z = 40;
  big_table_3.scale.x = 35;
  big_table_3.scale.y = 29;
  big_table_3.scale.z = 38;
  scene.add(big_table_3);
});

let lamp_3;
loads.load("./3d_asset/lamp.glb", function (gltf) {
  lamp_3 = gltf.scene;
  lamp_3.position.x = 30;
  lamp_3.position.y = 35;
  lamp_3.position.z = 40;
  lamp_3.scale.x = 20;
  lamp_3.scale.y = 15;
  lamp_3.scale.z = 20;
  scene.add(lamp_3);
});
//////////////////////////////////////////////////////////////

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
    movements.moveForward(actualSpeed);
  }
  if (keyboard["a"]) {
    movements.moveRight(-actualSpeed);
  }
  if (keyboard["s"]) {
    movements.moveForward(-actualSpeed);
  }
  if (keyboard["d"]) {
    movements.moveRight(actualSpeed);
  }
  if (keyboard["Shift"]) {
    camera.translateY(-actualSpeed);
  }
  if (keyboard[" "]) {
    camera.translateY(actualSpeed);
  }
}

let animation = false;
let slidein = true;

function checkPosition() {
  const distance = plank.position.distanceTo(camera.position);
  if (distance < 50) animation = true;
}

function plankAnimate() {
  if (plank.position.z == 83.9) {
    slidein = true;
  }
  if (plank.position.z == 112.1) {
    slidein = false;
  }

  if (animation) {
    if (slidein) {
      if (plank.position.z < 112) {
        if (plank.position.z + 0.1 > 112) plank.position.z = 112;
        else plank.position.z += 0.1;
      } else {
        animation = false;
        slidein = false;
      }
    } else {
      if (plank.position.z > 84) {
        if (plank.position.z - 0.1 < 84) plank.position.z = 84;
        else plank.position.z -= 0.1;
      } else {
        animation = false;
        slidein = true;
      }
    }
  }
}

function drawScene() {
  renderer.render(scene, camera);
  let delta = clock.getDelta();
  processKeyboard(delta);
  movements.lock();
  checkPosition();
  plankAnimate();
  requestAnimationFrame(drawScene);
}

drawScene();
