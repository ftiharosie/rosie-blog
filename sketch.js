function setup() {
  createCanvas(1640, 1480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0, 102, 204);
    rect(mouseX, mouseY, 80, 80);
  } else {
    fill(56, 5, 9);
  }
}


var eyeSize = 33;

noStroke();

// face
fill(255, 255, 0);
ellipse(202, 208, 300, 300);

// eyes
fill(46, 46, 41);
ellipse(157, 151, eyeSize, eyeSize);
ellipse(304, 142, eyeSize, eyeSize);

// mouth
fill(252, 65, 65);
ellipse(257, 240, 120, 136);
