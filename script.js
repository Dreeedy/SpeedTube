document.addEventListener("keydown", logKey);

function logKey(event) {
  if(event.altKey && event.keyCode == 49){
	  document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 1.0;
	  console.log("playbackRate = 1.0");
  }
  if(event.altKey && event.keyCode == 50){
	  document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 2.0;
	  console.log("playbackRate = 2.0");
  }
  if(event.altKey && event.keyCode == 51){
	  document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 3.0;
	  console.log("playbackRate = 3.0");
  }
  if(event.altKey && event.keyCode == 52){
	  document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 4.0;
	  console.log("playbackRate = 4.0");
  }
  if(event.altKey && event.keyCode == 53){
	  document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 5.0;
	  console.log("playbackRate = 5.0");
  }
  if(event.altKey && event.keyCode == 54){
	  document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 6.0;
	  console.log("playbackRate = 6.0");
  }
  if (event.altKey && event.keyCode == 65) {
	  if (document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate < 10.0){
				document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate -= 0.10;
				console.log("playbackRate -= 0.10");
			}	
  }
  if (event.altKey && event.keyCode == 83) {
	  if (document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate > -2.0){
				document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate += 0.10;
				console.log("playbackRate += 0.10");
			}			
  }
}