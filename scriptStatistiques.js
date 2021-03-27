$(document).ready(function(){

    var $tableTrainsFavoris = $('#tableTrainsFavoris');
    var $listTrainsFavoris = $('#listTrainsFavoris');

    // GET ALL TRAINS
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/trains',
        success: function(trains) {
            $.each(trains, function(index, train) {
                $tableTrainsFavoris.append(
                    '<tr><td>'+ train.id +
                    '</td><td>'+ train.villeDepart +
                    '</td><td class="d-flex justify-content-between align-items-center">'+ train.villeArrivee +
                    '<span class="badge bg-primary rounded-pill">14</span></td></tr>');
                
            });
            $.each(trains, function(index, train) {
                $listTrainsFavoris.append(
                    '<li class="list-group-item d-flex justify-content-between align-items-center">'
                    + train.villeDepart 
                    + '<span class="badge bg-primary rounded-pill">14</span></li>'
                );
                
            });
        }
    });

    // TEST POST FONCTION

    $("#testSendRequest").click(function(){
    var nbe = 1000
        let login = "MonTest";
        var jsonData = {"numberPlacesTot":nbe,"numberPlacesAvailable":2000,"villeDepart":login,"villeArrivee":"Lille","heureDepart":1140};
        $.ajax({
            type: 'POST',
            crossDomain: true,
            url: 'http://localhost:8080/train',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(jsonData),
            success: function(response) {
                console.log(response.status);
            }
        });
    });
});

/*function postData() {
    var jsonData = {"numberPlacesTot":1000,"numberPlacesAvailable":1000,"villeDepart":"monTestJS","villeArrivee":"Lille","heureDepart":1140};
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }*/
  