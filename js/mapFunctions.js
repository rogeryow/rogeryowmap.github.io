// find your location
infoWindow = new google.maps.InfoWindow
if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(pos) {
		console.log(pos)
		var position = {
			lat: pos.coords.latitude,
			lng: pos.coords.longitude,
		}
		console.log(position)
		infoWindow.setPosition(position)
		infoWindow.setContent('Your location!')
		infoWindow.open(map)
	}, function() {
		handleLocationError('Geolocation Service Failed', map.center())
	})
} else {
	handleLocationError('No geolocation available', map.center())
}


function handleLocationError(content, position) {
	infoWindow.setPosition(position)
	infoWindow.setContent(content)
	infoWindow.open(map)
}
// find your location