// Ta fatt på elementene time, unit og button
var timeTextObject = document.querySelector('.time')
var unitTextObject = document.querySelector('.unit')
var startButton    = document.querySelector('.button')



//Vi skal bruke fire funksjoner: 
//start timeren (klikk på startknapp)
//vis tiden (sett minutter og sekunder inn på siden)
//tell tiden ned (trekk sekunder/minutter fra)
//gørt dette hvert sekund, og husk og sjekke om alarmen skal ringe (tick) 

//opprett en listener på startknap, og kald en funktion, start
//denne funksjon fjerner startknappen og ordet 'min' 
//deretter setter den et interval på et sekund, som hver gang kalder funksjonen tick
//til slutt må den oppdatere tiden på skjermen med å kalde funksjonen showDuration()

//oprett en funksjon tick, som kjører hvert sekund
//sjekk om alarmen skal ringe - reset timer og tidsobjekt 
//ellers, kald countdown og showduration

//oprett en funksjon, showduration som viser tidfen
//hvis sekunder er mindre end 10  sett et 0 inn foran  
//hvis minutter er mindre end 10  sett et 0 inn foran  

//oprett en funksjon, countDown som trekker et sekund fra 
//hvis sekunder er mindre enn null - trekk et minutt fra og sett sekunder til 59














