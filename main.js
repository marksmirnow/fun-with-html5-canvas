const drawField = document.querySelector('.draw');
drawField.width = window.innerWidth;
drawField.height = window.innerHeight;

const ctx = (drawField.getContext) ? drawField.getContext('2d') : 'Explorer sucks';
console.log(ctx);

let isDrawing = false;

const draw = (e) => {

	if (!isDrawing) return;
	[drawX, drawY] = [e.offsetX, e.offsetY];
	console.log(drawX, drawY);
};

drawField.addEventListener('mousemove', draw);
drawField.addEventListener('mousedown', () => isDrawing = true);
drawField.addEventListener('mouseup', () => isDrawing = false);
drawField.addEventListener('mouseout', () => isDrawing = false);