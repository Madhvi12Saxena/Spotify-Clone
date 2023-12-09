console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/.1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementById('songItem'));

let songs = [
    {songName: "Ram Siya Ram", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ram Siya Ram", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ram Siya Ram", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ram Siya Ram", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ram Siya Ram", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ram Siya Ram", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ram Siya Ram", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ram Siya Ram", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ram Siya Ram", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ram Siya Ram", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
]

songItems.forEach((element, i) => {
    element.getElementByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementByClassName("songName")[0].innerText = songs[i].songName; 
});

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', ()=>{
        // console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })
})