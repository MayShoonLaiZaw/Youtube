
$(function() {
    $("#slide-bar-lists").hide();
    $('#bar-icon-slide').click(function() {
        $("#slide-bar-lists").toggle();
    })

    if(window.innerWidth < 931) {
        $(".header").hide();
        $(".responsive").show();
        $(".slide-bar-nav").hide();
        $(".video-collections").hide();
    } else {
        $(".header").show();
        $(".slide-bar-nav").show();
        $(".responsive").hide();
        $(".video-collections").show();
    }

    $(window).resize(function() {
        if(window.innerWidth < 931) {
            $(".header").hide();
            $(".responsive").show();
            $(".slide-bar-nav").hide();
            $(".video-collections").hide();
        } else {
            $(".header").show();
            $(".slide-bar-nav").show();
            $(".responsive").hide();
            $(".video-collections").show();
        }
    })
    $("#form").hide();
    $(".yourcomments-para p").click(function() {
        $("#form").show();
        $(".yourcomments").hide();
    })
    $(".cancel-agree").click(function() {
        $("#form").hide();
        $(".yourcomments").show();
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