$(document).ready(function(){
    $("header nav ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });

    var slide=$(".slide li");
    var sno=0;
    var lastno=slide.length-1;
    setInterval(function(){
        $(slide[sno]).animate({
            left:"800px"
        },1000,function(){
            $(this).css({"left":"-800px"});
        });
        sno++;
        if(sno>lastno)sno=0;
        
        $(slide[sno]).animate({
            left:'0px'
        },1000);
    },2000);

    /* $(".slide li").eq(0).siblings().hide();
    var sno=0;
    setInterval(function(){
        if(sno<2){
            sno++;
        }else{
            sno=0;
        }

        $(".slide li").eq(sno).siblings().fadeOut(500);
        $(".slide li").eq(sno).fadeIn(500);
    },2000); */

    $(".contents .notice_gal h3").click(function(){
        $(".contents .notice_gal h3, .contents .notice_gal ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });







});