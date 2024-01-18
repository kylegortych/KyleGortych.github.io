/*
 _    ___     __
| |  / (_)___/ /__  ____
| | / / / __  / _ \/ __ \
| |/ / / /_/ /  __/ /_/ /
|___/_/\__,_/\___/\____/
   ______      ____
  / ____/___ _/ / /__  _______  __
 / / __/ __ `/ / / _ \/ ___/ / / /
/ /_/ / /_/ / / /  __/ /  / /_/ /
\____/\__,_/_/_/\___/_/   \__, /
                         /____/

  Descript:
  js for video galery in sampleWork.html

  File name:     videoGallery.js
  Maintainer:    Kyle Gortych
  Created:       05-08-2022
  Last Modified: 01/13/2024
*/

let listVideos = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideos.forEach(video => {
  video.addEventListener("click", function() {
    listVideos.forEach(vid => vid.classList.remove("active"));
    video.classList.add("active");
    mainVideo.src = this.querySelector("video source").src;
    title.innerHTML = this.querySelector(".title").innerHTML;
  });
});