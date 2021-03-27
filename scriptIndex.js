// METHODE POSTMAN

/*
var settings = {
  "url": "http://localhost:8080/products",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
*/

// METHODE FETCH
/*
let dataObject;

fetch('http://localhost:8080/products')
.then(data => data.json())
.then(data => {
    var x = "";
    dataObject = data;
    // console.log(data);
    for (i in data) {
        console.log(dataObject[i].type);
        x += data[i].type;
    }
    document.getElementById("demo").innerHTML = "couccou";
    //console.log(data[0].type);
    
}).catch(error => {
    dataObject = {};
    console.log(error);
})
*/
// METHODE AJAX

$(function (){
  
  var $trains = $('#trains');
  var $tableTrains = $('#tableTrains');

  // GET ALL TRAINS
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/trains',
    /*url:  'http://localhost:8080/products',
    dataType: 'json',
    type: 'get',
    cache: false,*/
    success: function(trains) {
      $.each(trains, function(index, train) {
          $trains.append('<li>Train [départ] '+ train.villeDepart + ' [arrivée] '+ train.villeArrivee + '</li>');
          $tableTrains.append('<tr><td>'+ train.id + '</td><td>'+ train.villeDepart +  '</td><td>'+ train.villeArrivee + '</td></tr>');
      });
    }
  });
})


/*
$("validateLogin").click(function(){
  //$('#loginActive')
  var loginActive = $('#loginActive').val();
  document.getElementById(loginActive).innerHTML = loginActive;
  console.log(loginActive);
}); 
*/

$(document).ready(function(){

  $("#buttonSearch").click(function(){
    let authorToSearch = $('#auteur').val();
    let stringToSearch = $('#chaineARechercher').val();

    // Autor  AND NO string
    if( (authorToSearch.length > 0) && (stringToSearch.length == 0 || stringToSearch == null))
    {
      alert(authorToSearch)
      /*const jsonData = {"numberPlacesTot":nbe,"numberPlacesAvailable":2000,"villeDepart":login,"villeArrivee":"Lille","heureDepart":1140};
      $.ajax({
        type: 'POST',
        url: urlWherePostingAccordingParameters,
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(jsonData),
        success: function(response) {
          console.log(response.status);
        }
      });*/
    }
    // Autor  AND string
    else if ( (authorToSearch.length > 0) && (stringToSearch.length > 0) )
    {
      alert(stringToSearch)
      /*const jsonData = {"numberPlacesTot":nbe,"numberPlacesAvailable":2000,"villeDepart":login,"villeArrivee":"Lille","heureDepart":1140};
      $.ajax({
        type: 'POST',
        url: urlWherePostingAccordingParameters,
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(jsonData),
        success: function(response) {
          console.log(response.status);
        }
      });*/
    }
    else{
      alert("Renseignez au moins l'auteur");
    }

    //alert("Login: " + $("#login").text());
    //document.getElementById(loginActive).innerHTML = $("#login").text();
    //console.log($("#validateLogin").text());
  });

});


