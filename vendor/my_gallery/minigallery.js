function MiniGallery() {
    
}

MiniGallery.prototype.show = function (item) {
        var tmpImg = $(item).attr("src");
        console.log(tmpImg);
        
        $("#mainVisor").attr("src", tmpImg);
  }


MiniGallery.prototype.start = function () { 
    $(".img-thmb").click(function () { 
        MiniGallery.prototype.show(this);
        
    });
 }