const illustrations = [
  {ratio: 1.525, multiplicator: 5.85, pattname: "pattern-marker1", video: "fleur1"},
  {ratio: 1.525, multiplicator: 5.85, pattname: "pattern-marker2", video: "fleur2"}
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
