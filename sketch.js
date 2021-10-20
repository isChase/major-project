// Capstone Coding Project
//
// ****Friday The 13th****
// -Chase
// 10/19/2021
//
// Needed for game: Character & map art, Jason sprite, objects (keys, gas, battery), inventory


let x = 200;
let y = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill(0);
  rect(x, y, 10, 10);
  if (x >= windowWidth){
    x = 0; 
  }
}


function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    y -= 10;
  } 
  if (keyIsDown(DOWN_ARROW)) {
    y += 10;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x -= 10;
  } 
  if (keyIsDown(RIGHT_ARROW)) {
    x += 10;
  }  
}