
let img, orig;
var balls = [];

function preload() {
  img = loadImage('assets/tiger.jpg');
  orig = loadImage('assets/tiger.jpg');
}

var inverted = false;

function setup() {
    createCanvas(800, 800);
    background(0);

    img.filter("gray");
    img.resize(800, 0);
    
    orig.filter("gray");
    orig.resize(800, 0);

    img.loadPixels();
    
    
    let smallest = 255;
    let largest = 0;
    for (pixel of img.pixels) {
        if (pixel < smallest) smallest = pixel;
        else if (pixel > largest) largest = pixel;
    }
    
    //var threshold = (largest + smallest) / 3;
    var threshold = 20;
    let x = 0;
    let y = 0;
    for (var i = 0; i < img.pixels.length; i++) {
        let c = img.pixels[i];
        let pixelColor;
        if (c > threshold) pixelColor = 255;
        else pixelColor = 0;
        img.pixels[i] = pixelColor;
        // Keep track of coordinates
        y++;
        if (y > img.height) {
            x++;
            y = 0;
        }
    }
    img.updatePixels();
    //image(img,0,0);

    // choose random points where it's white
    while (balls.length < 30) {
        let x = random(0, img.width);
        let y = random(0, img.height);
        //if (img.get(x,y)[0] < 10) balls.push(new Ball(x,y,img,orig,inverted));
        if (img.get(x,y)[0] > 10) balls.push(new Ball(x,y,img,orig,inverted));
    }

}

function draw() {
    for (ball of balls) ball.render()
}