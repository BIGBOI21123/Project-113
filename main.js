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
    var c = color('black')
    var startAng = .1*PI
    var endAng = .9*PI
    var smileDiam = .6*200;
    image(video, 0, 0, 400, 400);
    circle(100, 50, 60)
    circle(300, 50, 60)
    arc(200, 200, smileDiam, smileDiam, startAng, endAng);
    fill(c)
}
function take_snapshot() {
    save("Snapshot.png");
}