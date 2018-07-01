function View () {
    
}


View.prototype.htmlTemplate = function (visor) {
    var htmlContent = $(
        "<div class='jumbotron'><h1>El Anuario</h1></div>" +
        "<ul class='nav nav-pills mb-3' id='pills-tab' role='tablist'>" +
                "<li class='nav-item'>" +
                  "<a class='nav-link active' id='pillsInicio' data-toggle='pill' href='#' role='tab' aria-controls='pills-home' aria-selected='true'>Inicio</a>" +
                "</li>" +
                "<li class='nav-item'>" +
                  "<a class='nav-link' id='pillsCompas' data-toggle='pill' href='#' role='tab' aria-controls='pills-profile' aria-selected='false'>Compas</a>" +
                "</li>" +
                "<li class='nav-item'>" +
                  "<a class='nav-link' id='pillsProfes' data-toggle='pill' href='#' role='tab' aria-controls='pills-contact' aria-selected='false'>Los profes</a>" +
                "</li>" +
                "<li class='nav-item'>" +
                    "<a class='nav-link' id='pillsCole' data-toggle='pill' href='#' role='tab' aria-controls='pills-contact' aria-selected='false'>El cole</a>" +
                "</li>" +
                "<li class='nav-item'>" +
                    "<a class='nav-link' id='pillsGrupo' data-toggle='pill' href='#' role='tab' aria-controls='pills-contact' aria-selected='false'>El grupo</a>" +
                "</li>" +
            "</ul>" +
        "<div class='row' id='mainVisor'></div>" 
    );
    $(visor).html(htmlContent);

}

View.prototype.startScreen = function (visor) {
    $(visor).empty();
    var htmlContent = $("<div class='col-sm-12 text-center'></div>"),
    htmlImage = $("<img class='img-fluid' src='img/grupal.png'>");
    $(htmlContent).append(htmlImage);
    $(htmlContent).append("<br><h2>Generación 2018</h2>");
    $(visor).html(htmlContent);
  }

View.prototype.mainStudents = function (visor) { 
      $(visor).empty();
      var htmlContent = (
        "<div class='col-sm-4'>" +
            "<div class='row'> " +
                "<div class='col-sm-12'>" +
                    "<div class='alert alert-warning text-center' role='alert'>" +
                    "<h5>ESTUDIANTES</h5>" + 
                    "</div>" +
                "</div>" +
            "</div>" +
            "<div class='row' >" +
            "<div class='col-sm-12' id='listaEstudiantes'></div>" +
            "</div>" +
        "</div>" +
        "<div class='col-sm-8'>" +
            "<div class='row'>" +
                "<div class='col-sm-12' id='divEstudiante'>" +
                    "<h3 id='nombreEstudiante'></h3>" +
                "</div>" +
            "</div>" +
        "<div class='row'>" +
            "<div class='col-sm-12' id='divBtnSecundaria'>" +
                    "<button type='button' id='btnIam' class='btn btn-outline-success btn-lg btn-menu-secundario'>Así soy</button>" +
                    "<button type='button' id='btnPictures' class='btn btn-outline-danger btn-lg btn-menu-secundario'>Fotos</button>" +
                    "<button type='button' id='btnTestament' class='btn btn-outline-warning btn-lg btn-menu-secundario'>Testamento</button>" +
            "</div>" +
        "</div>" +
        "<div  id='visorSecundario' class='row'>" + 
            "<div class='col-sm-12'>" +
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aut architecto vero nemo corrupti natus at repellat similique ullam quibusdam expedita autem modi magni. Ipsa libero obcaecati ab officia? Libero." +
            "</div>" + 
        "</div>" +
        "</div>");
        $(visor).html(htmlContent);
   }

