/*global $ */

// Village api call
$.get("https://queatz-snappy.appspot.com/api/here?latitude=37.7800958&longitude=-122.4605237&auth=ya29.OwK_gZu6kwBy5Q_N5GkTZvVC1aNJinY4mNl9i3P2joKaXt5UqdFbXusCu0wW1CExbzlEX1U", function (data) {
    $("#offers").html(data); 
    console.log(data);
    var _data = data;
});

//Geo location call
function getLocation() {
	navigator.geolocation.getCurrentPosition(doSomething);
}
function doSomething(position) {
	console.log(position.coords.latitude, position.coords.longitude);
}
getLocation();