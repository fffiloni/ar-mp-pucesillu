class Marker {

  constructor(ratio, multiplicator, pattname, video){
    this.ratio = ratio;
    this.multiplicator = multiplicator;
    this.pattname = pattname;
    this.video = video;
  }

  createMarker(){

    markerRoot1 = new THREE.Group();
  	scene.add(markerRoot1);
  	let markerControls1 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot1, {
  		type: 'pattern', patternUrl: "./markers/"+this.pattname+".patt",
  	})



  	let geometry2 = new THREE.PlaneBufferGeometry(1,1, 4,4);
  	let loader = new THREE.TextureLoader();
  	// let texture = loader.load( 'images/earth.jpg', render );
  	let material2 = new THREE.MeshBasicMaterial( { color: 0x0000ff, opacity: 0.5 } );
  	let mesh0 = new THREE.Mesh( geometry2, material2 );
  	mesh0.rotation.x = -Math.PI/2;
  	markerRoot1.add( mesh0 );

    let ratio = this.ratio;
    let multiplicator = this.multiplicator;
    let offset = (ratio*multiplicator)/2+0.5+0.1;

  	let geometry1 = new THREE.PlaneBufferGeometry(1*multiplicator,ratio*multiplicator);
  	let video = document.getElementById( this.video );
  	let texture = new THREE.VideoTexture( video );
  	texture.minFilter = THREE.LinearFilter;
  	texture.magFilter = THREE.LinearFilter;
  	texture.format = THREE.RGBFormat;
  	let material1 = new THREE.MeshBasicMaterial( { map: texture } );
  	mesh1 = new THREE.Mesh( geometry1, material1 );
  	mesh1.rotation.x = -Math.PI/2;
    mesh1.position.x = 0;
    mesh1.position.z = -(offset);
  	markerRoot1.add( mesh1 );


  }

  playVideo(){
  	let video = document.getElementById(this.video);
  	video.play();
  }

}
