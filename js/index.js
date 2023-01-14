let endPoint = 0;
let hidden_parts = document.getElementById("hidden-parts");
window.addEventListener('scroll',function() {
    let scrollPoint = window.pageXOffset || document.documentElement.scrollTop;
    if(scrollPoint > endPoint) {
        hidden_parts.style.top = "-110px";
        hidden_parts.style.transition = "0.3s";
    } else {
        hidden_parts.style.top = "0px";
    }
    endPoint = scrollPoint;
}) 


$(function() {
    $("#aside-nav-4").hide();
    $('#bar-icon-slide').click(function() {
        $("#aside-nav-4").toggle();
        $("#slide-bar-lists").toggle();

        $()
        $("#navbar").css('width','100%');
        $(".nav-bar").css('margin-left','90px');

    })


    
    // $('#bar-icon-slide').click(function() {
    //     $("#navbar").toggle();
    //     $(".nav-bar").toggle();
    // })
    
    if(window.innerWidth < 1025) {
        $(".header").hide();
        $(".responsive").show();
        $(".slide-bar-nav").hide();
    } else {
        $(".header").show();
        $(".slide-bar-nav").show();
        $(".responsive").hide();
    }

    $(window).resize(function() {
        if(window.innerWidth < 1025) {
            $(".header").hide();
            $(".responsive").show();
            $(".slide-bar-nav").hide();
        } else {
            $(".header").show();
            $(".slide-bar-nav").show();
            $(".responsive").hide();
        }
    })

    $("#showlessshow").hide();
    $("#showmore").click(function() {
        $("#showmore").hide();
        $("#showlessshow").slideToggle("slow");
    })
    $("#showlessshow").click(function() {
        $("#showlessshow").slideToggle("fast");
        $("#showmore").show();
    })

})
