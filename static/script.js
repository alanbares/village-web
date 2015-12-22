/*global $ */

//Fetch village data
function fetchVillageData(latitude, longitude) {
    console.log("latitude", latitude);
	console.log("longitude", longitude);
	// Village api call
	var testLat = 37.7800958,
		testLong = -122.4605237;
	
	var authKey = "ya29.OwK_gZu6kwBy5Q_N5GkTZvVC1aNJinY4mNl9i3P2joKaXt5UqdFbXusCu0wW1CExbzlEX1U",
		baseUrl = "https://queatz-snappy.appspot.com/api/here?latitude=",
		//url = baseUrl + latitude + "&longitude=" + longitude + "&auth=" + authKey;
		url = baseUrl + testLat + "&longitude=" + testLong + "&auth=" + authKey;

	console.log("url", url);

	$.get(url, function (data) {
		//$("#offers").html(data);
		
		// Displays data on HTML
		console.log("data", data);
		displayOffersAndPeople(data["people"], getRandomOffers(data["offers"], 3));
	});
}

//Geo location call
function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        fetchVillageData(position.coords.latitude, position.coords.longitude);
    });
}


//Display offers and people
function displayOffersAndPeople(people, offers) {
    console.log(offers);
	console.log("people", people);
	var outputArea = $("#offers"),
        firstName, lastName, currentOffer,
		i, iLen;
	
	for (i = 0, iLen = offers.length; i < iLen; i++) {
		//console.log("person" + i, people[i]);
        console.log(people[i]["firstName"]);
        firstName  = people[i]["firstName"];
        lastName = people[i]["lastName"];
        currentOffer = offers[i]["details"];
		outputArea.append("<p>" + firstName + ' ' + lastName + ' ' + currentOffer+ "</p>");
	}
	
}

// Get 3 random offers
function getRandomOffers(offers, num) {
    var randomOffers = _.shuffle(offers);

    return randomOffers.slice(0, num);
}

$(document).ready(function () {
    getLocation();
});

