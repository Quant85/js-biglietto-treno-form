



var btnGenera = document.getElementById("bt_genera");
var btnAnnulla = document.getElementById("bt_annulla");

var costOfKilometer = 0.21;
var yourDiscount;
var ticketCost;

var trainCarriage;
var cpCode;

var fullNameInput = document.getElementById("full_name");
var kmSelectedInput = document.getElementById("percorrenza_km");
var ageGroupInput = document.getElementById("range_age");

btnGenera.addEventListener("click", function () {
    //Genera

    

    //Selesiona i valori

    var fullName = fullNameInput.value;
    var kmSelected = kmSelectedInput.value;
    var ageGroup = ageGroupInput.value;

    //console.log(fullName, kmSelected, ageGroup);

    if (ageGroup == "minorenne") {
    
        yourDiscount = 0.2;
        //console.log(yourDiscount);
    
    } else if (ageGroup == "over65") {
    
        yourDiscount = 0.4;
        //console.log(yourDiscount);
    
    } else {
    
        yourDiscount = 0;
        //console.log(yourDiscount);
    }

    trainCarriage = Math.round(Math.random() * 9) + 1; //mi permette di generare in modo random numeri interi da 0 a 10
    cpCode = Math.round(Math.random() * (99999 - 90000) + 90000); //mi permette di generare in modo random numeri interi in un range definito ( (x * (max - min) + min))

    ticketCost =  costOfKilometer * kmSelected * ( 1 - yourDiscount);

    document.getElementById("passenger_name").innerHTML = fullName;
    document.getElementById("discount_offer").innerHTML =  "Sconto " + ageGroup;
    document.getElementById("train_carriage").innerHTML =  trainCarriage;
    document.getElementById("cp_code").innerHTML =  cpCode;
    document.getElementById("ticket_cost").innerHTML = ticketCost.toFixed(2) + " \u20AC";
    
    //modifico lo stile all'attivarsi della funzione
    document.getElementById("ticket").style.opacity = "1";
});

btnAnnulla.addEventListener("click", function() {
    document.getElementById("ticket").style.opacity = "0";
    document.getElementById('full_name').value = '';
    document.getElementById('percorrenza_km').value = '';
    document.getElementById('range_age').value = '';
});