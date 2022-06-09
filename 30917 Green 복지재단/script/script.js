$(document).ready(function(){

    //메인 메뉴와 서브 메뉴 효과
       $("ul.gnb>li").mouseenter(function(){
               $("ul.sub,.nav_bg").stop().slideDown(); //mouseover
       });
       $("ul.gnb>li").mouseleave(function(){
               $("ul.sub,.nav_bg").stop().slideUp();   //mouseout
       });

    //슬라이드 효과
       var slide=$(".slide li");
       var sno=0;
       var lastno=slide.length-1;
       function playSlide(){
               $(slide[sno]).animate({
                       'left':'1200px'
               },1000,function(){
                       $(this).css({'left':'-1200px'});
               });
               sno++;
               if(sno>lastno) sno=0;
               $(slide[sno]).animate({
                       'left':'0'
               },1000);
       }

       setInterval(function(){
                playSlide();
       },2000);


       //패밀리사이트
       $("footer .fam p").click(function(){
                $(this).toggleClass("on");
                $("footer .fam ul"gle();
       });
       ).stop().slideTog
       //모달창
       $(".contents section.notice ul li").eq(0).click(function(){
               $(".modal").show();
       });
       $(".btn").click(function(){
                $(".modal").hide();
});

    });