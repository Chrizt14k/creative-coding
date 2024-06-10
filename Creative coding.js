//Clock:

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background("green");
  fill("#FFFC00")
  ellipse(275, 300, 100, 150);
  fill("#316F5C")
  rect(250, 75, 50, 150);
  rect(250, 375, 50, 150);
  fill("#00FFF9")
  triangle(240, 350, 310, 350, 275, 227);

  let angle = radians(frameCount * 6); 
  let radius = 60; 
  let handX = 275 + cos(angle) * radius;
  let handY = 300 + sin(angle) * radius;

  stroke(0, 0, 0);
  strokeWeight(1);
  line(275, 300, handX, handY);
}



//Ice cream:
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background('gray');
  
  fill("brown")
  circle(215, 130,  100);
  
  fill("green")
  circle(215, 180,  100);
  
  fill("red")
  circle(215, 225,  100);
  
   
  fill("#00FFF9")
  triangle(220, 380,   275, 227,   150, 227);
  
  strokeWeight(1);
}


//Train:
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background('rgb(150,150,255)');
  
  push();
  fill("blue");
  triangle(215, 230,  100, 232,  214, 130);
  pop();
  
  
  push();
  fill("gray");
  translate(240, 135);
  rotate(radians(280));
  rect(0, 0, 40,20);
  pop();
  
  
  push();
  fill("brown");
  translate(215, 130);
  rect(0, 0, 100);
  pop();
  

  push();
  fill("green");
  translate(215, 240);
  circle(0, 0, 60);
  pop();
  
  push();
  fill("green");
  translate(315, 240);
  circle(0, 0, 60);
  pop();
  
  stroke("black"); 
  strokeWeight(2);
}


//Mouse:
let faceSize = 40;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  fill('pink');
  ellipse(mouseX, mouseY + 10, faceSize, faceSize + 10);

  fill('black');
  ellipse(mouseX - 10, mouseY, 5, 5);
  ellipse(mouseX + 10, mouseY, 5, 5);

  arc(mouseX, mouseY + 10, 20, 10, 0, PI);

  fill('red');
  rect(mouseX - 15, mouseY + 25, 30, 20);
}

function mousePressed() {
  background(255);
}



//Crosshair:
function setup() {
  createCanvas(500, 500);
   background(220);
  
  
  fill(0);
  ellipse(50, 250, 50, 50); 
  line(55, 275, 55, 350);  
  line(55, 350, 50, 380);  
  line(55, 350, 70, 380);  
  line(55, 315, 85, 315);  
  line(55, 315, 35, 310);  

  
  fill(100);
  rect(85, 300, 10, 20);
  rect(90, 290, 25, 10);
}



function draw() {
 

  
}

function mousePressed() {
  fill('rgb(252, 0, 0)');
  rect(mouseX - 25, mouseY, 20, 5);
  rect(mouseX + 10, mouseY, 20, 5);
  rect(mouseX + 2, mouseY + 10, 5, 20);
  rect(mouseX + 2, mouseY - 25, 5, 20);
}


//Toilet:
let faceSize = 40;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  fill('rgb(11,86,255)');

  arc(mouseX, mouseY + 10, 65, 40, 0, PI);
  arc(mouseX - 35, mouseY - 15, 40, 50, 0, PI);
  rect(mouseX -20 , mouseY + 28, 40, 30);

}

function mousePressed() {
  background(255);
}

//Southpark:
let faceSize = 40;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  fill('pink');
  ellipse(mouseX, mouseY + 10, faceSize, faceSize + 10);

  fill('black');
  ellipse(mouseX - 10, mouseY, 5, 5);
  ellipse(mouseX + 10, mouseY, 5, 5);

  arc(mouseX, mouseY + 10, 20, 10, 0, PI);

  fill('red');
  rect(mouseX - 15, mouseY + 25, 30, 20);
  
  fill('rgb(217,215,39)')
  rect(mouseX - 25, mouseY - 25, 50, 10);
   fill('rgb(217,215,39)')
  rect(mouseX - 17, mouseY - 35, 35, 10);
}

function mousePressed() {
  background(255);
}


//Image

var img;
function preload(){
  img = loadImage("fps.jpg")
  
}

function setup() {
  
  createCanvas (400,400);
  background(0);
  
}

function draw(){
  background(0)
  tint(255,0,0);
  
  image(img,0,0,img.width/2.5, img.height/2.5);
  
  noTint();
  image(img,img.height/2.5,0,img.width/2.5, img.height/2.5);
  
  image(img,0,img.height/2.5,img.width/2.5, img.height/2.5);
  
}



//Tint
var img;
function preload(){
  img = loadImage("sample1.jpg")
  
}

function setup() {
  
  createCanvas (500,500);
  background(0);

}

function draw(){
  background(0)
  tint(255,0,0);
  
  image(img,0,0,img.width/2, img.height/2);
  
  
}

//noTint
var img;
function preload(){
  img = loadImage("fps.jpg")
  
}

