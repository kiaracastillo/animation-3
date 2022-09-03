var circle; // current x position of the circle
var radius = 25; //radius of the circle

function setup () {

    createCanvas(800, 600);
    circleX = 0

    fill(50, 164, 168);

}

function draw() {
    circle (circleX, height/2, radius*2);
    circleX = (circleX + 5) %width;
}