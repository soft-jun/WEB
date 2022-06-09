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

    /* 공지사항 갤러리 변환 */
    $(".notice_gal h3").click(function(){
        $(".notice_gal h3,.notice_gal ul").removeClass("on");

        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });

});

