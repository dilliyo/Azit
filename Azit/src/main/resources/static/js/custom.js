/**
 * 
 */

$(function(){
    var subPage = new Array;
    
    subPage[0] = "space";
    subPage[1] = "space_add";
    subPage[2] = "search";
    subPage[3] = "signup";
    subPage[4] = "signin";
    subPage[5] = "mypage";
    subPage[6] = "qa";

    var url = location.href;
   
    var getAr0 = url.indexOf(subPage[0]);
    var getAr1 = url.indexOf(subPage[1]);
    var getAr2 = url.indexOf(subPage[2]);
    var getAr3 = url.indexOf(subPage[3]);
    var getAr4 = url.indexOf(subPage[4]);
    var getAr5 = url.indexOf(subPage[5]);
    var getAr6 = url.indexOf(subPage[6]);
  
    if(getAr0 != -1){
        $("li a").addClass("on")
        $(".logo").addClass("on")
        $(".navbar").addClass("on")
    };
    if(getAr1 != -1){
    	$("li a").addClass("on")
        $(".logo").addClass("on")
        $(".navbar").addClass("on")
    };
    if(getAr2 != -1){
    	$("li a").addClass("on")
        $(".logo").addClass("on")
        $(".navbar").addClass("on")
    };
    if(getAr3 != -1){
    	$("li a").addClass("on")
        $(".logo").addClass("on")
        $(".navbar").addClass("on")
    };
    if(getAr4 != -1){
    	$("li a").addClass("on")
        $(".logo").addClass("on")
        $(".navbar").addClass("on")
    };
    if(getAr5 != -1){
    	$("li a").addClass("on")
        $(".logo").addClass("on")
        $(".navbar").addClass("on")
    };
    if(getAr6 != -1){
    	$("li a").addClass("on")
        $(".logo").addClass("on")
        $(".navbar").addClass("on")
    };
    

});
