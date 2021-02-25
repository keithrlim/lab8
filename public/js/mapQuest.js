function initMap() {
	// add your code here
	L.mapquest.key = 'E8qXCXn9hebau8ZMaR1F1JAj7vc7aAEj';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  	center: [32.88, -117.236],
  	layers: L.mapquest.tileLayer('map'),
  	zoom: 12
	});

	// Add a marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}