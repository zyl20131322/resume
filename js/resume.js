$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    width : window.innerWidth,
    height : window.innerHeight,
    pagination : '.swiper-pagination',
    paginationClickable :true,
    mousewheelControl : true,
    
  })
  isShadow();
  window.onresize = function(){//窗口大小充值
    isShadow();
  }

       
})
// 是否显示阴影
function isShadow(){
  if(window.innerWidth>768){
    $(".caption .description").hide();//隐藏作品描述
    $(".works-wapper .work").each(function(index){
      $(this).on("mouseover",function(){
        $(".work-shadow").eq(index).css("opacity","1");//显示阴影
        $(".caption .description").eq(index).slideDown(300);//显示作品描述
      }).on("mouseout",function(){
        $(".work-shadow").eq(index).css("opacity","0");//隐藏阴影
        $(".caption .description").eq(index).stop(true).slideUp(300);//隐藏作品描述
      });
    }); 
  }else{
    $(".caption .description").show();//显示作品描述
    $(".works-wapper .work").each(function(index){
      $(this).off("mouseover").off("mouseout");  
    });
  }
}