// event.altKey - нажатие клавиши "ALT"

let key_1 = 49;
let key_2 = 50;
let key_3 = 51;
let key_4 = 52;
let key_5 = 53;
let key_6 = 54;
let key_A = 65;
let key_S = 83;



window.addEventListener('load', function () {
    document.addEventListener("keydown", logKey)
})



function logKey(event) {
  let video_stream = document.getElementsByClassName("video-stream html5-main-video")[0];
  
  if(event.altKey && event.keyCode == key_1){
    video_stream.playbackRate = 1.0;
  }
  if(event.altKey && event.keyCode == key_2){
	video_stream.playbackRate = 2.0;
  }
  if(event.altKey && event.keyCode == key_3){
	video_stream.playbackRate = 3.0;
  }
  if(event.altKey && event.keyCode == key_4){
	video_stream.playbackRate = 4.0;
  }
  if(event.altKey && event.keyCode == key_5){
	video_stream.playbackRate = 5.0;
  }
  if(event.altKey && event.keyCode == key_6){
	video_stream.playbackRate = 6.0;
  }
  if (event.altKey && event.keyCode == key_A) {
	  if (video_stream.playbackRate > 0.20){
		video_stream.playbackRate -= 0.10;
	  }	
  }
  if (event.altKey && event.keyCode == key_S) {
	  if (video_stream.playbackRate < 9.90){
		video_stream.playbackRate += 0.10;
	  }			
  }
}