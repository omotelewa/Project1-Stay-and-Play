var data;

$("#run-search").on("click", function (event) {

  event.preventDefault();

  // Set the API key
  var queryParams = "&appkey=999fc2fcae561852705fca522512fa2f";

  // Grab text the user typed into the search input, add to the queryParams object
  var keyword = $("#search-keyword").val().trim();

  var APP_KEY = `999fc2fcae561852705fca522512fa2f`;
  var APP_ID = `31e9f72f`;


  var queryURL = "https://api.edamam.com/search/events.json" + "keyword&" + APP_ID + "=" + APP_KEY + queryParams;
})

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response);
    var data = response._embedded.events;

    for (i = 0; i < 5; i++) {

  var imgURL = data[i].images[4].url;
  console.log(imgURL);

  var image = $("<img class='img-fluid'>").attr("src", imgURL);

  dataDiv.append(image);

  $("#image").prepend(dataDiv);


  }
  })
