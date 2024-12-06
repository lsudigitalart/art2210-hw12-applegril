let chaos = false;
let bgColor = [215, 46, 80]; 

function setup() {
  createCanvas(800, 400);
  for (var x = 0; x < width + 1; x++) {
    line(x, 0, x, height); 
    stroke(x);
  }
  var circleSize = 3;
  for (var i = circleSize / 2; i < width; i = i + circleSize * 1.25) {
    for (var n = circleSize / 2; n < height; n = n + circleSize * 1.25) {
      fill(118, 181, 197);
      noStroke();
      ellipse(i, n, circleSize);
    }
  }
}

function draw() {
  frameRate(7);

  // Change background color when mouse is pressed
  if (mouseIsPressed) {
    chaos = true;
    bgColor = [random(255), random(255), random(255)]; 
  } else {
    chaos = false;
  }

  background(bgColor);

  angleMode(DEGREES);
  let x = frameCount * 0.1;
  let y = frameCount * 0.002;
  let angle = 0;
  let r = random(45, 55);
  let f = random(1, 300);

  //made animation more random and stacked
  noStroke();
  scale(f / 100);

  for (let i = 1; i <= 4; i++) {
    push();
    let randomX = chaos ? random(-300, 300) : 0; 
    let randomY = chaos ? random(-300, 300) : 0; 
    let randomRotation = chaos ? random(360) : 0; 
    translate(400 + randomX, 200 + randomY); 
    rotate(millis() / 1000 * PI * r + randomRotation); 
    fill(180, 163, 142);
    quad(0, -60, 90, -23, 0, 14, -90, -23);
    pop();
  }

  
  push();
  rotate(millis() / 1000 * PI * 90);
  fill(211, 96, 181);
  quad(310, 83, 400, 120, 400, 370, 245, 290);
  pop();

  
  push();
  rotate(millis() / 1000 * PI * 105);
  fill(145, 195, 121);
  quad(400, 120, 490, 83, 555, 290, 400, 370);
  pop();
}
