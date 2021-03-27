$(document).ready(function(){
    $("#validateLogine").click(function(){
        $("#p3").hide("slow", function(){
            alert("The paragraph is now hidden");
        });
        $("#p2").html("Hello <b>world!</b>");
        $("#p1").html("Mon paragraphe modifié");
        $("#loginNonActive").html("Hello <b>world!</b>");
        $("#loginActive").html("Mon paragraphe modifié");

    });
});
