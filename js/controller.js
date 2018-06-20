"use strict";
const m = new Model (),  v = new View ();


$(document).ready(function () {
    console.log("ready");  
    loadApp();
});

function loadApp () {
    v.startScreen($("#mainVisor"));
    //Manejador de eventos menù superior
    $(".nav-link").click(function (e) { 
        e.preventDefault();
        switch (this.id) {
            case "pillsInicio":
            v.startScreen($("#mainVisor"));
            break;
            case "pillsCompas":
            v.mainStudents($("#mainVisor"));
            break;
            case "pillsProfes":
            console.log("profes");
            
            break;
            case "pillsCole":
            console.log("Cole");
            
            break;
            case "pillsGrupo":
            console.log("Grupo");
            
            break;
            
        
            default:
            console.log("Selecciòn fuera de rango");
            
            break;
        }

        
    });
    
}

