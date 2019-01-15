// var eventData;

// $("#submit").on("click", function (event){
//     event.preventDefault();
//     var location = $("#eventData.events.length").val();

//     queryURL = " https://www.eventbriteapi.com/v3/users/me/?token=BAMDIYWNYH4MSFMA3WYFsearch?location=" + eventData.events
// }

// https://www.eventbriteapi.com/v3/events/search?location.longitude=-123.11236500000001&location.latitude=49.279974&expand=venue 


var eventData;
$(document).ready(function () {

  //var queryURL = "https://api.yelp.com/v3/businesses/search?location=new+brunswick+nj";

  // `https://alex-rosencors.herokuapp.com/?url=<paste url here>`


 // add search button click function name
 
  //$(".searchButton").on("click", function (e) {
   //preventDefault();

   //var value = document.getElementById("searchBtton");
     


    //prevent the normal submission of the form

    
    
    $("#searchButton").on("click", function () {
    
    // 1) add search input box to the html form
    
    // 2) in this function (right below this line), capture what was typed into the searchbox
    var searchTerm = $("#searchSite").val().trim();
    
    // 3) place searchTerm into queryURL below (see where we're adding it in below)
    
    
    
    
    var queryURL = 'https://www.eventbriteapi.com/v3/events/search?location.address='+ searchTerm +'&expand=venue&token=BAMDIYWNYH4MSFMA3WYF&expand=venue';
    
    var corsURL = "https://alex-rosencors.herokuapp.com/?url=" + queryURL;
    $.ajax({
      url: corsURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      
      
      // $.ajax({
        //   url: apiURL,
        //   type: 'GET',
        //   dataType: "json"
        // }).then(function (response) {
          
        eventData = response;
        
        console.log("Data: ", eventData);
        
        for (var i = 0; i < eventData.events.length; i++) {
          var currentEvent = eventData.events[i];
          var start = currentEvent.start.local;
          var momentObject = new moment(start, "YYYY-MM-DDTHH:mm:ss");
        console.log(momentObject.get('date'));
        var newEvent = "<tr>"
        newEvent += "<td>" + currentEvent.name.text + "</td>";
        newEvent += "<td>" + currentEvent.venue.address.address_1 + "</td>";
        newEvent += "<td>" + currentEvent.venue.address.city + "</td>";
        newEvent += "<td>" + currentEvent.start.local + "</td>";
        newEvent += "</tr>";
        $('.table').append(newEvent);
      };
    });
    
  })
  
});
  


