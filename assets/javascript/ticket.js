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

    var tableData = $("<table class=table>").html(
      `<thead>
          <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Website</th>
          </tr>
      </thead>`);


    for (var i = 0; i < 10; i++) {
      var dataBody = $("<tbody>").html(
        `<tr>
         <th scope="row">${[i + 1]}</th>
         <td>${data[i].name}</td>
         <td>${data[i].dates.start.localDate}</td>
         <td>${data[i].dates.start.localTime}</td>
         <td> <a href="${data[i].url}"> LINK </a></td>
       </tr>`);

      $(tableData).append(dataBody);
      $("#events-section").append(tableData);
    };
  });
});
    

