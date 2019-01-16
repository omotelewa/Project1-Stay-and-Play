var data;

$("#run-search").on("click", function (event) {

  event.preventDefault();
// merging test

  // Set the API key
  var queryParams = "&apikey=RAgvUGZ0z6k7b7KSCvNST1WATfPj064c";

  // Grab text the user typed into the search input, add to the queryParams object
  var keyword = $("#search-keyword").val().trim();

  //
  var queryURL = "https://alex-rosencors.herokuapp.com/?url=https://app.ticketmaster.com/discovery/v2/events.json?" + "keyword=" + keyword + queryParams;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response);
    var data = response._embedded.events;

    for (i = 0; i < 5; i++) {
      var dataDiv = $("<div class='data'>");
    
    // name display
     var name = data[i].name;
     var pOne = $("<p>").text("Name of Ticket: " + name);
     dataDiv.append(pOne);

     // website
   
    var website = data[i].url;
    var pTwo = $("<p>").text("Website: " + website);
     dataDiv.append(pTwo);

     //date
    console.log(data[i].dates.start);
     var date = data[i].dates.start.localDate;
     var pThree = $("<p>").text("Date: " + date);
     dataDiv.append(pThree); 

     // Retrieving the URL for the image
     var imgURL = data[i].images[4].url;
     console.log(imgURL);

     // Creating an element to hold the image
     var image = $("<img class='img-fluid'>").attr("src", imgURL);

     // Appending the image
     dataDiv.append(image);

     $("#events-section").prepend(dataDiv);

    }


  })


})
// var newEvent = "<tr>"
//         newEvent += "<td>" + currentEvent.name.text + "</td>";
//         newEvent += "<td>" + currentEvent.venue.address.address_1 + "</td>";
//         newEvent += "<td>" + currentEvent.venue.address.city + "</td>";
//         newEvent += "<td>" + currentEvent.start.local + "</td>";
//         newEvent += "</tr>";
//         $('.table').append(newEvent);