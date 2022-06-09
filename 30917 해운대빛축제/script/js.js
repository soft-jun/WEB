$(document).ready(function(){
    $("ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });
    $(".slide li").eq(0).siblings().hide();
    var slideNo=0;
    setInterval(function(){
        if(slideNo<2){
            slideNo++
        }else{
            slideNo=0;
        }
    $(".slide li").eq(slideNo).siblings().fadeOut(500);
    $(".slide li").eq(slideNo).fadeIn(500);
},2000);

    $(".contents .notice_gal h3").click(function(){
        $(".contents .notice_gal h3, .contents .notice_gal ul").removeClass("on");
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