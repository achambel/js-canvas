// canvas element
var stage = document.querySelector('#stage');
// set from image length 842x572
stage.width = 842;
stage.height = 572;

// set from JSON value in input hidden
var states = document.querySelector('#states');

var image = new Image();

if(stage.getContext){
	image.onload = function() {
		
		var ctx = stage.getContext('2d');
		
		JSON.parse(states.value).forEach(function(st){
			ctx.fillStyle = st.color;
			ctx.fillRect(st.x, st.y, st.width, st.height);
		});
  	// to draw over image, it's necessary transparency on original image
  	ctx.drawImage(image,0,0);
	}
	
	image.src = 'img/canvas.png';
}