noseX = "";
noseY = "";
function preload(){

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(600, 250);
    img = createCapture(VIDEO);
    img.hide();

    posenet = ml5.poseNet(img, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
   image(img, 0, 0, 300, 300);
}

function download(){
    save('mustachefilter.png');
}

function modelLoaded(){
    console.log("MODEL LOADED");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.X;
        noseY = results[0].pose.nose.Y;
    }
}

