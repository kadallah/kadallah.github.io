// var history;
// var music;
// var medical;
// var channels = [];

function preload(){
  VCR = loadFont('assets/VCR.ttf');
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(0,0,255);
  fill(40,243,46);

  var history = createVideo('history.mp4');
  var music = createVideo('music.mp4');
  var medical = createVideo('medical.mp4');
  var interview = createVideo('adan.mp4');
  var credit = createVideo('credits.mp4');

  channels = [
    {
      chanName: 'HST',
      video: history
    }, 
    {
      chanName: 'MTV',
      video: music
    },
    {
      chanName: 'MD',
      video: medical
    },
    {
      chanName:'INT',
      video: interview
    },
    {
      chanName: 'CRD',
      video: credit
    }
  ];   
  
  for(i = 0; i < channels.length-1; i++){
      channels[i].video.hide();
      channels[i].video.loop();
      channels[i].video.volume(0);
  }

  chanNum = 0;
  vol = 0.5;

  channels[0].video.volume(vol);
}

function changeLeft(){
  print("LEFT");
  if(chanNum > 0){
    chanNum--;
    channels[chanNum+1].video.volume(0); 
  } else {
    chanNum = channels.length-1;
    channels[0].video.volume(0);
  }
  print(chanNum);
  channels[chanNum].video.volume(vol);
  channels[chanNum].video.loop();
}
function changeRight(){
  print("RIGHT"); 
  if(chanNum < channels.length-1){
    chanNum++;
    channels[chanNum-1].video.volume(0);
  } else {
    chanNum = 0;
    channels[channels.length-1].video.volume(0);
  }
  print(chanNum);
  channels[chanNum].video.volume(vol);
  channels[chanNum].video.loop();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    changeLeft();
  } else if (keyCode == RIGHT_ARROW) {
    changeRight();
  } else if (keyCode == UP_ARROW) {
    if(vol < 1){
      vol+=0.1;
    }
    channels[chanNum].video.volume(vol);
    print(vol);
  } else if (keyCode == DOWN_ARROW) {
    if(vol > 0){
      vol-=0.1;
    }
    channels[chanNum].video.volume(vol);
    print(vol);
  }
  return false; // prevent default
}

function draw() { 
  image(channels[chanNum].video, 0, 0, width, height);
  textFont(VCR, width * .06);
  textAlign(LEFT, TOP);
  text(channels[chanNum].chanName, width * .125, height * .166);
}