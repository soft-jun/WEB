$(document).ready(function(){
    $("ul.gnb>li").mouseover(function(){
        $("ul.sub,.nav_bg").stop().slideDown();
    });

    $("ul.gnb>li").mouseout(function(){
        $("ul.sub,.nav_bg").stop().slideUp();
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
    //모달 레이어 팝업
 $(".notice li").eq(0).click(function(){
    $(".modal").show();
   });
   $(".btn").click(function(){
    $(".modal").hide();
   });
  
});