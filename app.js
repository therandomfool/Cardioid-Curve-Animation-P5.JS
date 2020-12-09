let points = 200;
let radius;
let factor = 0;
let count = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    radius = width / 2 - 125;
}

function findPoints(num) {
    let angle = map(num, 0, points, 0, PI * 2);
    let x = radius * cos(angle - PI);
    let y = radius * sin(angle - PI)
    let vec = createVector(x, y);
    return vec;
}

function draw() {
    background(0, 1, 15);
    factor += 0.005;
    translate(width/2, height/2);
    if (count > 100){
        let r = random(255);
        let b = random(255);
        let g = random(255);
        count = 0;
        stroke(r,g,b);
    }
    count++;
    strokeWeight(.7);
    noFill();
    circle(0,0,radius*2);

    for (let i = 0; i < points; i++){
        let a = findPoints(i);
        let b = findPoints(i* factor);
        line(a.x, a.y, b.x, b.y);
    }
}
