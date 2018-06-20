function View () {
    
}

View.prototype.startScreen = function (visor) {
    $(visor).empty();
    var htmlContent = $("<div class='col-sm-12 text-center'></div>"),
    htmlImage = $("<img src='img/grupal.png'>");
    $(htmlContent).append(htmlImage);
    $(htmlContent).append("<br><h2>Generación 2018</h2>");
    $(visor).html(htmlContent);
  }

  View.prototype.mainStudents = function (visor) { 
      $(visor).empty();
      var htmlContent = (
        "<div class='col-sm-4'>" +
            "<div class='alert alert-warning text-center' role='alert'>" +
                "<H4>ESTUDIANTES</H4>" + 
            "</div>" +
        "</div>" +
        "<div class='col-sm-8'>" +
            "<div class='row'>" +
                "<div class='col-sm-12' id='divEstudiante'>" +
                    "<h3>Nombre del estudiante</h3>" +
                "</div>" +
            "</div>" +
        "<div class='row'>" +
            "<div class='col-sm-12' id='divBtnSecundaria'>" +
                    "<button type='button' class='btn btn-outline-success btn-lg'>Así soy</button>" +
                    "<button type='button' class='btn btn-outline-danger btn-lg '>Fotos</button>" +
                    "<button type='button' class='btn btn-outline-warning btn-lg '>Testamento</button>" +
            "</div>" +
        "</div>" +
        "<div class='row'>" + 
            "<div class='col-sm-12' id='visorSecundario'>" +
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aut architecto vero nemo corrupti natus at repellat similique ullam quibusdam expedita autem modi magni. Ipsa libero obcaecati ab officia? Libero." +
            "</div>" + 
        "</div>" +
        "</div>");
        $(visor).html(htmlContent);
   }