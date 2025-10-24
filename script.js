// Popup galeri
const photos = document.querySelectorAll('.photo');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupCaption = document.getElementById('popup-caption');
const closeBtn = document.getElementById('close');

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    popupImg.src = photo.querySelector('img').src;
    popupCaption.textContent = photo.dataset.caption;
    popup.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// Music changer
const music = document.getElementById('music');
const changeBtn = document.getElementById('changeMusic');
const tracks = ['music/chopin.mp3', 'music/diger.mp3'];
let current = 0;

changeBtn.addEventListener('click', () => {
  current = (current + 1) % tracks.length;
  music.src = tracks[current];
  music.play();
});

// Stars animation
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i=0; i<200; i++){
  stars.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2+1,
    twinkle: Math.random()*100
  });
}

function drawStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  stars.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${Math.abs(Math.sin(s.twinkle/20))})`;
    ctx.fill();
    s.twinkle += Math.random()*0.5+0.5;
  });
  requestAnimationFrame(drawStars);
}
drawStars();
