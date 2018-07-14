function miniGallery() {
    /*
    $(".img-thmb").hover(function () {
            $(".img-thmb").removeClass("img-thmb-sel");
            $(this).addClass("img-thmb-sel");
            
        }, function () {
            // out
        }
    );
    */


    $(".img-thmb").click(function () { 
        $(".img-thmb").removeClass("img-thmb-sel");
        $(this).addClass("img-thmb-sel");
        show($(this).attr("src") );            
    });
}

function show (urlImage) {
       
    
        $("#imgMainVisor").fadeOut(function () {
            $("#imgMainVisor").attr("src", urlImage);
            $("#imgMainVisor").fadeIn();
          });
        
        
  }


function start () { 

 }