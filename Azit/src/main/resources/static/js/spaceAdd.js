//지정휴무일
var maxField = 10; //최대 개수
var wrapper = $('.appoint-holiday-list');
var extcnt = 0; // 최초 카운트 1
var add2HTML = '<div class="appoint-holiday"><input type="text" placeholder="입력" class="input" /><div class="wrap-input100 validate-input space-add-input" data-validate="Name is required"><input class="input100" type="text" id="appoint-holiday-name" name="appoint-holiday-name" placeholder="휴무일명을 입력하세요." autocomplete="off" required="required" maxlength="4"><span class="focus-input100"></span><font id="chkName" size="2"></font></div><div></div><div class="dateP"><input type="text" id="appoint-holiday-add-date-start" class="appoint-holiday-add-date" readonly="readonly" placeholder="휴무 시작날짜"><input type="text" id="appoint-holiday-add-date-end" class="appoint-holiday-add-date" readonly="readonly" placeholder="휴무 끝날짜"><input class="appoint-holiday-add" id="appoint-holiday-remove" type="button" value="삭 제"/></div>';
var add1HTML = '<div class="dim-layer"><div class="dimBg"></div><div id="layer2" class="pop-layer"><div class="pop-container"><div class="pop-conts"><!--content //--><div><div><h5 class="info-text">휴무일명</h5></div><div class="wrap-input100 validate-input space-add-input" data-validate="Name is required"><input class="input100" type="text" id="appoint-holiday-name" name="appoint-holiday-name" placeholder="휴무일명을 입력하세요." autocomplete="off" required="required" maxlength="4"><span class="focus-input100"></span><font id="chkName" size="2"></font></div><div><h5 class="info-text">날짜</h5></div><div class="dateP">일자: <input type="text" id="datepicker" class="date hddp" readonly="readonly" placeholder="날짜"> </div></div><p class="ctxt mb20"><div class="btn-r"><a href="#" class="appoint-holiday-add-save">저장</a><a href="#" class="appoint-holiday-add-close">Close</a></div><!--// content--></div></div></div></div>'
	
	//추가 버튼 클릭시 팝업창 띄움
	$("#appoint-holiday-add").on("click", function(){
    if(extcnt < maxField){
    	extcnt++; // 숫자 증가
    	$('.appoint-holiday-list').append("<div id=appoint-holiday-"+extcnt+">"+add2HTML+"</div>"); // Add field
    	$('#extcount').html('(' + extcnt + '개)');
    	/*layer_popup('#layer2');*/
    	
    	$(".appoint-holiday-add-date").datepicker({
    	    monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
    	    monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
    	    dayNamesMin: ['일','월','화','수','목','금','토'],
    	    showMonthAfterYear: true, //년 뒤에 월 표시
    	});
 
        
    }
    
});
	$("#appoint-holiday-save").on("click", function(){
	    if(extcnt < maxField){
	        extcnt++; // 숫자 증가
	        $('.appoint-holiday-list').append(add2HTML,extcnt); // Add field
	        layer_popup('#layer2');
	        $('#extcount').html('(' + extcnt + '개)');
	        $(".appoint-holiday-add-date").datepicker();
	    }
	});

$(wrapper).on('click', '#appoint-holiday-remove', function(e){
    e.preventDefault();
    var tagId = $(this).parents(".appoint-holiday");
    
    var indexNo = $('.appoint-holiday').closest('div').index();
    $(this).eq(indexNo).remove();
    
  /*  $(tagId)index().parent('div').remove(); // Remove field
*/    $(tagId).remove();
    extcnt--; // 카운트 감소
    $('#extcount').html("(" + extcnt + "개)");
    /*if($('.appoint-holiday').length == maxField)*/
});



//지정휴무일 추가
//지정휴우일 팝업
/*
function layer_popup(el){
	
	
	
    var $el = $(el);        //레이어의 id를 $el 변수에 저장
    var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

    isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

    var $elWidth = ~~($el.outerWidth()),
        $elHeight = ~~($el.outerHeight()),
        docWidth = $(document).width(),
        docHeight = $(document).height();

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {
        $el.css({top: 0, left: 0});
    }
    $el.find('a.appoint-holiday-add-save').on('click',function(){
        isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
        $('.dim-layer').remove(); // 레이어팝업 html 삭제
        return false;
    });
   
    $el.find('a.appoint-holiday-add-close').on('click',function(){
        isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
        $('.dim-layer').remove(); // 레이어팝업 html 삭제
        return false;
    });
    
    $el.find('.layer .dimBg').on('click',function(){
        $('.dim-layer').fadeOut();
        return false;
    });
    
    
    

}*/
// 지정휴무일 끝






//