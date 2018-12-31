console.log("gggg");
$(document).ready(function(){
    $('#dc').click(function(){
        $('.design-education').toggleClass("hidden","addOrRemove");
        $('.title').toggle(600);
        $(".nav-left").css({
            "background":"white",
        })
       
    });
    var flag=false;
    var scroll;
    $(window).scroll(function(){
       scroll=$(window).scrollTop();
       console.log(scroll);
       if (scroll >56) {
           $(".nav-left").css({
               "position":"fixed",
               "background":"white",
               "box-shadow":"0px 0px 1px 3px rgba(0, 0, 0.2, 0.2)",
               "z-index":"999",
               
           });
           
           $(".nav-left ul li a").css({
                "color":"black",
           })
           $(".nav-left .platform a").css({
            "color":"#ff3366",
        })
       }
       if (scroll<56) {
        $(".nav-left").css({
            "position":"absolute",
            "background":"transparent",
            "z-index":"999",
            "box-shadow":"0px 0px 0px 0px",
            
            
        });
        $(".nav-left ul li a").css({
            "color":"white",
        })
        $(".nav-left .platform a").css({
            "color":"#ff3366",
        })
       }
       if (scroll > 5186) {
           $(".logo-ms-team img").css({
               "margin":"2% 25%"
           })
           $(".logo-slack img").css({
            "margin":"1% 65%"
        })
        $(".logo-dropbox img").css({
            "margin":"15% 80%"
        })
        $(".logo-confluence img").css({
            "margin":"22% 10%"
        })
       }
    })
})