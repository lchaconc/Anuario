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