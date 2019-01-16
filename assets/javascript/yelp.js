var queryURL;

// https://api.yelp.com/v3/businesses/search

$("#submit").on("click", function (event) {
    event.preventDefault();
    var businessLocation = $("#businessLocation").val();

    queryURL = "https://api.yelp.com/v3/businesses/search?location=" + businessLocation;


    var corsURL = "https://alex-rosencors.herokuapp.com/?url=" + queryURL;
    $.ajax({
        url: corsURL,
        method: "GET",
        headers: {
            'Authorization': "Bearer oxSj2hzOq1aeIwniYsF80XulGeB-2m7fETIzrhAWPkJK_Lg2cdr9ogogOMpgB_8oz47rpkIzUcEsESpCG5rW1vSJ9XXF7yAjsio815HpFONChYTHoY689AxOQ-w7XHYx"
        }
    }).then(function (response) {
        console.log(response);

        var tableData = $("<table class=table>").html(
            `<thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Website</th>
                    </tr>
                </thead>`);
              

        for (var i = 0; i < 10; i++) {
            var dataBody = $("<tbody>").html(
                `<tr>
                   <th scope="row">${[i + 1 ]}</th>
                   <td>${response.businesses[i].name}</td>
                   <td>${response.businesses[i].location.address1}</td>
                   <td>${response.businesses[i].rating}</td>
                   <td> <a href="${response.businesses[i].url}"> LINK </a></td>
                 </tr>`);

            $(tableData).append(dataBody);
            $("#searchResult").append(tableData);
        };
    });
});