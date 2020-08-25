import FourD from '/js/vendor/fourd/fourd.js';

var $fourd = new FourD();
$fourd.init('#display', {
  border: '1px solid 0x007bff',
  width: window.innerWidth,
  height: window.innerHeight,
  background: 'rgba(1,1,1,0.5)'
});

$fourd.camera.position.z = -35;

var h = $fourd.graph.add_vertex({
  cube: {size: 10, color: 0x000000},
  label: {size: 12, text: 'Hello'}
})

$fourd.toggle_controls('orbit', h)

$fourd.make_resolve_click(function(vertex){
  if(!vertex){
    return;
  }

  console.log(`Vertex of id ${vertex} clicked`);

  $fourd.toggle_controls('orbit', vertex);
})

var g;
setTimeout(function(){
  g = $fourd.graph.add_vertex({
    cube: {size: 10, texture: 'Swirl_001.png'},
    label: {size: 12, text: 'Graph!'}
  });

  $fourd.graph.add_edge(h, g, {color: 0xff614b, strength: 1.0});
}, 1000);

window.fourd = $fourd;
