let yPos = 25;
let r,g,b
function setup() {
  createCanvas(500, 500);
  background(0);
   r = random(0,225)
   g = random(0,225)
   b = random(0,225)
}

function draw() {
  background(0, 20);

  fill(r, g, b);
  ellipse(250, yPos, 50, 50);

  yPos += 3;

  if (yPos > 525) {
    yPos = -25;
  }
}
function mouseClicked(){
  yPos = -25
   r = random(0,225)
   g = random(0,225)
   b = random(0,225)
}