// Line Art
// Eric James
// Sept. Mon. 9th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let layers = [];
let img;

function preload() {
  img = loadImage("bird.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  new Layer(0, 0, width, height, color(255));
  //layers[0].newImage(100, 100, img);
}

function draw() {
  for (let layer of layers) {
    layer.display();
  }
  image(img, 0, 0, img.width, img.height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
