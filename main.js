const drawField = document.querySelector('.draw');
drawField.width = window.innerWidth;
drawField.height = window.innerHeight;

const ctx = (drawField.getContext) ? drawField.getContext('2d') : 'Explorer sucks';
ctx.lineWidth = 50;
ctx.lineCap = 'round';
ctx.strokeStyle = 'hsl(100, 100%, 50%)';

let isDrawing = false;

// * Start line coordinates
let lastX = 0;
let lastY = 0;

let direction = true;

let hue = 0;

const draw = (e) => {

	if (!isDrawing) return;
	let [drawX, drawY] = [e.offsetX, e.offsetY];

	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(drawX, drawY);
	ctx.stroke();

	// * Update begin coords
	lastX = e.offsetX;
	lastY = e.offsetY;

	if (direction) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}

	if (ctx.lineWidth >= 100) {
		direction = false;
	}
	if (ctx.lineWidth <= 1) {
		direction = true;
	}

	hue++;
	if (hue > 360) {
		hue = 0;
	}
};

drawField.addEventListener('mousemove', draw);
drawField.addEventListener('mousedown', (e) => {
	isDrawing = true;
	// * Update begin coords when not drawing
	[lastX, lastY] = [e.offsetX, e.offsetY];
});
drawField.addEventListener('mouseup', () => isDrawing = false);
drawField.addEventListener('mouseout', () => isDrawing = false);