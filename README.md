# fourd-starter-kit
An HTML5 starter kit for a page using FourD Graphs.

I just discovered this dead simple html5 boilerplate and decided to build a template repository for displaying 3D graphs. 

You'll need Node.js, NPM and [parcel](https://parceljs.org/) installed to rebuild the page, more [here](https://nodejs.org/), and a WebGL capable computer. Which these days should really mean a Raspberry Pi 3b+ or up.

## Installation

```sh
git clone https://github.com/stauffenbits/fourd-starter-kit.git <your name for this project>
cd <same name>
npm install
npm start
```

Afterwards, you can edit `js/main.js` and implement your custom logic. I will be adding little snippets to the `main.js` file to showcase pieces of more or less stable functionality. 

A word of warning: This is still kinda inefficient, as the math is just a wee bit over my head. So it'll stop working at a graph size of between 250 and 1000 vertices. Spread that stuff out in space and time!

Another word of warning: The entire library is due for a rewrite. There was a lot I didn't know when I started this version. Alas, the days are short. 

## Usage
See js/main.js for FourD setup and usage:

The main functions are:

### Instantiation and Init
```js
var $fourd = new FourD();
$fourd.init('#display', {
  border: '1px solid 0x007bff',
  width: window.innerWidth,
  height: window.innerHeight,
  background: 'rgba(1,1,1,0.5)'
});

$fourd.camera.position.z = -35;
```

### Vertices
```js
// adding
var f = $fourd.graph.add_vertex({
  cube: {size: 10, color: 0x000000},
  label: {size: 12, text: 'Hello'}
})

var g = $fourd.graph.add_vertex({
  cube: {size: 10, texture: 'path/to/image'}
})

// removing
$fourd.graph.remove_vertex(g)
```

### Edges
```js
// adding
var e = $fourd.graph.add_edge(f, g, {color: 0x000000})

// removing
$fourd.graph.remove_edge(e);
```
It's still a little rough around the edges, but I'm shelving improvements to the library to focus on an application that will make do with what I have, after which I'll continue rewriting this.

## Caveats
* Styling is imperfect, a future version addresses this, but isn't ready yet. 
* There's a Javascript API for a HTML5 Web Component, a CS equivalent of a mixed metaphor. A future version will address this, allowing the choice between HTML5 syntax and Javascript syntax. Allowing HTML5 syntax for adding and removing edges allows you to use XSLT stylesheets to draw graphs from data. 
* Less than full size doesn't work in this version. The next version addresses this.
* Resizing behavior is weird. The next version addresses this as well. 

These are not to limit you dear user, but a result of my limits grasping a complicated subject. 
* 
