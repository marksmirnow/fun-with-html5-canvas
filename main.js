const drawField = document.querySelector('.draw');
drawField.width = window.innerWidth;
drawField.height = window.innerHeight;

const ctx = (drawField.getContext) ? drawField.getContext('2d') : 'Explorer sucks';
console.log(ctx);