function volume_sphere() {
	let r = document.getElementById('radius').value;
	const pi = Math.PI;
	let val = ((4/3) * pi) * (r * r * r);
	document.getElementById('volume').value = val;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
