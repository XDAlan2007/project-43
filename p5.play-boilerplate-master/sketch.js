var min, hr, sc;
var mnAngle, hrAngle, scAngle; 


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);


}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  hr=hour();
  min=minute();
  sc=second();

  console.log("the hour right now is: "+hr);
  console.log("the second right now is: "+sc);
  console.log("the current minute is: "+min);

  scAngle=map(sc,0,60,0,360);
  mnAngle=map(min,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);


  //to make the lines on the clock
  push();
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop();

  push();
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop();

  push();
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop();
//to assign the centre point
  stroke(255,0,255);
  point(0,0)
  strokeWeight(10)
  noFill()
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle)

  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);

  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);



  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  //let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
 // let d = map(mouseX, 0, width, 40, 300);
  //fill(255, c, 0);
  //ellipse(width/2, height/2, d, d);
}