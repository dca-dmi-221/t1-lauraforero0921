let backGrounds = [];
let screen = 0;
let ironManPlaylistButton = new Button(506, 346, "ironman", 0, 0, 400);
let spiderManPlaylistButton = new Button(1066, 346, "spiderman", 0, 0, 400);
let backButton = new Button(65, 50, "spiderman", 0, 0, 100);
let ironManSongs = [];
let ironManImages = [];
let spiderManSongs = [];
let spiderManImages = [];

//Volumen
let volumeSlider;

//BUTTONS
let playButton = new Button(512, 770, "PLAY", 0, 35, 90);
let stopButton = new Button(615, 770, "STOP", 0, 35, 90);
let nextSongButton = new Button(834, 770, "NEXT", 0, 35, 90);
let previousSongButton = new Button(255, 770, "PREVIOUS", 0, 35, 90);

let songIndex = 0;

let ironManSongsObject = [];

ironManSongsObject[0] = new Song("Back in Black", "AC/DC", "4:15", 1380, 450, 0);
ironManSongsObject[1] = new Song("High Way To Hell","AC/DC","3:29", 1380, 620, 1 );
ironManSongsObject[2] = new Song("Shoot To Thrill", "AC/DC", "5:17", 1380, 790, 2);

let spiderManSongsObject = [];

spiderManSongsObject[0] = new Song("Sunflower", "Post Malone", "3:13", 1380, 450, 0);
spiderManSongsObject[1] = new Song("Its On Again","Alishia Keys","3:50", 1380, 620, 1 );
spiderManSongsObject[2] = new Song("Vacations","The GoGhost","3:00", 1380, 790, 2 );



function preload() {

  //Backgrounds
  backGrounds[0] = loadImage("./assets/playlist.png");
  backGrounds[1] = loadImage("./assets/spiderMan.png");
  backGrounds[2] = loadImage("./assets/ironMan.png");

  //ironMan Images
  ironManImages[0] = loadImage("./assets/acdc.png");
  ironManImages[1] = loadImage("./assets/highWayToHell.png");
  ironManImages[2] = loadImage("./assets/acdc.png");

  //spiderMan Images
  spiderManImages[0] = loadImage("./assets/sunflower.png");
  spiderManImages[1] = loadImage("./assets/itsOnAgain.png");
  spiderManImages[2] = loadImage("./assets/vacations.png");


  ironManSongs[0] = loadSound("./audio/backinblack.mp3");
  ironManSongs[1] = loadSound("./audio/highWayToHell.mp3");
  ironManSongs[2] = loadSound("./audio/shoottothrill.mp3");

  spiderManSongs[0] = loadSound("./audio/sunflower.mp3");
  spiderManSongs[1] = loadSound("./audio/itsonagain.mp3");
  spiderManSongs[2] = loadSound("./audio/vacation.mp3");
  
}


function setup() {
  createCanvas(1980, 1080);
  

    volumeSlider = createSlider(0, 1, 0.5, 0.01);
    volumeSlider.position(374, 910);
    volumeSlider.style('width', '400px');
}

function draw() {
  background(220);

  console.log(songIndex)

  image(backGrounds[screen], 0, 0, 1980, 1080);
  textSize(100);
  fill(255);

  //While in screen 0
  if (screen == 0) {
    volumeSlider.style('display', 'none');

    ironManSongs[songIndex].stop();
    spiderManSongs[songIndex].stop();
  }

  //If either screen 0 o 1
  //Screen 1

  if (screen === 1) { 
    
    volumeSlider.style('display', 'block');

     for (let i = 0; i < spiderManSongsObject.length; i++) { 
       spiderManSongsObject[i].draw(spiderManImages[i]);
       
       if (songIndex === spiderManSongsObject[i].getPos()) {
         spiderManSongsObject[i].setSelected(true);
       } else {
         spiderManSongsObject[i].setSelected(false);
       }
     }

    spiderManSongs[songIndex].setVolume(volumeSlider.value())
    
  }

  //Screen 2
  if (screen === 2) { 
    
    volumeSlider.style('display', 'block');

     for (let i = 0; i < ironManSongsObject.length; i++) { 
       ironManSongsObject[i].draw(ironManImages[i]);
       
       if (songIndex === ironManSongsObject[i].getPos()) {
         ironManSongsObject[i].setSelected(true);
       } else {
         ironManSongsObject[i].setSelected(false);
       }
     }

    ironManSongs[songIndex].setVolume(volumeSlider.value())
    
  }
}

