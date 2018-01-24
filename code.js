
var n = 5;
var d = 8;

var anglen = 0;
//var angled = 0;
//set value of k(constant)
var k = n / d;
console.log(k);
//increase size of rose by scalefactor
var scalefactor = 300;

var slider;

function setup(){
  //creates a neat lil canvas
  createCanvas(window.innerWidth, window.innerHeight);
  //created slider to use later on for the shaking
  slider = createSlider(0,10,0,0.1);
  slider.style('width', '400px');
  //canvas.addEventListener("keypress", bye);
}
//draw function for guess what: drawing dasss right
function draw() {
  //mapping k to a fucking sin curve wtf this is so cool
  n = sin(anglen)
  //d = sin(angled)

//trying to get p5 to display text but nah uno
  textSize(400);
  text('word');

//adding 0.003 to the angle each time so it can move along the sin curve
  //angled += 0.1
  anglen += 0.0001
  //sets background to neat lil gray
  background(51);
  //by default it starts in the top left corner translates point to centre
  translate(width / 2, height / 2);
  //color of lines drawn
  stroke(255);
  noFill()
  beginShape();
  //makes a ranodm value using the slidervalue, default zero
  var rand = random(slider.value())

  k = n * d

  //goes thru every angle from 0 to 360(TWO_PI) in increments of 0.02
  for (var a = 0; a < TWO_PI * d; a += 0.01) {
    // using formulas here: https://en.wikipedia.org/wiki/Rose_(mathematics)
    // k is the constant
    var radius = scalefactor * cos(k * a)
    //this turns an angle and radius into x/y
    var x = radius * cos(a)
    var y = radius * sin(a)

    //rand = rand + random (-0.21,0.21)
    //point(x, y)
    vertex(x + rand, y + rand)
  }
  endShape();

}


function keyPressed() {
  save()
}
