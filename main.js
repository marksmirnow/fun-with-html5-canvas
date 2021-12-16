const draw = document.querySelector('.draw');
draw.width = window.innerWidth;
draw.height = window.innerHeight;

const ctx = (draw.getContext) ? draw.getContext('2d') : 'Explorer sucks';
console.log(ctx);