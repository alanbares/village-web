/*global $ */

//Village api call
function fetchVillageData(latitude, longitude) {
    console.log("latitude", latitude);
	console.log("longitude", longitude);

	var testLat = 37.7800958,
		testLong = -122.4605237;
	
	var authKey = "ya29.OwK_gZu6kwBy5Q_N5GkTZvVC1aNJinY4mNl9i3P2joKaXt5UqdFbXusCu0wW1CExbzlEX1U",
		baseUrl = "https://queatz-snappy.appspot.com/api/here?latitude=",
		//url = baseUrl + latitude + "&longitude=" + longitude + "&auth=" + authKey;
		url = baseUrl + testLat + "&longitude=" + testLong + "&auth=" + authKey;

	console.log("url", url);

    //Displays data on html
	$.get(url, function (data) {
		console.log("data", data);
       	var offers = getRandomOffers(data["offers"], 3);
		renderTemplate('#offerTemplate', '#offerArea', offers);
	});
}

//Geo location call
function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        fetchVillageData(position.coords.latitude, position.coords.longitude);
    });
}


// Get 3 random offers
function getRandomOffers(offers, num) {
    var randomOffers = _.shuffle(offers);

    return randomOffers.slice(0, num);
}

$(document).ready(function () {
    getLocation();
});

// Handlebars
var renderTemplate = function (templateId, targetId, context) {
    var source = $(templateId).html();
    var template = Handlebars.compile(source);
    var html = template(context);
    $(targetId).append(html);
}
