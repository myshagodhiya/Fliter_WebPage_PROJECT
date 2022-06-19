noseX=0;
noseY=0;

function preload(){
    mustache_filter= loadImage('https://i.postimg.cc/VkkqXxKZ/TRANSPARENT-MUSTACHE-FINALL.png');
}

function setup(){
        canvas=createCanvas(315,315);
        canvas.center();
        background("white");
    canvas=createCanvas(315,315);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(315,315);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0);
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video,0,0,315,315);
    image(mustache_filter, noseX-20, noseY-6, 40, 40);
}

function take_snapshot(){
    save('myFilterImage.png');
}

