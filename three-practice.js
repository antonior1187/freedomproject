<DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>My first three.js app</title>
		<style>
			body {
			margin: 0; 
			}
		</style>
	</head>
	<body>
		<script src="~/js/freedomproject/three.js"></script>
		<script>
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

		const renderer = new THREE.WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );		
    </script>
    <h1> Hello World </h1
	</body>
</html>