function mousePressed() { 
  //screen++;
  
  //Screen 0
  if (screen == 0) { 
    if (dist(ironManPlaylistButton.getX(), ironManPlaylistButton.getY(), mouseX, mouseY) < ironManPlaylistButton.radius) {
      console.log("undidos")
       screen = 2;
    }

    if (dist(spiderManPlaylistButton.getX(), spiderManPlaylistButton.getY(), mouseX, mouseY) < ironManPlaylistButton.radius) {
    console.log("undidos")
    screen = 1;
    }
  }

  //If either screen 0 o 1
  if (screen == 1 || screen == 2) { 

    if (dist(backButton.getX(), backButton.getY(), mouseX, mouseY) < backButton.radius) { 
      screen = 0;
    }

      //Play
  if (dist(playButton.getX(), playButton.getY(), mouseX, mouseY) < 25) {
    play();
  }

  //Stop
  if (dist(stopButton.getX(), stopButton.getY(), mouseX, mouseY) < 25) {
    pause();
  }

  //Next
  if (dist(nextSongButton.getX(), nextSongButton.getY(), mouseX, mouseY) < 25) {
    nextSong();
  }

  //Previous
  if (dist(previousSongButton.getX(), previousSongButton.getY(), mouseX, mouseY) < 25) {
    previousSong();
  }

  }

  //If screen 1
  if (screen == 1) {
    
    
    for (let i = 0; i < spiderManSongsObject.length; i++) {
      if (dist(spiderManSongsObject[i].getX(), spiderManSongsObject[i].getY(), mouseX, mouseY) < 90) { 
        stop();
        songIndex = spiderManSongsObject[i].getPos();
        play();
        console.log(songIndex);
      }
    }
  }

  //If screen 2
  if (screen == 2) {
    
    
    for (let i = 0; i < ironManSongsObject.length; i++) {
      if (dist(ironManSongsObject[i].getX(), ironManSongsObject[i].getY(), mouseX, mouseY) < 90) { 
        stop();
        songIndex = ironManSongsObject[i].getPos();
        play();
        console.log(songIndex);
      }
    }
  }
  
}

function play() { 

  if (screen === 1) { 
    spiderManSongs[songIndex].play();
  }

  if (screen === 2) { 
    ironManSongs[songIndex].play();
  }
}

function pause() { 

  if (screen === 1) { 
    spiderManSongs[songIndex].pause();
  }

  if (screen === 2) { 
    ironManSongs[songIndex].pause();
  }
}

function stop() { 

   if (screen === 1) { 
    spiderManSongs[songIndex].stop();
  }

    if (screen === 2) { 
    ironManSongs[songIndex].stop();
  }
}

function nextSong() {

  if (screen === 1) { 

   stop();
  if(songIndex<spiderManSongs.length-1){
  songIndex+=1;
  }
  else{
    songIndex=0;
  }
    play();
    
  }

  if (screen === 2) { 

   stop();
  if(songIndex<ironManSongs.length-1){
  songIndex+=1;
  }
  else{
    songIndex=0;
  }
    play();
    
  }
}

function previousSong() { 

  if (screen === 1) { 

    stop();
    if (songIndex > 0) {
        songIndex -= 1;
      } else { 
        songIndex = spiderManSongs.length - 1;
      }
      play()
    }


  if (screen === 2) { 

    stop();
    if (songIndex > 0) {
        songIndex -= 1;
      } else { 
        songIndex = ironManSongs.length - 1;
      }
      play()
    }

}