function initMap() {
	var options = {
		zoom: 15,
		center: {lat: 6.754657, lng: 125.355698},
	}

	var map = new google.maps.Map(document.getElementById('map'), options)

	var iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/'
	var icons = {
		parking: {
			icon: iconBase + 'parking_lot_maps.png'
		},
		library: {
			icon: iconBase + 'library_maps.png'
		},
		info: {
			icon: iconBase + 'info-i_maps.png'
		},
	}
	
	// map event

	google.maps.event.addListener(map, 'click', 
		function(event) {
			console.log(event)
			console.log(event.latLng)
			addMarker({coords: event.latLng})
		}
	)
	// array of markers
	var markers = [
		{
			coords:{lat: 6.754657, lng: 125.355698},
			icon: icons.info.icon,
			content: '<h1>nice</h1>'
		},
		{
			coords:{lat: 6.76, lng: 125.355698},
			content: `<img src='${icons.info.icon}'>`
		}
	]

	markers.forEach((marker) => {
		addMarker(marker)
	})

	// add Marker function
	function addMarker(option) {
		var marker = new google.maps.Marker({
			position: option.coords,
			map: map,
			icon: option.icon
		})

		if(option.content) {
			var infoWindow = new google.maps.InfoWindow({
				content: option.content
			})

			marker.addListener('click', function() {
				infoWindow.open(map, marker)
			})
		}
	}
}