function setup() {
  
  createCanvas (500,500);
  background(0);

}

function draw(){
  background(0)
  noTint();  
  
  image(img,0,0,img.width/2, img.height/2);
  
 
  
}


//Blur
var img;
function preload(){
  img = loadImage("Batman.jpg")
  
}

function setup() {
  
  createCanvas (1000,1000);
  background(0);

}

function draw(){
  background(0)
  noTint();
  
  image(img,0,0,img.width/2, img.height/2);
    filter(BLUR, 4)
  
}

//THRESHOLD
var img;
function preload(){
  img = loadImage("sample1.jpg")
  
}

function setup() {
  
  createCanvas (500,500);
  background(0);

}

function draw(){
  background(0)
  tint(255,0,0);
  
  image(img,0,0,img.width/2, img.height/2);
  
    var v = map(mouseX, 0, width, 0, 1);
  filter(THRESHOLD, v)
  
}

//POSTERIZE
var img;
function preload(){
  img = loadImage("sample1.jpg")
  
}

function setup() {
  
  createCanvas (500,500);
  background(0);

}

function draw(){
  background(0)
  noTint();
  
  image(img,0,0,img.width/2, img.height/2);
  
  filter(POSTERIZE, 5)
  
}

//INVERT
var img;
function preload(){
  img = loadImage("sample1.jpg")
  
}

function setup() {
  
  createCanvas (500,500);
  background(0);

}

function draw(){
  background(0)
  tint(255,0,0);
  
  image(img,0,0,img.width/2, img.height/2);
  
    var v = map(mouseX, 0, width, 0, 1);
  filter(INVERT, v)
  
}


//Loop
function setup() {
  createCanvas(400, 400);
    background(220);

}

function draw() {
  for(var i=0; i<5; i+=1){
  fill ('red');
  rect(50*i, 0, 20, 20);
 }
}

//Loop pt2
function setup() {
  createCanvas(400, 400);
    background(220);

}

function draw() {
  for(var i=1; i<65; i*=2){
  fill ('rgb(252,0,0)');
  rect(2*i, height/2, i);
 }
}


//Color loops
function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  for (var i=0; i<width/10; i++) {
  for (var j = 0; j < height/10; j++){
  fill(0, 200, 10*i);
  rect(10*i, 10*j, 9, 9); 
}
}
   }

//Eye loops
function setup() {
  createCanvas(400, 400);
}

function draw() {
  var circleSize = 50;
  translate(circleSize / 2, circleSize / 2);
  
  for (var x = 0; x < width; x += circleSize) {
    for (var y = 0; y < height; y += circleSize) {
      fill(200);
      ellipse(x, y, circleSize * 1.2, circleSize * 0.9);
      
      fill(294);
      ellipse(x, y, circleSize * 0.8, circleSize * 0.8);
      
      fill(225);
      ellipse(x, y, circleSize * 0.3, circleSize * 0.3);
    }
  }
}

//Color Loop
function setup() {
  createCanvas(400, 400);
}

function draw() {
   background(200);
  for(var i = 0; i<10; i+=1){
    fill(36*i,100,100);
    rect(width/10*i,0,width/10,height);

  
}
   }


//Random
function setup() {
  var rectSize = random(100);
  
  createCanvas(400, 400);
  colorMode(HSB,360,100,100);
  var x = random(width-rectSize);
  var y = random(height-rectSize);
  background(random(100),100,100);
  
  noStroke();
  fill(random(360),100,100);
  rect(x,y,rectSize,rectSize);
}


//Random circle
//repetition 
function setup() {
  createCanvas(500, 500);
  background(100);
  
  let spacing = 40;
  let size = 40;
  
  for (let x = 2; x < width; x += spacing) {
    for (let y = 2; y < height; y += spacing) {
      if (random(1) > 0.5) {
        fill(255, 0, 0); // Red
      } else {
        fill(0, 0, 255); // Blue
      }
      ellipse(x, y, size, size);
    }
  }
}

//Random rect
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  background(random(100), 100, 100);
  
  var rectSize = random(100);
  
  for (let x = 0; x < width; x += rectSize) {
    for (let y = 0; y < height; y += rectSize) {
      if (random(1) > 0.5) {
        fill(random(360), 100, 100);
      } else {
        fill(random(360), 50, 100);
      }
      rect(x, y, rectSize, rectSize);
    }
  }
}

//Random lines
function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100);
  background(random(100), 100, 100);
  
  for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 20) {
      if (x % 40 === 0 && y % 40 === 0) {
        strokeWeight(4);
        stroke(random(360), 100, 100);
        line(x, y, x + 20, y + 20);
      } else if (x % 40 === 0) {
        strokeWeight(2);
        stroke(random(360), 50, 100);
        line(x, y, x + 20, y + 20);
      } else if (y % 40 === 0) {
        strokeWeight(2);
        stroke(random(360), 80, 100);
        line(x, y + 20, x + 20, y);
      } else {
        strokeWeight(2);
        stroke(random(360), 20, 100);
        line(x, y, x + 20, y + 20);
      }
    }
  }
}





