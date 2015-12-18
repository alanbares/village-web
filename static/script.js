// Village api call
$.get("http://queatz-snappy.appspot.com//api/here?latitude=float&longitude=float", function(data) {
    $(".result").html(data);
});