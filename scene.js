var scene, camera, renderer, clock, deltaTime, totalTime;
var arToolkitSource, arToolkitContext;
var markerRoot1;
var mesh1;
let markers = [];
initialize();
loadContents(); // contents.js
animate();
function initialize()
{
  scene = new THREE.Scene();
  camera = new THREE.Camera();
  scene.add(camera);
  renderer = new THREE.WebGLRenderer({
    antialias : true,
    alpha: true
  });
  renderer.setClearColor(new THREE.Color('lightgrey'), 0)
  renderer.setSize( 640, 480 );
  renderer.domElement.style.position = 'absolute'
  renderer.domElement.style.top = '0px'
  renderer.domElement.style.left = '0px'
  document.body.appendChild( renderer.domElement );
  clock = new THREE.Clock();
  deltaTime = 0;
  totalTime = 0;
  ////////////////////////////////////////////////////////////
  // setup arToolkitSource
  ////////////////////////////////////////////////////////////
  arToolkitSource = new THREEx.ArToolkitSource({
    sourceType : 'webcam',
  });
  function onResize()
  {
    arToolkitSource.onResize()
    arToolkitSource.copySizeTo(renderer.domElement)
    if ( arToolkitContext.arController !== null )
    {
      arToolkitSource.copySizeTo(arToolkitContext.arController.canvas)
    }
  }
  arToolkitSource.init(function onReady(){
    onResize()
  });
  // handle resize event
  window.addEventListener('resize', function(){
    onResize()
  });
  ////////////////////////////////////////////////////////////
  // setup arToolkitContext
  ////////////////////////////////////////////////////////////
  // create atToolkitContext
  arToolkitContext = new THREEx.ArToolkitContext({
    cameraParametersUrl: 'https://rawgit.com/stemkoski/AR-Examples/master/data/camera_para.dat',
    detectionMode: 'mono'
  });
  // copy projection matrix to camera when initialization complete
  arToolkitContext.init( function onCompleted(){
    camera.projectionMatrix.copy( arToolkitContext.getProjectionMatrix() );
  });
  ////////////////////////////////////////////////////////////
  // setup markerRoots
  ////////////////////////////////////////////////////////////
  // build markerControls
  // voir fichier content.js

}

function update()
{
  // update artoolkit on every frame
  if ( arToolkitSource.ready !== false )
    arToolkitContext.update( arToolkitSource.domElement );

}
function render()
{
  renderer.render( scene, camera );
}
function animate()
{
  requestAnimationFrame(animate);
  deltaTime = clock.getDelta();
  totalTime += deltaTime;
  update();
  render();
}

function userTap(){
  let tap = document.body;
  tap.onclick = allowPlay();

}

function allowPlay(){
  let video1 = document.getElementById('fleur1');
  // let video2 = document.getElementById('fleur2');
  video1.play();
  // video2.play();
  // console.log("clicked");
}

allowPlay();
