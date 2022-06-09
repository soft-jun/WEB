$(document).ready(function(){
    $("ul.gnb>li").mouseover(function(){
        $("ul.sub,.nav_bg").stop().slideDown();
        $(".abc").stop().slideDown();
    });
    $("ul.gnb>li").mouseout(function(){
        $("ul.sub,.nav_bg").stop().slideUp();
        $(".abc").stop().slideUp();
    });
    var slide=$(".slide li");
    var sno =0;
    var lastno=slide.length-1;
    function playSlide(){
        $(slide[sno]).animate({
            "top":"300px"
        },1000,function(){
            $(this).css({"top":"-300px"});
        });
        sno++;
        if(sno>lastno) sno=0;
        $(slide[sno]).animate({
            "top":"0"
        },1000);
    }
    setInterval(function(){
        playSlide();
    },2000);
    $("footer .fam p").click(function(){
        $(this).toggleClass("on");
        $("footer .fam ul").stop().slideToggle();
    });
    $(".notice li").eq(0).click(function(){
        $(".modal").show();
       });
       $(".btn").click(function(){
        $(".modal").hide();
       });
    
});