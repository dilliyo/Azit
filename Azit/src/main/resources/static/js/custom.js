/**
 * 
 */

$(function(){
    var subPage = new Array;
    
    subPage[0] = "space";
    subPage[1] = "space_add";
    subPage[2] = "search";
    subPage[3] = "signin";
    subPage[4] = "mypage";

    var url = location.href;
   
    var getAr0 = url.indexOf(subPage[0]);
    var getAr1 = url.indexOf(subPage[1]);
    var getAr2 = url.indexOf(subPage[2]);
    var getAr3 = url.indexOf(subPage[3]);
    var getAr4 = url.indexOf(subPage[4]);
  
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
    
    // 검색
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 127) {
            $(this).removeClass('open');
        }
    });
    
    
 /*   //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    });*/


});
