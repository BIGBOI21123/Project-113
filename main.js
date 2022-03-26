function preload() {
}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(180, 300);
    video = createCapture(VIDEO);
    video.hide();
    Tint = "";
}
function draw() {
    var c = color('Gray')
    var b = color('Blue')
    var startAng = .1*PI
    var endAng = .9*PI
    var smileDiam = .6*200;
    image(video, 0, 0, 400, 400);
    circle(100, 80, 60);
    circle(300, 80, 60);
    arc(200, 290, smileDiam, smileDiam, startAng, endAng);
    rect(0, 0, 400, 50);
    rect(0, 0, 50, 400);
    rect(0, 350, 400, 50);
    rect(350, 0, 50, 400);
    fill(b)
    circle(100, 80, 40);
    circle(300, 80, 40);
    fill(c)
}
function take_snapshot() {
    save("Snapshot.png");
}