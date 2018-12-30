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
       if (scroll >57) {
           $(".nav-left").css({
               "position":"fixed",
               "background":"white",
               "z-index":"999",
               
           });
           $(".nav-left ul li a").css({
                "color":"#ff3366",
           })
       }
       if (scroll<57) {
        $(".nav-left").css({
            "position":"absolute",
            "background":"transparent",
            "z-index":"999",
            
            
        });
        $(".nav-left ul li a").css({
            "color":"white",
        })
       }
    })
})