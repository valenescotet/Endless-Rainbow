var x = [];
var y = [];
var speed=0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0,0,0,20);
  for (var i=0;i<x.length;i++){
if (dist(x[i],y[i], mouseX, mouseY) > 40) {
  fill(255);
  }
  else{
fill(random(255), random(255), random(255));  
  
  }

noStroke()
 ellipse(x[i], y[i], 60, 60);
  x[i]++;
  y[i]++; 
  
  } 

} 


function mousePressed () {
  x.push(mouseX);
  y.push(mouseY);
}