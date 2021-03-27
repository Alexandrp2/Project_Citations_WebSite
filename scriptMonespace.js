let login = "";

$(document).ready(function(){

    $("#formAddFavori").hide();
    $("#validateFavori").hide();

    $("#formDeleteFavori").hide();
    $('#deleteFavori').hide()

    $("#tableTrainsFavoris").hide();
    
    $("#validateLogin").click(function(){

        login = $('#login').val();
        if (login.length > 0){
            $("#loginNonActive").hide("slow", function(){
                alert("Vous pouvez maintenant naviguer dans votre espace");
            });
            $("#loginActive").html("Bienvenue dans votre espace " + login);
        }

        /*var nbe = 1000
        let login = $('#login').val();
        var jsonData = {"numberPlacesTot":nbe,"numberPlacesAvailable":2000,"villeDepart":login,"villeArrivee":"Lille","heureDepart":1140};
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/train',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(jsonData),
            success: function(response) {
                console.log(response.status);
            }
        });*/
    });

    $("#ongletCitations").click(function(){

        $("#ongletFavoris").prop("class", "nav-link");
        $("#ongletCitations").prop("class", "nav-link active");
        $("#ongletEtc").prop("class", "nav-link");

        if (login.length > 0){
            $("#formAddFavori").show();
            $("#validateFavori").show();

            $("#formDeleteFavori").hide();
            $('#deleteFavori').hide()

            $("#tableTrainsFavoris").show();
        } else {
            $("#formAddFavori").hide();
            $("#validateFavori").hide();
            
            $("#formDeleteFavori").hide();
            $('#deleteFavori').hide()
            
            $("#tableTrainsFavoris").hide();
        }

        var $tableTrainsFavoris = $('#tableTrainsFavoris');

        // GET ALL TRAINS
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/trains',
            success: function(trains) {
                $.each(trains, function(index, train) {
                    $tableTrainsFavoris.append(
                        '<tr><td>'+ train.id +
                        '</td><td>'+ train.villeDepart +
                        '</td><td>'+ train.villeArrivee +
                        '</td></tr>');
                });
            }
        });

    });

    $("#ongletFavoris").click(function(){
        $("#tableTrainsFavoris").hide();
        $("#formAddFavori").hide();
        $("#validateFavori").hide();

        if( login.length == 0) {
            $("#formDeleteFavori").hide();
            $('#deleteFavori').hide()
        } else {
            $("#formDeleteFavori").show();
            $('#deleteFavori').show()
        }
        

        $("#ongletFavoris").prop("class", "nav-link active");
        $("#ongletCitations").prop("class", "nav-link");
        $("#ongletEtc").prop("class", "nav-link");

    });


    $("#ongletEtc").click(function(){
        $("#tableTrainsFavoris").hide();
        
        $("#formAddFavori").hide();
        $("#validateFavori").hide();

        $("#formDeleteFavori").hide();
        $('#deleteFavori').hide()

        $("#ongletFavoris").prop("class", "nav-link");
        $("#ongletCitations").prop("class", "nav-link");
        $("#ongletEtc").prop("class", "nav-link active");
    });


    $("#validateFavori").click(function(){
        if (login.length > 0){
            $("#toast").toast('show');
        } else {
            alert("Identifiez-vous avant d'ajouter des favoris");
        }
    });




});
