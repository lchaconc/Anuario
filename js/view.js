function View () {

}


View.prototype.htmlTemplate = function (visor) {
    var htmlContent = $(
        "<div class='jumbotron'><img class='img-thumbnail' id='logoCarmelo' src='img/logo.png'><h1 id='titulo'>Anuario 2018</h1></div>" +
        "<ul class='nav nav-pills botones mb-3' id='pills-tab' role='tablist'>" +
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
    htmlImage = $("<img class='img-fluid' src='img/grupal.jpg'>");
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
                    "<div id='estudiantesTitulo' role='alert'>" +
                    "<h5 id='estudiantesLetra'>ESTUDIANTES</h5>" +
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
            "<div class='col-sm-12'>" + "<center><h1>¡Somos la generación 2018!</h1></center>"+
                "Cada estudiante representa una historia de esfuerzo, de sacrificio, de disciplina.  Cada estudiante a su vez representa la alegría de ver alcanzada una meta en la que han intervenido las voluntades de muchas personas para que el logro de obtener el bachillerato, tenga un significado único para cada uno." +"<br><br>"+
          "De Clic al nombre de cada estudiante para que recuerde un poco de la hstoria que cada estudiante ha querido compartir, así como imágenes que mantentrán viva la presencia de cada uno de ellos en nuestras vidas..." + "</div>" +
        "</div>" +
        "</div>");
        $(visor).html(htmlContent);
   }

View.prototype.listStudents = function (array, visor) {

    var htmlContTmp = $("<div></div>");

    for (let index = 0; index < array.length; index++) {
        let htmlAlert = $("<div id='"+ index +"' class='alert alert-success alert-estudiante' role='alert'> </div>");
        $(htmlAlert).append(array[index].nombre );
        // $(htmlAlert).append(" " + array[index].apellido );
        $(htmlContTmp).append(htmlAlert);
    }

    $(visor).append(htmlContTmp);

}

View.prototype.infoStudent = function (student) {
    $("#visorSecundario").empty();
    $("#nombreEstudiante").empty();

    var htmlCol = $(" <div class='col-sm-12'> </div>" );
    $(htmlCol).append("<b>Mi materia favorita es...</b>"+student.materia+"<br><b>Mi principal pasatiempo es...</b>"+student.pasatiempo+"<br><b>Quiero que me recuerden por...</b>"+student.recuerdo+"<br><b>Siempre recordaré...</b>"+student.anecdota);
    $("#visorSecundario").html(htmlCol);
    $("#nombreEstudiante").text(student.nombre+" "+student.apellido);
}

View.prototype.animationInfoStudent = function () {
    $("#nombreEstudiante").fadeIn("slow", function () {
        $("#divBtnSecundaria").slideDown("slow");
      } );
}

