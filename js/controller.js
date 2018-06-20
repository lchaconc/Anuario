"use strict";
const m = new Model (),  v = new View ();


$(document).ready(function () {
    console.log("ready");  
    //loadMainScreen();
});

function loadMainScreen () {
    v.startScreen($("#mainVisor"));
    
}