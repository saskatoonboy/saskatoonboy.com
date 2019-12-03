// Line Art
// Eric James
// Sept. Mon. 9th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let layers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  new Layer(width, height);
}

function draw() {
  background(220);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
