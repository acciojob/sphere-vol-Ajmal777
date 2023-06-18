function volume_sphere() {
	let r = document.getElementById('radius').value;
	const pi = Math.PI;
	let val = (4/3) * pi * (r * r * r);
	let ans = val.toFixed(4);
	document.getElementById('volume').value = ans;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
