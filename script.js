console.log("welcome to music")

let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('progressbar');
let gif= document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let masterSongName=document.getElementById('masterSongName');
let songs=[
    {songName:"praise the lord", filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"fair trade", filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songName:"praise the lord", filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songName:"praise the lord", filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songName:"praise the lord", filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songName:"praise the lord", filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songName:"praise the lord", filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songName:"praise the lord", filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    {songName:"praise the lord", filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},

]

songitems.forEach((element,i)=> {

    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
    
});
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity=1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
       masterPlay.classList.add('fa-play-circle');
       gif.style.opacity=0;
    
    }
})

//seekbar
audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate')
progess=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progess);
myprogressbar.value=progess; 

})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100 ;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songplay')).forEach((element)=> {
    element.addEventListener('click',(e)=>{
      console.log(e);
        makeAllPlays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songindex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterSongName.innerText = songs[songindex].songName;

        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    
});
document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=9){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0
    }
    else{
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
