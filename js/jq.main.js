$(function(){

  // Megabox Menu Show When Hover Navigation
   $(".topnav, .hidden_sub").on("mouseenter",function(){
     $(".hidden_sub").css({display:"block"});
     $(".topnav li a").css({color:"#000"});
     $(".hidden_sub").stop().animate({height:"480px"},300);
   });

   $(".topnav, .hidden_sub").on("mouseleave",function(){
     $(".hidden_sub").stop().animate({height:0},300,function(){
       $(".topnav li a").css({color:"#fff"});
      $(".hidden_sub").css({display:"none"});
     }); //callback 함수 : 먼저 상위 함수가 실행된 후 순차적으로 실행된다.
   });

   //Sub Mega Box Menu Hide and Show
   $(".topnav li").on("mouseenter", function(){
     const i = $(this).index();
    $(".subnav_box").hide();
    $(".subnav_box").eq(i).show();
   });

   //Mobile Menu Animation Effect
   $(".menu_icon").hover(function(){
    $(this).toggleClass('active');
    //console.log($(this));
   });

   //Mobile Menu Click Effect
   $(".menu_icon").click(function(){
    $(".mobile_nav").animate({left:0},300);
    $("section").animate({left:'50%'},300);
    $(".overlay").animate({
      "opacity":0.7,
      "left":"50%",
      "width":"100%"
    },300)
   });

   $(".close_btn, .overlay").click(function(){
    $(".mobile_nav").animate({left:'-50%'},300);
    $("section").animate({left:0},300);
    $(".overlay").animate({
      "opacity":0,
      "left":0,
      "width":0
    },300)
   });

  //  Mobile Menu Accordion effect
  $(".mobile_tit").click(function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $(this).siblings(".mobile_sub_nav").slideUp(200);
      $(this).removeClass("rotate");
      $(".mobile_tit").removeClass("rotate");
    } else {
      $(".mobile_tit").removeClass("active");
      $(".mobile_tit").removeClass("rotate");
      $(this).addClass("active");
      $(".mobile_sub_nav").slideUp(200);
      $(this).siblings(".mobile_sub_nav").slideDown(200);
      $(this).addClass("rotate");
    }
  });
   
  //Slide Functions
  function resSize(autoLength){
    const liWidth = $(".slide_li").width() * autoLength;
    const liLength = $(".slide_li").width() * $(".slide_li").length;
    $(".slide_box").width(liWidth);
    $(".slide_inner").width(liLength);
  }

  $(window).resize(function(){
    const wWidth = $(window).width();
    if(wWidth >= 700){
      resSize(3);
    } else if (wWidth < 700){
      resSize(2);
    } 
  });

  if(matchMedia("screen and (min-width:800px)").matches){
    resSize(3);
  } else if (matchMedia("screen and (max-width:779px)").matches){
    resSize(2);
  }

  function slideInit(){
    let slideCount = 0;
    const liWidth = $(".slide_li").width(); //350px : 슬라이드 하나 당 가로값 (값 안 바뀜)
    const slideSize = $(".slide_box").width() / $(".slide_li").width(); //slide_box:슬라이드 3개씩만 담고 있는 박스라서 350*3=1050px / 350px = 3 (슬라이드 6개 -> 슬라이드 늘어날때마다 값 바뀜)
    const slideLength = $(".slide_li").length - slideSize; //6-3 = 3
    //console.log(slideLength);

    $(".arr_next").click(function(){
      slideCount++;
      if(slideCount > slideLength){
        slideCount=0;
      }
      $(".slide_inner").stop().animate({"margin-left":slideCount * -liWidth},250);
    });

    $(".arr_prev").click(function(){
      slideCount--;
      if(slideCount < 0){
        slideCount = slideLength;
      }
      $(".slide_inner").stop().animate({"margin-left":slideCount * -liWidth},250);
    });
  }

  $(window).resize(function(){
    $(".slide_inner").stop().animate({"margin-left":0},100);
    slideInit();
  });

  slideInit();
});

// $(document).ready(function(){}); (또 다른 jquery 컴파일언어)