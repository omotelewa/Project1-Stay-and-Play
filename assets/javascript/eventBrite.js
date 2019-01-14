var eventData;
$(document).ready(function () {
  var apiURL = 'https://www.eventbriteapi.com/v3/events/?token=BAMDIYWNYH4MSFMA3WYF&expand=venue';

  $.ajax({
    url: apiURL,
    type: 'GET',
    dataType: "json"
  }).then(function (response) {

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
});