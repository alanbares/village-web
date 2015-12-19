/*global $ */

//Fetch village data
function fetchVillageData(lat, long) {
	// Village api call
	var authKey = "ya29.OwK_gZu6kwBy5Q_N5GkTZvVC1aNJinY4mNl9i3P2joKaXt5UqdFbXusCu0wW1CExbzlEX1U",
		baseUrl = "https://queatz-snappy.appspot.com/api/here?latitude=",
		url = baseUrl + lat + "&longitude=" + long + "&auth=" + authKey;
	$.get(url, function (data) {
		$("#offers").html(data); 
		console.log(data);
		var _data = data;
	});

}


//Geo location call
function getLocation() {
	navigator.geolocation.getCurrentPosition(doSomething);
}
function doSomething(position) {
	var lat = position.coords.lat,
		long = position.coords.long;
	console.log(lat, long);
	fetchVillageData(lat, long)
}
getLocation();