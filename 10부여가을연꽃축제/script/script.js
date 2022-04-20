$(document).ready(function(){

 //메뉴 효과
 $("ul.gnb>li").mouseover(function(){
  $(this).find("ul.sub").stop().slideDown();
 });
 $("ul.gnb>li").mouseout(function(){
  $(this).find("ul.sub").stop().slideUp();
 });

 //이미지 슬라이드
 $(".slide li").eq(0).siblings().hide();
 var sno=0;
 setInterval(function(){
  if(sno<2) sno++;
  else sno=0;
  $(".slide li").eq(sno).siblings().fadeOut(500);
  $(".slide li").eq(sno).fadeIn(500);
 },2000);

 //모달 레이어 팝업
 $(".notice li").eq(0).click(function(){
  $(".modal").show();
 });
 $(".btn").click(function(){
  $(".modal").hide();
 });

});