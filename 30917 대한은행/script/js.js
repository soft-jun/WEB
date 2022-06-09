$(document).ready(function(){
    $("ul.gnb>li").hover(function(){
        $("ul.sub").stop().slideDown();
    },function(){
        $("ul.sub").stop().slideUp();
    });

    var slide=$(".slide li");
    var sno=0;
    var lastno=slide.length-1;
    function playSlide(){
        $(slide[sno]).animate({
            "left":"1200px"
        },1000,function(){
            $(this).css({"left":"-1200px"})
        });
        sno++;
        if(sno>lastno) sno=0;
        $(slide[sno]).animate({
            "left":"0"
        },1000);
    } //playSlide()
    setInterval(function(){
        playSlide();
    },2000);
    $(".notice_gal h3").click(function(){
        $(".notice_gal h3,.notice_gal ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    $(".notice li").eq(0).click(function(){
        $(".modal").show();
       });
       $(".btn").click(function(){
        $(".modal").hide();
       });
});