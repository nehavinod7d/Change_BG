var btn_red;
var btn_green;
var btn_pink;
var btn_yellow;
var btn_orange;
var btn_purple;
var btn_brown;
var btn_gold;
var btn_silver;
var btn_black;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);

  btn_pink = createButton("PINK");
  btn_pink.position(100,100);
  btn_pink.mousePressed(pink_bg);

  btn_yellow = createButton("YELLOW");
  btn_yellow.position(250,100);
  btn_yellow.mousePressed(yellow_bg);

  btn_orange = createButton("ORANGE");
  btn_orange.position(100,150);
  btn_orange.mousePressed(orange_bg);

  btn_purple = createButton("PURPLE");
  btn_purple.position(250,150);
  btn_purple.mousePressed(purple_bg);
  
  btn_brown = createButton("BROWN");
  btn_brown.position(100,200);
  btn_brown.mousePressed(brown_bg);

  btn_gold = createButton("GOLD");
  btn_gold.position(250,200);
  btn_gold.mousePressed(gold_bg);

  btn_silver = createButton("SILVER");
  btn_silver.position(100,250);
  btn_silver.mousePressed(silver_bg);

  btn_black = createButton("BLACK");
  btn_black.position(250,250);
  btn_black.mousePressed(black_bg);
}

function draw() {
  background(r,g,b);
}

function red_bg() {
  r = 255;
  g = 0;
  b = 0;
}

function green_bg() {
  r = 0;
  g = 255;
  b = 0;
}

  function pink_bg() {
    r = 255;
    g = 192;
    b = 203;
  
}

function yellow_bg() {
r = 255;
g = 255;
b = 0;
}

function orange_bg() {
r = 255;
g = 165;
b = 0;
}

function purple_bg() {
  r = 160;
  g = 32;
  b = 240;
}

function brown_bg() {
  r = 150;
  g = 75;
  b = 0;
}

function gold_bg() {
  r = 255;
  g = 215;
  b = 0;
}

function silver_bg() {
r = 192;
g = 192;
b = 192;
}
function black_bg() {
  r = 0;
  g = 0;
  b = 0;
  }
