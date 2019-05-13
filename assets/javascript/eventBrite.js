var eventData;
var newEvent;
$(document).ready(function () {


  $("#searchButton").on("click", function (event) {
    event.preventDefault();
    var searchTerm = $("#searchSite").val().trim();

    console.log("searchTerm: ", searchTerm);

    var queryURL = 'https://www.eventbriteapi.com/v3/events/search?location.address=' + searchTerm + '&expand=venue&token=BAMDIYWNYH4MSFMA3WYF&expand=venue';

    var corsURL = "https://alex-rosencors.herokuapp.com/?url=" + queryURL;
    $.ajax({
      url: corsURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);

      eventData = response;

      console.log("Data: ", eventData);

        for (var i = 0; i < 7; i++) {
        newEvent = "<tr>"
        newEvent += "<td>" + response.events[i].name.text + "</td>";
        newEvent += "<td>" + response.events[i].venue.address.address_1 + "</td>";
        newEvent += "<td>" + response.events[i].venue.address.city + "</td>";
        newEvent += "<td>" + response.events[i].start.local + "</td>";
        newEvent += "</tr>";

        $('.table').append(newEvent);
      };
    });

  })

});



