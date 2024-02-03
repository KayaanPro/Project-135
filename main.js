function setup() {
    canvas = createCanvas(400, 300);
    canvas.position(735, 500);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 300);
}

function modelLoaded() {
    console.log("Model loaded!");
}

function gotPoses(poses) {

    console.log(poses);
}