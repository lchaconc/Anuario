"use strict";
const m = new Model (),  
v = new View ();
var currentStudent=""; // Registro actual que fue seleccinado por el usuario.


$(document).ready(function () {
    console.log("ready");
    setTimeout(function () { 
        m.loadJson(loadApp);    
     }, 500);
    
});

function loadApp (dataset) {
    v.htmlTemplate($(".container"));
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
                v.listStudents(dataset,$("#listaEstudiantes"));
                $(".alert-estudiante").click(function () { 
                    selectStudent(this.id);
                });
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


function selectStudent(item) {
    currentStudent = m.getRecord(item);
    v.infoStudent(currentStudent);
}
