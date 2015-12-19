/*global $ */
//Fetch village data
function fetchVillageData(latitude, longitude) {
	// Village api call
	var authKey = "ya29.OwK_gZu6kwBy5Q_N5GkTZvVC1aNJinY4mNl9i3P2joKaXt5UqdFbXusCu0wW1CExbzlEX1U",
		baseUrl = "https://queatz-snappy.appspot.com/api/here?latitude=",
		url = baseUrl + latitude + "&longitude=" + longitude + "&auth=" + authKey;

	console.log("url", url);

	$.get(url, function (data) {
		$("#offers").html(data);

		console.log("data", data);

	});
}

//Geo location call
function getLocation() {
	navigator.geolocation.getCurrentPosition(processGeolocation);
}

function processGeolocation(position) {
	console.log("position", position);
	var latitude = position.coords.latitude,
		longitude = position.coords.longitude;

	console.log("latitude", latitude);
	console.log("longitude", longitude);

	fetchVillageData(latitude, longitude)
}

getLocation();