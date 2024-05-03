let utBillett;

function regBillett() {
    const enBillett = {
        film: $("#film").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val(),
    };
    let epostGyldig = $("#epost").html = enBillett.epost.split("@");
    let feilmelding = false;

    if ((isNaN(enBillett.antall) || enBillett.antall <= 0) || enBillett.antall === null) {
        $("#feilAntall").text("Du må skrive inn gyldige antall billetter");
        feilmelding = true;
    } else {
        $("#feilAntall").html(null);
    }


    if (enBillett.film === "feilFilm") {
        $("#feilFilm").html("Må velge en film");
        feilmelding = true;
    }
    else
    {$("#feilFilm").html("");
    }

    if(!isNaN(enBillett.fornavn)|| enBillett.fornavn==="" || enBillett.fornavn.length<2){
        $("#feilFornavn").html("Skriv inn et gyldig fornavn");
        feilmelding = true;
    }
    else{
        $("#feilFornavn").html("");
    }

    if(!isNaN(enBillett.etternavn)|| enBillett.etternavn===""||enBillett.etternavn.length<2){
        $("#feilEtternavn").html("Skriv inn et gyldig etternavn");
        feilmelding = true;
    }
    else{
        $("#feilEtternavn").html("");
    }

    if(isNaN(enBillett.telefonnr)||enBillett.telefonnr === ""){
        $("#feilTelefonnr").html("Skriv inn et gyldig telefon-nummer");
        feilmelding=true;
    }
    else{
        $("#feilTelefonnr").html("");
    }

    if(enBillett.epost === ""|| epostGyldig.length!=2){
        $("#feilEpost").html("Skriv inn et gylidg epost");
        feilmelding = true;
    }
    else{
        $("#feilEpost").html("");
    }

    if(feilmelding===false){
        $("#film").val($("#feilFilm").val());
        $("#antall").val( "");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");
    }
    else{
        return;
    }
    if(enBillett.film === "" && enBillett.antall === "" && enBillett.fornavn === "" && enBillett.etternavn === "" && enBillett.telefonnr === "" && enBillett.epost === "" ){
        return;
    }
    else {
        $.post("/lagre", enBillett, function () {
            hentAlle();
        });
    }

}

function skrivUt(alleBillettene) {
    utBillett =
        "<table class ='table table-striped'> <tr> <th>Film</th> <th>Antall</th> <th>Fornavn</th> " +
        "<th>Etternavn</th> <th>Telefon-nummer</th> <th>Epost</th> <th></th></tr>";
    for(let enBillett of alleBillettene){
        utBillett += "<tr>" +
            "<td>" + enBillett.film + "</td> " +
            "<td>" + enBillett.antall + "</td> " +
            "<td>" + enBillett.fornavn + "</td> " +
            "<td>" + enBillett.etternavn + "</td> " +
            "<td>" + enBillett.telefonnr + "</td> " +
            "<td>" + enBillett.epost + "</td>" +
            "<td><button class='btn btn-primary' onclick='endreEnBillett("+enBillett.id+")'>Endre</button></td></tr>";
    }
    utBillett += "<table>";
    $("#billetter").html(utBillett);

}

function endreEnBillett(id){
    const url = "/henteEnBillett?id" + id;
    $.get(url, function(enBillett){
        $("#id").val(enBillett.id);
        $("#film").val(enBillett.film);
        $("#antall").val(enBillett.antall);
        $("#fornan").val(enBillett.fornavn);
        $("#etternavn").val(enBillett.etternavn);
        $("#telefonnr").val(enBillett.telefonnr);
        $("#epost").val(enBillett.epost);
    });

    $.post("/endre", billett, function () {});

    $("#film").val($("#feilFilm").val());
    $("#antall").val( "");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}


function hentAlle(){
    $.post("/hentAlle", function (data){
        skrivUt(data);
    });
}

function slettAlleBilletter(){
    $.get("/slettAlle", function (){
        hentAlle();
    });
}


