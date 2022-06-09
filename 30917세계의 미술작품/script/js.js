$(document).ready(function(){
    $("ul.gnb>li").mouseover(function(){
        $(this).find("ul.sub").stop().slideDown();
    });
    $("ul.gnb>li").mouseout(function(){
        $(this).find("ul.sub").stop().slideUp();
    });
    var slide=$(".slide li");
    var sno=0;
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
    } //playSlide() 함수 끝
    setInterval(function(){
        playSlide();
    },2000);
    $(".contents section.notice ul li").eq(0).click(function(){
        $(".modal").show();
});
$(".btn").click(function(){
         $(".modal").hide();
});
});