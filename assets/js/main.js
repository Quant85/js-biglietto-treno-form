
var btnGenera, btnAnnulla, costOfKilometer, yourDiscount, ticketCost, trainCarriage, cpCode, fullNameInput, kmSelectedInput, ageGroupInput, fullName, kmSelected, ageGroup, tbUserName, tbOffert, tbNumberCarriage, tbCPCode, tbTotalCost;

btnGenera = document.getElementById("bt_genera");
btnAnnulla = document.getElementById("bt_annulla");

costOfKilometer = 0.21;



btnGenera.addEventListener("click", function () {
    //Genera
fullNameInput = document.getElementById("full_name");
kmSelectedInput = document.getElementById("percorrenza_km");
ageGroupInput = document.getElementById("range_age");

    //Selesiona i valori

fullName = fullNameInput.value;
kmSelected = kmSelectedInput.value;
ageGroup = ageGroupInput.value;

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

    ticketCost =  Math.abs(costOfKilometer * kmSelected * ( 1 - yourDiscount));

tbUserName = document.getElementById("passenger_name");
tbOffert = document.getElementById("discount_offer");
tbNumberCarriage = document.getElementById("train_carriage");
tbCPCode = document.getElementById("cp_code");
tbTotalCost = document.getElementById("ticket_cost");

    tbUserName.innerHTML = fullName;
    tbOffert.innerHTML =  "Sconto " + ageGroup;
    tbNumberCarriage.innerHTML =  trainCarriage;
    tbCPCode.innerHTML =  cpCode;
    tbTotalCost.innerHTML = ticketCost.toFixed(2) + " \u20AC";
    
    //modifico lo stile all'attivarsi della funzione

    document.getElementById("ticket").style.opacity = "1";
});

//Permette mediante l'evento click di eseguire una sostituzione dei valori nei tag input del form, in alternativa ad un resetForm o returnStartCicle
btnAnnulla.addEventListener("click", function() {


    document.getElementById("ticket").style.opacity = "0"; // posso agire cambiando la classe
    document.getElementById('full_name').value = '';
    document.getElementById('percorrenza_km').value = '';
    document.getElementById('range_age').value = '';
});