$(function(){
  $("#fullpage").fullpage({
    navigation:true,
    fixedElements:'#header, .overlay',
    verticalCentered:false,
    responsiveWidth:700,
    anchors : ['1st','2nd','3rd','4th'],
    afterLoad:function(anchorLink, index){
      if(anchorLink == '2nd'){
        $(".page_txt_box .main_txt").addClass('txt');
        $(".page_2 .page_txt_box .page_logo").addClass('txt-up');
      }
      if(anchorLink == '3rd'){
        $(".page_title").addClass("slide_up_1");
        $(".page_sub_title").addClass("slide_up_2");
        $(".slides").addClass("slide_up_3");
      }

      if(anchorLink == '3rd' || anchorLink == '4th'){
        $(".header .topnav a").css({color:"#000"});
        $(".topnav, .hidden_sub").on("mouseleave", function(){
          $(".hidden_sub").stop().animate({height:0}, 300, function(){
            $(".topnav li a").css({color:"#000"});
            $(".hidden_sub").css({display:"none"});
          });
        });
      } else {
        $(".topnav li a").css({"color":"#fff"});
        $(".topnav, .hidden_sub").on("mouseleave", function(){
          $(".hidden_sub").stop().animate({height:0}, 300, function(){
            $(".topnav li a").css({color:"#fff"});
            $(".hidden_sub").css({display:"none"});
          });
        });
      }
    }
  });
});