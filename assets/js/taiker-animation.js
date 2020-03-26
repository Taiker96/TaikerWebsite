//Dash Animation
var logomotion = anime.timeline();
logomotion.add({
	targets:'.art path',
	strokeDashoffset:[anime.setDashoffset,0],
	easing:'easeOutSine',
	duration:5000,
	loop:true
})
//Image Animation
logomotion.add({
	targets:'img.taiker',
	opacity:[0,1],
	easing:'linear',
	duration:2500
})
logomotion.add({
	targets:'.bottom-dash',
	opacity:[0,1]
})
logomotion.add({
	targets:'.art path',
	opacity:[1,0]
})
logomotion.add({
	targets:'.left-dash',
	opacity:[0,1]
})
logomotion.add({
	targets:'.right-dash',
	opacity:[0,1]
})