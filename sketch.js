// Capstone Coding Project
//
// ****Friday The 13th****
// -Chase
// 10/19/2021
//
// Needed for game: Character & map art, Jason sprite, objects (keys, gas, battery), inventory

let state = "rest";
let img;

function preload(){
  img = loadImage("assets/pixil-frame-0 (3).png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadImage("assets/pixil-frame-0 (3).png");
  image(img, 0, 0);
}

function draw() {
  background(255);
}

function findState() {
  if (keyIsDown(UP_ARROW)) {
    state = "up";
  } 
  if (keyIsDown(DOWN_ARROW)) {
    state = "down";
  } 
  if (keyIsDown(LEFT_ARROW)) {
    state = "left";
  } 
  if (keyIsDown(RIGHT_ARROW)) {
    state = "right";
  } 
}

function displayRoom1() {
  if (state === "up"){
    loadImage("assets/pixil-frame-0 (3).png");
  }
  else if (state === "left"){
    loadImage("assets/pixil-frame-0 (2).png");
  }
  else if (state === "right"){
    loadImage("assets/pixil-frame-0 (1).png");
  }

  // else if (state === "down"){
  //   loadImage("assets/pixil-frame-0 (x)");
  // }


}


