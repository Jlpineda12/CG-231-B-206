var radio=1;
var sx=0.5;
var sy=0.5;
var sz=3;
var Rx=Math.PI / 2;
var Ry=Math.PI / 3;
var Ty=radio*5.9;
var Tx=5.1*radio;

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;


var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);



//Esfera
var geometry = new THREE.SphereGeometry(radio,32,16);
var material = new THREE.MeshBasicMaterial( {color: 0xFCF3CF } );
var esfera = new THREE.Mesh( geometry, material );
scene.add(esfera)
/*esfera.scale.setX(sx);
esfera.scale.setY(sy);
esfera.scale.setZ(sz);
esfera.translateY(Ty);
esfera.rotation.x +=Rx;
esfera.rotation.y += -Ry;
esfera.translateX(Tx);
*/
transformaciones(esfera);

//funciones









//funciones 





//Grilla
const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

scene.add(esfera)





function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();