//Bathspa:
let customFont;
let word = "BATH SPA UNIVERSITY";
let colors = ['#FFC0CB', '#FFA07A', '#20B2AA', '#9370DB', '#FFD700', '#00FF7F']; 

function preload() {
  customFont = loadFont('anh.ttf'); 
}

function setup() {
  createCanvas(2000, 2000);
  background('#E91A1A'); 

  textFont(customFont);
  textSize(100);

  let x = 100;
  let y = 100; 

  for (let i = 0; i < word.length; i++) {
    let color = random(colors); 

    fill(color);
    text(word.charAt(i), x, y); 
    x += 70; 
  }
}


//Happy:
var points;
function preload(){
  font = loadFont("R2.ttf");
}

var points;

function setup() {
  createCanvas(600,400);
  
  stroke(0);
  points = font.textToPoints('Happy', 100, 100, 100, {
    sampleFactor:0.15});
  
  background(255);


for (var i = 0; i < points.length; i++) {
  var p = points[i];
  ellipse(p.x, p.y, 3, 3);
  }
}


//Welcome:
var word = "Dear Christmas";
var font1;
function preload(){
  font1 = loadFont("R1.ttf");
}

function setup() {
  createCanvas(600,400);
  background(255);
  fill(0);
  textFont(font1);
  textAlign(CENTER);
  textSize(100);
  text(word, width/2, height/2);
  
}


////Sound:
var mySound;

function preload() {
  mySound = loadSound("Banana.mp3");
}


function setup() {
  createCanvas(400, 400);
  background(0);

  mySound.setVolume(1);

  mySound.play();

}

function draw() {
}

Mic:
var mic;
function setup(){
  createCanvas(512,400);
  
  fill(0,400,225);
  mic= new p5.AudioIn();
  mic.start();
  
}
function draw(){
  background(0);
  var vol = mic.getLevel();
  ellipse(100,100,200,vol*200);
  console.log(vol);
}

//Mic design:
var mic;

function setup() {
  createCanvas(512, 400);
    colorMode(HSB, 360, 100, 100);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0, 0, 10); 

  var vol = mic.getLevel();

  push();
  translate(width / 2, height / 2); 
  for (var i = 0; i < 12; i++) { 
    push();
    rotate(i * (TWO_PI / 12)); 
    fill(i * 30, 80, 80); 
    rect(0, 0, vol * 300, 20); 
    pop();
  }
  pop();

 
  push();
  noStroke();
  fill(0, 0, 100, vol * 0.5); 
  rect(0, 0, width, height);
  pop();
}


//Data
var numbers = [19, 30, 62, 90, 52];

function setup() {
  createCanvas(400, 400);
  background(100);

  for (var i = 0; i < numbers.length; i++) {
    var n = numbers[i];
    fill(n, 100, 100);
    rect(i * 20, height - n, 20, n);
  }
}


//Pie chart
let angles = [30, 60, 90, 120, 150];
let colors = ['#FF5733', '#FFC300', '#DAF7A6', '#C70039', '#900C3F'];
let total = 0;

function setup() {
  createCanvas(400, 400);
  angles.forEach(angle => total += angle);
}

function draw() {
  background(220);
  let startAngle = 0;
  for (let i = 0; i < angles.length; i++) {
    let segmentAngle = radians(angles[i]);
    let endAngle = startAngle + segmentAngle;
    
    if (mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      let d = dist(mouseX, mouseY, width / 2, height / 2);
      let segmentRadius = sqrt(sq(width / 2) + sq(height / 2));
      if (d < segmentRadius / 2) {
        fill(colors[i]);
        arc(width / 2, height / 2, segmentRadius, segmentRadius, startAngle, endAngle, PIE);
      }
    } else {
      fill(colors[i]);
      arc(width / 2, height / 2, 200, 200, startAngle, endAngle, PIE);
    }
    startAngle += segmentAngle;
  }
}




//Game: 
let r = 15
let points = 0
let timer = 5

function setup() {
  createCanvas(600, 400);
  ball = createVector(
    random(r, width - r),
    random(r, height - r))
}


function draw() {
  background(220);
  textSize(20)
  text(points, 20, 30)
  
  
  player = createVector(mouseX, mouseY)
  ellipse(ball.x, ball.y, r*2)
  
  if (timer > 0 && points > 0){
  timer -= 1/60  
  }
  
  
  let len = map(timer, 0, 10, 0, 200)
  rect(15, 50, 20, len)

  if (timer < 0){
    noLoop()
    textAlign(CENTER)
    textSize(50)
    text("Skill issue", width/2, height/2)
  }
  
}

function mousePressed(){
  let d = p5.Vector.dist(player, ball)
    if (d < r){
      ball = createVector(
    random(r, width - r),
    random(r, height - r))
      points++
      if (points > 1){
      timer+= 0.5  
      }
      
  }
}





