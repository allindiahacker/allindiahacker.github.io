var vid_played = 0;
$(document).ready(function(){
    $("#mw1").click(function(){
        $("#mw1").fadeOut(300);
        $("#what").delay(300).fadeIn(300);
        $("#vid").delay(600).fadeIn(500);
        $("#prod").delay(600).fadeIn(500);
        $("#music").delay(1100).fadeIn(500);
        $("#musictext").delay(1100).fadeIn(500);
        $("#photo").delay(1600).fadeIn(500);
        $("#phototext").delay(1600).fadeIn(500);
        $("#gd").delay(2100).fadeIn(500);
        $("#gdtext").delay(2100).fadeIn(500);
        $("#vid").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide2").offset().top
    }, 500);
});$("#music").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide3").offset().top
    }, 700);
});$("#photo").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide4").offset().top
    }, 800);
});$("#gd").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide5").offset().top
    }, 1000);
});
    });
    
    $("#mw2").click(function(){
        $("#mw2").fadeOut(300);
        $("#page2_boxes").show().css("display","block");
        $("#b1").show().css("display","inline-block");
        $("#b2").show().css("display","inline-block");
        $("#b3").show().css("display","inline-block");
        $("#b4").show().css("display","inline-block");
        $("#b5").show().css("display","inline-block");
        $("#b6").show().css("display","inline-block");
        $("#b7").show().css("display","inline-block");
        $("#b8").show().css("display","inline-block");
        $("#b1").delay(500).fadeTo("slow", 1);
        $("#b2").delay(700).fadeTo("slow", 1);
        $("#b3").delay(900).fadeTo("slow", 1);
        $("#b4").delay(300).fadeTo("slow", 1);
        $("#b5").delay(600).fadeTo("slow", 1);
        $("#b6").delay(300).fadeTo("slow", 1);
        $("#b7").delay(800).fadeTo("slow", 1);
        $("#b8").delay(400).fadeTo("slow", 1);

    });
    $("#b1").click(function(){
    	$("#mys").fadeIn(300);
        $("#theatre_mode").fadeIn(600);
        setTimeout(function(){vid_played=1},600);
        $(window).click(function(){
    	if(vid_played==1)
        {   var video = $("#mys").attr("src");
            $("#mys").attr("src","");
            $("#mys").attr("src",video);
            vid_played = 0;
            $("#mys").css("display","none");
            $("#theatre_mode").fadeOut(600);
            
        }
    });

    });
    $("#b2").click(function(){
    	$("#iitk").fadeIn(300);
        $("#theatre_mode").fadeIn(600);
        setTimeout(function(){vid_played=2},600);
        $(window).click(function(){
    	if(vid_played==2)
        {   var video = $("#iitk").attr("src");
            $("#iitk").attr("src","");
            $("#iitk").attr("src",video);
            vid_played = 0;
            $("#iitk").css("display","none");
            $("#theatre_mode").fadeOut(600); 
        }
    });
    });
    $("#b5").click(function(){
    	$("#merc").fadeIn(300);
        $("#theatre_mode").fadeIn(600);
        setTimeout(function(){vid_played=5},600);
        
        $(window).click(function(){
    	if(vid_played==5)
        {   var video = $("#merc").attr("src");
            $("#merc").attr("src","");
            $("#merc").attr("src",video);
            vid_played = 0;
            $("#merc").css("display","none");
            $("#theatre_mode").fadeOut(600);
            
        }
    });
        
    });
    $("#b6").click(function(){
    	$("#engi").fadeIn(300);
        $("#theatre_mode").fadeIn(600);
        setTimeout(function(){vid_played=6},600);
        
        $(window).click(function(){
    	if(vid_played==6)
        {   var video = $("#engi").attr("src");
            $("#engi").attr("src","");
            $("#engi").attr("src",video);
            vid_played = 0;
            $("#engi").css("display","none");
            $("#theatre_mode").fadeOut(600);
            
        }
    });
        
    });
    $("#b8").click(function(){
    	$("#poke").fadeIn(300);
        $("#theatre_mode").fadeIn(600);
        setTimeout(function(){vid_played=8},600);
                $(window).click(function(){
    	if(vid_played==8)
        {   var video = $("#poke").attr("src");
            $("#poke").attr("src","");
            $("#poke").attr("src",video);
            vid_played = 0;
            $("#poke").css("display","none");
            $("#theatre_mode").fadeOut(600);
            
        }
    });
    });
    
    
    
});