View.prototype.pictures = function (student) {

    htmlCol = $(
        "<div class='col-sm-4'> <img data-action='zoom' src=' " + student.foto1 + " ' class='img-fluid img-thumbnail' alt='Foto uno'> </div>" +
        "<div class='col-sm-4'> <img data-action='zoom' src=' " + student.foto2 + " ' class='img-fluid img-thumbnail' alt='Foto dos'> </div>" +
        "<div class='col-sm-4'> <img data-action='zoom' src=' " + student.foto3 + " ' class='img-fluid img-thumbnail' alt='Foto tres'> </div>"
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
                  "<div id='profesoresTitulo' role='alert'>" +
                  "<h5 id='profesoresLetra'>PROFESORES</h5>" +
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
      "<div class='col-sm-12'>" + "<center><h1>Aliados de nuestro éxito</h1></center>"+
          "Reconocemos que ningún logro pudo ser posible sin la complicidad y esfuerzo de cada profesor. Cada uno de ellos puso a nuestra disposición su carisma, su conocimiento, su método y su cariño, para que lográramos comprender y adquirir las habilidades necesarias para culminar exitosamente el cole."+"<br><br>¡Muchas gracias queridos profes!"+"<br><br>"+
    "De Clic al nombre de cada profe para que conozca lo que cada uno nos ha querido compartir..." + "</div>" +
  "</div>" +
  "</div>");
      $(visor).html(htmlContent);
 }

 View.prototype.listTeachers = function (array, visor) {

    var htmlContTmp = $("<div></div>");

    for (let index = 0; index < array.length; index++) {
        let htmlAlert = $("<div id='"+ index +"' class='alert alert-success alert-profe' role='alert'> </div>");
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
    $(htmlCol).append("<img data-action='zoom' class='img-fluid' src='" + item.foto + "' alt='foto profesor'>");
    $("#visorSecundario").html(htmlCol);
    $("#nombreProfe").text(item.nombre + " " + item.apellido);
}

View.prototype.mainHighSchool = function (visor) {
    $(visor).empty();

    var htmlCol1 = $("<div class='col-sm-8  col-info-cole'>" +
    "<h2> Centro Educativo El Carmelo</h2>" +
    "El Centro Educativo El Carmelo, administrado por las Religiosas Católicas Carmelitas Misioneras, es una Institución Católica afiliada a ANADEC (Asociación Nacional de Educación Católica)y acreditada por la Conferencia Episcopal de Costa Rica, dedicada a la Educación desde 1986. Está representada legalmente por la Asociación Teresiano Carmelitana sin fines de lucro, cédula jurídica 3 002 045709.Se ubica en Barrio República de Cuba, Distrito Hospital, Cantón Central de San José, Costa Rica.Reconocida el Ministerio de Educación Pública desde 1987, el Consejo Superior de Educación, autorizó con fecha 27 de agosto de 1992 la Enseñanza Preescolar, I y II Ciclo de Educación General Básica con el nombre de Centro Educativo El Carmelo y en el año 2011 recibe la acreditación para III Ciclo y Educación Diversificada." +
    "</div>"),

    htmlCol2 = $("<div class='col-sm-4'>" +
    "<div class='row'>" +
        "<div class='col-sm-6'>"   +
            "<img data-action='zoom' class='img-thumbnail' src='img/colegio.jpg' alt='Colegio 1' >" +
        "</div>" +
        "<div class='col-sm-6'>"   +
            "<img data-action='zoom' class='img-thumbnail' src='img/colegio3.jpg' alt='Colegio 1' >" +
        "</div>" +
    "</div>" +
    "<div class='row'>" +
        "<div class='col-sm-12'>"   +
            "<img data-action='zoom' class='img-thumbnail' src='img/colegio2.jpg' alt='Colegio 1' >" +
        "</div>" +
    "</div>" +
    "</div>");



    $(visor).html(htmlCol1);
    $(visor).append(htmlCol2);



 }


View.prototype.menuPhotos = function (visor) {
    $(visor).empty();
    var htmlString = $(
        "<div class='col-sm-4 text-center col-menu-photos'>" +
            "<img class='menu-opt-camera' src='./img/camera.png'>" +
            "<h4>  En clases... </h4>   "  +
        "</div>" +
        "<div class='col-sm-4 text-center col-menu-photos'>" +
            "<img class='menu-opt-camera' src='./img/camera.png'>" +
            "<h4>  Expo Ciencias </h4>   "  +
        "</div>" +
        "<div class='col-sm-4 text-center col-menu-photos'>" +
            "<img class='menu-opt-camera' src='./img/camera.png'>" +
            "<h4>  Convivencias </h4>   "  +
        "</div>"
    )

    $(visor).html(htmlString);
  }

 View.prototype.mainPhotos = function (visor) {
     console.log("vista maingroup");

     $(visor).empty();
     var htmlString = $(
       " <div class='col-sm-12 container-gallery'>" +
        "<div class='row'>" +
            "<div class='col-sm-12 text-center col-main'>" +
                "<img id='imgMainVisor' src='./images/pic1.jpg' alt='' class='img-fluid'>" +
            "</div>" +
        "</div>" +
        "<div class='row'>" +
                    "<div class='col-sm-12 text-center col-thmb'>" +
                        "<img class='img-thmb img-thmb-sel' src='./images/pic1.jpg' alt='pic 1'>" +
                        "<img class='img-thmb' src='./images/pic2.jpg' alt='pic 2'>" +
                        "<img class='img-thmb' src='./images/pic3.jpg' alt='pic 3'>" +
                        "<img class='img-thmb' src='./images/pic4.jpg' alt='pic 4'>" +
                        "<img class='img-thmb' src='./images/pic5.jpg' alt='pic 5'>" +
                        "<img class='img-thmb' src='./images/pic6.jpg' alt='pic 6'>" +
                    "</div>" +
        "</div>" +
"</div>" );
    $(visor).html(htmlString);
   }
