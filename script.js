document.addEventListener('mousemove', function (e) {//Crosshair
			e.preventDefault();
			e.stopPropagation();
			document.getElementById("Y").style.top = event.clientY + "px";
			document.getElementById("X").style.left = event.clientX + "px";
		});