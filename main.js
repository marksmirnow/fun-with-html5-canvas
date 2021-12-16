const drawField = document.querySelector('.draw');
drawField.width = window.innerWidth;
drawField.height = window.innerHeight;

const ctx = (drawField.getContext) ? drawField.getContext('2d') : 'Explorer sucks';
console.log(ctx);

let isDrawing = false;

// * Start line coordinates
let lastX = 0;
let lastY = 0;

const draw = (e) => {

	if (!isDrawing) return;
	let [drawX, drawY] = [e.offsetX, e.offsetY];
	console.log(drawX, drawY);

	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(drawX, drawY);
	ctx.stroke();

	// * Update begin coords
	lastX = e.offsetX;
	lastY = e.offsetY;
	console.log(`lastX: ${lastX}, lastY: ${lastY}`);
};

drawField.addEventListener('mousemove', draw);
drawField.addEventListener('mousedown', (e) => {
	isDrawing = true;
	// * Update begin coords when not drawing
	[lastX, lastY] = [e.offsetX, e.offsetY];
});
drawField.addEventListener('mouseup', () => isDrawing = false);
drawField.addEventListener('mouseout', () => isDrawing = false);