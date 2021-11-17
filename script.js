const canvas = document.querySelector('.canvas');
//Defines canvas
const ctx = canvas.getContext('2d');
//ctx stands for 'context'

// const heightRatio = 0.5;
// canvas.height = canvas.width * heightRatio;
//such a cool trick!!! canvas.width was set in css...let's see if it works with the drawings https://newbedev.com/how-to-make-canvas-responsive
// :( Doesn't seemm to work

// canvas.width = 900;
// canvas.height = 500;

window.addEventListener('load', () => {
  canvas.width = window.innerWidth/1.4;
  canvas.height = window.innerHeight/1.5;
  })

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth/1.4;
  canvas.height = window.innerHeight/1.5;
})



canvas.style.margin = '0 auto';

let userColor = document.querySelector('#color-picker');
let userBrushSize = document.querySelector('#brush-size');

let isPainting = false;

function startStroke(e) {
  isPainting = true;
  draw(e);
}

function finishStroke() {
  isPainting = false;
  ctx.beginPath();
}

function resetStroke() {
  isPainting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!isPainting) return;
  ctx.lineWidth = userBrushSize.value;
  ctx.strokeStyle = userColor.value;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.globalCompositeOperation = 'hue';

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);

}

canvas.addEventListener('mousedown', startStroke);

canvas.addEventListener('mouseup', finishStroke);

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseout', resetStroke);