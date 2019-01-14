$("#run-search").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks). Prevents the page from reloading on form submit.
  event.preventDefault();

  // Empty the region associated with the articles
  clear();

  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?&"+queryParams;
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?"+"keyword="+ keyword +"&countyCode="+ location+queryParams;

  // Begin building an object to contain our API call's query parameters
  // Set the API key
  var queryParams = "apikey=RAgvUGZ0z6k7b7KSCvNST1WATfPj064c" ;

  // Grab text the user typed into the search input, add to the queryParams object
  var location = $("#search-location")
    .val()
    .trim();
  
    // Grab text the user typed into the search input, add to the queryParams object
  var keyword = $("#search-keyword")
    .val()
    .trim();

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      // Create a new table row element
      var tRow = $("<tr>");

      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var titleTd = $("<td>").text(response.Title);
      var yearTd = $("<td>").text(response.Year);
      var actorsTd = $("<td>").text(response.Actors);
        
      // Append the newly created table data to the table row
      tRow.append(titleTd, yearTd, actorsTd);
      // Append the table row to the table body
      $("tbody").append(tRow);
    });



