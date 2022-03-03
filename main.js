nose_x = 0;
nose_y = 0;


function preload(){
    ufo_nose = loadImage('https://i.postimg.cc/NMgCVNns/download-removebg-preview.png');

};

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    posenet = ml5.poseNet(video,modalloaded);
    posenet.on('pose',gotposes);
}

function draw(){
    image(video,0,0,400,400);
    image(ufo_nose,nose_x,nose_y,40,40);
}

function Snap(){
    save('fil.png');
}

function modalloaded(){
    console.log("Modal is loaded")
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x ="+results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x - 18;
        nose_y = results[0].pose.nose.y - 18;
    }
}