View.prototype.listStudents = function (array, visor) {

    var htmlContTmp = $("<div></div>");

    for (let index = 0; index < array.length; index++) {
        let htmlAlert = $("<div id='"+ index +"' class='alert alert-success alert-estudiante' role='alert'> </div>");
        $(htmlAlert).append(array[index].nombre );
        $(htmlAlert).append(" " + array[index].apellido );
        $(htmlContTmp).append(htmlAlert);        
    }

    $(visor).append(htmlContTmp);

}

View.prototype.infoStudent = function (student) {
    $("#visorSecundario").empty();
    $("#nombreEstudiante").empty();

    var htmlCol = $(" <div class='col-sm-12'> </div>" );
    $(htmlCol).append(student.soy);
    $("#visorSecundario").html(htmlCol);
    $("#nombreEstudiante").text(student.nombre + " " + student.apellido);      
}

View.prototype.animationInfoStudent = function () {
    $("#nombreEstudiante").fadeIn("slow", function () {
        $("#divBtnSecundaria").slideDown("slow");
      } ); 
}

View.prototype.pictures = function (student) {

    htmlCol = $(
        "<div class='col-sm-4'> <img src=' " + student.foto1 + " ' class='img-fluid img-thumbnail' alt='Foto uno'> </div>" + 
        "<div class='col-sm-4'> <img src=' " + student.foto2 + " ' class='img-fluid img-thumbnail' alt='Foto dos'> </div>" + 
        "<div class='col-sm-4'> <img src=' " + student.foto3 + " ' class='img-fluid img-thumbnail' alt='Foto tres'> </div>"
    );

    $("#visorSecundario").html(htmlCol);
}

View.prototype.testament = function (student) {
    $("#visorSecundario").empty();

    var htmlCol = $(" <div class='col-sm-12'> </div>" );
    $(htmlCol).append(student.testamento);
    $("#visorSecundario").html(htmlCol);    
}


//Profesores: --------------------------------------------
View.prototype.mainTeachers = function (visor) { 
    $(visor).empty();
    var htmlContent = (
      "<div class='col-sm-4'>" +
          "<div class='row'> " +
              "<div class='col-sm-12'>" +
                  "<div class='alert alert-warning text-center' role='alert'>" +
                  "<h5>Proesores</h5>" + 
                  "</div>" +
              "</div>" +
          "</div>" +
          "<div class='row' >" +
          "<div class='col-sm-12' id='listaProfe'></div>" +
          "</div>" +
      "</div>" +
      "<div class='col-sm-8'>" +
          "<div class='row'>" +
              "<div class='col-sm-12' id='divProfe'>" +
                  "<h3 id='nombreProfe'></h3>" +
              "</div>" +
          "</div>" +    
      "<div  id='visorSecundario' class='row'>" + 
          "<div class='col-sm-12'>" +
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aut architecto vero nemo corrupti natus at repellat similique ullam quibusdam expedita autem modi magni. Ipsa libero obcaecati ab officia? Libero." +
          "</div>" + 
      "</div>" +
      "</div>");
      $(visor).html(htmlContent);
 }

 View.prototype.listTeachers = function (array, visor) {

    var htmlContTmp = $("<div></div>");

    for (let index = 0; index < array.length; index++) {
        let htmlAlert = $("<div id='"+ index +"' class='alert alert-danger alert-profe' role='alert'> </div>");
        $(htmlAlert).append(array[index].nombre );
        $(htmlAlert).append(" " + array[index].apellido );
        $(htmlContTmp).append(htmlAlert);        
    }

    $(visor).append(htmlContTmp);

}


View.prototype.infoTeacer = function (item) {
    $("#visorSecundario").empty();
    $("#nombreProfe").empty();

    var htmlCol = $(" <div class='col-sm-12 text-center'> </div>" );    
    $(htmlCol).append(item.consejo + "<hr>");
    $(htmlCol).append("<img src='" + item.foto + "' alt='foto profesor'>");
    $("#visorSecundario").html(htmlCol);
    $("#nombreProfe").text(item.nombre + " " + item.apellido);      
}


