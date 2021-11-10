$(function(){
    
    $(".dark").click(function(){

        $("body").css({"background-color": "black"})
        $("p").css({"color": "White"})
        $("h1").css({"color": "White"})
        $(".dark").css({"background-color": "white"})
        $(".light").css({"background-color": "white"})

    });

    $(".light").click(function(){

        $("body").css({"background-color": "white"})
        $("p").css({"color": "black"})
        $("h1").css({"color": "black"})
        $(".dark").css({"background-color": "blue"})
        $(".light").css({"background-color": "blue"})

    });

});