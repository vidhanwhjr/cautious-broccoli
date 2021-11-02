function preload(){

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    img = createCapture(VIDEO);
    img.hide();
}
function draw(){

}

function download(){
    save('mustachefilter.png');
}