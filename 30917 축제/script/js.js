$(document).ready(function(){
    $("ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().show();
    },function(){
        $(this).find("ul.sub").stop().hide();
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
    $(".notice ul li").eq(0).click(function(){
        $(".modal").show();
    });
    $(".btn").click(function(){
        $(".modal").hide();
    });
});