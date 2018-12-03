const illustrations = [
  {ratio: 1.36, multiplicator: 5, pattname: "pattern-hiro", video: "essaid"},
  {ratio: 1.2, multiplicator: 5, pattname: "mp_classic", video: "blast"}
];

function loadContents() {

  for (var i of illustrations){

    var div = document.createElement('div');
     div.innerHTML ='<video id="'+i.video+'" autoplay loop muted playsinline crossorigin="anonymous" webkit-playsinline style="display:none">\
     <source src="./videos/MP4/'+i.video+'.mp4">\
     </video>';

     document.getElementById('container').appendChild(div);

    let marker = new Marker (i.ratio, i.multiplicator, i.pattname, i.video);
    marker.createMarker();
    marker.playVideo();
  }

}
