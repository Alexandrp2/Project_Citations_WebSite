const _URL = 'http://localhost:5000/';

let login = "";
let $tableCitations = $('#tableCitations');

$(document).ready(function(){

    $("#formAddFavori").hide();
    $("#validateFavori").hide();

    $("#formDeleteFavori").hide();
    $('#deleteFavori').hide();

    $("#formDeleteCitation").hide();
    $('#deleteCitation').hide();

    $tableCitations.hide();
    
    $("#validateLogin").click(function(){

        login = $('#login').val();
        if (login.length > 0){
            $("#loginNonActive").hide("slow", function(){
                alert("Vous pouvez maintenant naviguer dans votre espace");
            });
            $("#loginActive").html("Bienvenue dans votre espace " + login);
        }

    });

    $("#ongletCitations").click(function(){

        $("#ongletFavoris").prop("class", "nav-link");
        $("#ongletCitations").prop("class", "nav-link active");
        $("#ongletEtc").prop("class", "nav-link");

        $("td").remove();

        if (login.length > 0){
            $("#formAddFavori").show();
            $("#validateFavori").show();

            $("#formDeleteFavori").hide();
            $('#deleteFavori').hide()

            $("#formDeleteCitation").hide();
            $('#deleteCitation').hide();

            $tableCitations.show();

            // Send request
            // GET ALL CITATIONS
            $.ajax({
                type: 'GET',
                url: _URL + 'citations',
                dataType: 'json',
                cache: false,
                success: function(citations) {
                    $.each(citations, function(index, citation) {
                        let auteur;
                        let annee;
                        let id = citation._id.$oid;
                        let citatio = citation.citation;

                        citation.author === null ? auteur='Inconnu' : auteur = citation.author;
                        citation.year === null ? annee="N/A" : annee = citation.year;

                        $tableCitations.append('<tr><td>' + id + '</td><td>'+ citatio + '</td><td>'+ auteur +  '</td><td>'+ annee + '</td></tr>');
                    });
                }
            });


        } else {
            $("#formAddFavori").hide();
            $("#validateFavori").hide();
            
            $("#formDeleteFavori").hide();
            $('#deleteFavori').hide();

            $("td").remove();

            $tableCitations.hide();
        }

    });

    $("#ongletFavoris").click(function(){

        $("#ongletFavoris").prop("class", "nav-link active");
        $("#ongletCitations").prop("class", "nav-link");
        $("#ongletEtc").prop("class", "nav-link");

        $("td").remove();

        if( login.length === 0) {
            $("#formDeleteFavori").hide();
            $('#deleteFavori').hide();

            $("#formDeleteCitation").hide();
            $('#deleteCitation').hide();

            $("#formAddFavori").hide();
            $("#validateFavori").hide();

            $tableCitations.hide();

        } else {
            $("#formDeleteFavori").show();
            $('#deleteFavori').show();

            $("#formDeleteCitation").show();
            $('#deleteCitation').show();

            $("#formAddFavori").hide();
            $("#validateFavori").hide();

            $tableCitations.show();

            // Send request
            // GET ALL LOGIN FAVORITES
            const jsonData = {"Poster": login};
            $.ajax({
                type: 'POST',
                url: _URL + 'citation/favoris/mesCitations',
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(jsonData),
                success: function(citations) {
                    $.each(citations, function(index, citation) {
                        let auteur;
                        let annee;
                        let id = citation._id.$oid;
                        let citatio = citation.citation;

                        citation.author === null ? auteur='Inconnu' : auteur = citation.author;
                        citation.year === null ? annee="N/A" : annee = citation.year;

                        $tableCitations.append('<tr><td>'+ id + '</td><td>' + citatio + '</td><td>'+ auteur +  '</td><td>'+ annee + '</td></tr>');
                    });
                }
            });
        }
    });

    $("#ongletEtc").click(function(){
        $tableCitations.hide();
        
        $("#formAddFavori").hide();
        $("#validateFavori").hide();

        $("#formDeleteFavori").hide();
        $('#deleteFavori').hide()

        $("#formDeleteCitation").hide();
        $('#deleteCitation').hide();

        $("#ongletFavoris").prop("class", "nav-link");
        $("#ongletCitations").prop("class", "nav-link");
        $("#ongletEtc").prop("class", "nav-link active");
    });

    $("#validateFavori").click(function(){
        if (login.length > 0){
            let citationId = $('#inputAddFavori').val();

            if(citationId === null || citationId.length === 0){
                $("#toastMissiingId").toast('show');
            } else {
                // Send request
                // ADD A FAVORITE
                const jsonData = {"citationId": citationId, "Poster": login};
                $.ajax({
                    type: 'POST',
                    url: _URL + 'citation/favoris/add',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(jsonData),
                    success: function() {
                        $("#toastAjout").toast('show');
                    }
                });
            }

        } else {
            alert("Identifiez-vous avant d'ajouter des favoris");
        }
    });

    $("#deleteFavori").click(function(){
        if (login.length > 0){
            let citationId = $('#inputDeleteFavori').val();

            if(citationId === null || citationId.length === 0){
                $("#toastMissiingId").toast('show');
            } else {
                // Send request
                // DELETE A FAVORITE
                const jsonData = {"citationId": citationId, "Poster": login};
                $.ajax({
                    type: 'POST',
                    url: _URL + 'citation/favoris/del',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(jsonData),
                    success: function() {
                        $("#toastDeleteFavori").toast('show');
                    }
                });
            }

        } else {
            alert("Identifiez-vous avant de supprimer des favoris");
        }
    });

    $("#deleteCitation").click(function(){
        if (login.length > 0){
            let citationId = $('#inputDeleteCitation').val();

            if(citationId === null || citationId.length === 0){
                $("#toastMissiingId").toast('show');
            } else {
                // Send request
                // DELETE A CITATION
                const jsonData = {"citationId": citationId, "Poster": login};
                $.ajax({
                    type: 'DELETE',
                    url: _URL + 'citation/delete/macitation',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(jsonData),
                    success: function() {
                        $("#toastDeleteCitation").toast('show');
                    }
                });
            }

        } else {
            alert("Identifiez-vous avant de supprimer des citations");
        }
    });




});
