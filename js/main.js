let map 
let MAPKEY = 'AIzaSyCc7aSooOqywLNVECZRuY0AS0b239f1qj8'
document.addEventListener('DOMContentLoaded', function() {
	let script = document.createElement('script')
	document.head.appendChild(script)

	script.addEventListener('load', function() {
		console.log('script has been loaded')
		map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: 6.754657,
				lng: 125.355698,
			},
			// 1 - 17 1 - planet, 17 - planet, 10 - city, 5 - continent
			zoom: 16,
			// hybridm satellite
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		})
	})
	script.src = `https://maps.googleapis.com/maps/api/js?keys=${MAPKEY}}&callback=initMap`
})