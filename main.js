const drawField = document.querySelector('.draw');
const ctx = (drawField.getContext) ? drawField.getContext('2d') : 'Explorer sucks';

drawField.width = window.innerWidth;
drawField.height = window.innerHeight;

ctx.lineWidth = 50;
ctx.lineCap = 'round';
ctx.strokeStyle = 'hsl(100, 100%, 50%)';

let isDrawing = false;
// * Start line coordinates
let startDrawX = 0;
let startDrawY = 0;

let direction = true;
let hue = 0;


const draw = (e) => {

	if (!isDrawing) return;

	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

	ctx.beginPath();
	ctx.moveTo(startDrawX, startDrawY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();

	// * Update begin coords
	[startDrawX, startDrawY] = [e.offsetX, e.offsetY];

	direction ? ctx.lineWidth++ : ctx.lineWidth--;

	if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
		direction = !direction;
	}

	hue++;
	hue = (hue > 360) ? 0 : hue;
};

drawField.addEventListener('mousedown', (e) => {
	isDrawing = true;
	// * Update begin coords when not drawing
	[startDrawX, startDrawY] = [e.offsetX, e.offsetY];
});

drawField.addEventListener('mousemove', draw);
drawField.addEventListener('mouseup', () => isDrawing = false);
drawField.addEventListener('mouseout', () => isDrawing = false);