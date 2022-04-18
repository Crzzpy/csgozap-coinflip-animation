setTimeout(spinDaCoin,2000);

function spinDaCoin() {
	var intervalz = setInterval(function() {
		
		var elemento = $(".flip-animation");
		var old_x = parseInt(elemento.css("background-position").split(" ")[0].split("px")[0]);
		var old_y = parseInt(elemento.css("background-position").split(" ")[1].split("px")[0]);
		var new_x = old_x;
		var new_y = old_y;

		if(old_x == -600 && old_y == -1200) {
			clearInterval(intervalz);
		} else {

			if(old_x == -3600 && old_y !== -1200) {
				new_x = 0;
				new_y = old_y - 200;
			} else if (old_x !== -3600) {
				new_x = new_x - 200;
			}

			elemento.css("background-position",new_x+"px "+new_y+"px");
		}
	},55)
}
