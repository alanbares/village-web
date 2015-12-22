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
		
		// Functions to display offers and data 
		console.log("data", data);
		displayOffers(getRandomOffers(data["offers"], 3));
		displayPeople(data["people"]);
	});
}

//Geo location call
function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        fetchVillageData(position.coords.latitude, position.coords.longitude);
    });
}

// Display Offers 
function displayOffers(offers) {
	var outputArea = $("#offers"),
		currentOffer,
		i, iLen;

	for (i = 0, iLen = offers.length; i < iLen; i++) {
		console.log("offer", offers[i]);
		currentOffer = $("<div>").text(offers[i]["details"]);
		outputArea.append(currentOffer);
	}
}

//Display people
function displayPeople(people) {
	console.log("people", people);
	var outputArea = $("#people"),
		peopleListed,
		i, iLen;
	
	for (i = 0, iLen = people.length; i < iLen; i++) {
		console.log("person" + i, people[i]);
		peopleListed = $("<div>").text(people[i]["firstName"]);
		outputArea.append(peopleListed);
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

