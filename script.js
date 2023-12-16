console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/.1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementById('songItem'));

let songs = [
    {songName: "Ram Siya Ram", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ram Siya Ram", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Ram Siya Ram", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Ram Siya Ram", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Ram Siya Ram", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Ram Siya Ram", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ram Siya Ram", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ram Siya Ram", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Ram Siya Ram", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Ram Siya Ram", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
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
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex = 0
    }
    else{
        
    }
    songIndex += 1;

})