"use strict";
const m = new Model (), v = new View ();
var currentStudent=""; // Registro actual que fue seleccinado por el usuario.



$(document).ready(function () {
   // console.log("ready");
    setTimeout(function () { 
        m.loadJson( "./data/estudiantes.json", loadApp, "s");    
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
                    $(".alert-estudiante").removeClass("btn-activo");
                    $(this).addClass("btn-activo");
                    selectStudent(this.id);
                    
                });
            break;
            case "pillsProfes":
            m.loadJson("./data/profesores.json", loadTechers, "t");
            
            break;
            case "pillsCole":
            console.log("Cole");
            v.mainHighSchool($("#mainVisor"));
            
            break;
            case "pillsGrupo":
            console.log("Grupo");
            v.mainGroup("#mainVisor");  
            startBanner();
            
            break;
            
        
            default:
            console.log("Selecciòn fuera de rango");
            
            break;
        }        
    });    
}


function selectStudent(item) {
    currentStudent = m.getRecordStudents(item);
    v.infoStudent(currentStudent);
    v.animationInfoStudent();
    $(".btn-menu-secundario").removeClass("btn-activo");
    $("#btnIam").addClass("btn-activo");
    $(".btn-menu-secundario").click(function () {
        $(".btn-menu-secundario").removeClass("btn-activo");
        $(this).addClass("btn-activo"); 
        switch (this.id) {
            case "btnIam":
                v.infoStudent(currentStudent);     
                break;
            case "btnPictures":
                v.pictures(currentStudent);
                break;
            case "btnTestament":
                v.testament(currentStudent);
                break;
        
            default:
                break;
        }        
    });
}


function loadTechers(array) {
    v.mainTeachers($("#mainVisor"));
    v.listTeachers(array,$("#listaProfe"));
    $(".alert-profe").click(function (params) {
       // console.log(m.getRecordTeachers(this.id));
        v.infoTeacer(m.getRecordTeachers(this.id));
        
    })
    
}

function startBanner() {

    
}


