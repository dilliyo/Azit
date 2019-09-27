var nameChk = false;
var emailChk = false;
var passChk = false;
var repassChk = false;
var phoneChk = false;
var birthChk = false;
//이름 유효성검사
var userNameChk = /^[가-힣]{2,6}$/;

$('#userName').on('change blur paste',function(e){
	
	var nameVal = $(this).val();
	
	if(userNameChk.test(nameVal)) {
		console.log(userNameChk.test(nameVal));
		$('#chkName').html('');
        $('#chkName').attr('color', '#f82a2aa3');
        $("#signupSubmit").attr("disabled", false);
        nameChk = true;
	} else {
		
		$('#chkName').html('유효하지 않은 이름 입니다.');
        $('#chkName').attr('color', '#f82a2aa3');
        $("#signupSubmit").attr("disabled", true);	
        $(this).val("");
	}
});

//이메일 유효성검사
var userEmailChk = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;

$('#userEmail').on('change blur paste',function(e){
	
	var emailVal = $(this).val();
	$.ajax({
		url:'/signup/emailCheck?userEmail='+ emailVal,
		type:'post',
		success : function(data) {

				console.log("1 = 중복, 0 = 안중복 : " + data);
			
				//이메일 중복시
				if(data == 1){
					$('#chkEmail').html("사용중인 이메일입니다.");
					$('#chkEmail').attr('color', '#f82a2aa3');
					$("#signupSubmit").attr("disabled", true);
				} else {
					if(userEmailChk.test(emailVal)) {
						$('#chkEmail').html('<button>이메일 인증하기</button>');
				        $('#chkEmail').css('font-size', '20px');
				        $('#chkEmail').css('padding-top', '10px');
				        $("#signupSubmit").attr("disabled", false);	
				        emailChk = true;
					} else {
						$('#chkEmail').html('유효하지 않은 이메일 입니다.');
				        $('#chkEmail').attr('color', '#f82a2aa3');
				        $("#signupSubmit").attr("disabled", true);	
				        $(this).val("");
					}
				}
			}
	})	
});
	
//비밀번호 
var userPassChk = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
$("#userPassword").on("change blur paste", function() {
	var passVal = $(this).val();
    if (passVal == ""){    	
    	 $('#chkPass').html('숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.');
         $('#chkPass').attr('color', '#f82a2aa3');
    	$("#signupSubmit").attr("disabled", true);
    	$(this).val("");
    } else if(!userPassChk.test(passVal)) { 
    	 $('#chkPass').html('숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.');
         $('#chkPass').attr('color', '#f82a2aa3');
    	$("#signupSubmit").attr("disabled", true);
    	$(this).val("");
	} else {
		 $('#chkPass').html('');
    	$("#signupSubmit").attr("disabled", false);
    	passChk = true;
    }   
});

//비밀번호 확인 유효성검사
$("#repeat-pass").on("change blur paste", function() {
	$('#chkRepeat-pass').html('');
	var repassVal = $(this).val();
    if (repassVal == ""){
        $('#chkRepeat-pass').html('비밀번호 일치하지 않음');
        $('#chkRepeat-pass').attr('color', '#f82a2aa3');
    	$("#signupSubmit").attr("disabled", true);
    	$(this).val("");
    } else if(repassVal != $("#userPassword").val()) {
        $('#chkRepeat-pass').html('비밀번호 일치하지 않음');
        $('#chkRepeat-pass').attr('color', '#f82a2aa3');
    	$("#signupSubmit").attr("disabled", true);
    	$(this).val("");
    } else {
        $('#chkRepeat-pass').html('비밀번호 일치함');
        $('#chkRepeat-pass').attr('color', '#199894b3');
    	$("#signupSubmit").attr("disabled", false);
    	repassChk = true;
    }
});



//전화번호 유효성검사
var userPhoneChk = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;

	
 $("#userPhone").on('change keyup paste', function(e){
       // 숫자만 입력받기
    var phoneVal = $(this).val().replace(/-/gi,'');
	var k = e.keyCode;
				
	if(phoneVal.length >= 11 && ((k >= 48 && k <=126) || (k >= 12592 && k <= 12687 || k==32 || k==229 || (k>=45032 && k<=55203)) )) {
  	    e.preventDefault();
	}
    }).on('change blur paste', function(){ // 포커스를 잃었을때 실행합니다.
        if($(this).val() == '') return;
        // 기존 번호에서 - 를 삭제합니다.
        var phoneVal = $(this).val().replace(/-/gi,'');	      
        // 입력값이 있을때만 실행합니다.
        if(phoneVal != null && phoneVal != '') {
            // 총 핸드폰 자리수는 11글자이거나, 10자여야 합니다.
            if(phoneVal.length==11 || phoneVal.length==10) {   
                // 유효성 체크
                if(userPhoneChk.test(phoneVal)) {
                    // 유효성 체크에 성공하면 하이픈을 넣고 값을 바꿔줍니다.
                	phoneVal = phoneVal.replace(/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?([0-9]{3,4})-?([0-9]{4})$/, "$1-$2-$3");                  
                    $(this).val(phoneVal);
                    $('#chkPhone').html('<button>휴대폰 인증하기</button>');
                    $('#chkPhone').css('font-size', '20px');
                    $("#signupSubmit").attr("disabled", false);
                    phoneChk = true;
                } else {
                	$('#chkPhone').html('유효하지 않은 전화번호 입니다.');
                    $('#chkPhone').attr('color', '#f82a2aa3');
                    $("#signupSubmit").attr("disabled", true);
                    $(this).val("");
                    $(this).focus();
                }
            } else {
            	$('#chkPhone').html('유효하지 않은 전화번호 입니다.');
                $('#chkPhone').attr('color', '#f82a2aa3');
                $("#signupSubmit").attr("disabled", true);
                $(this).val("");
                $(this).focus();
            }
      }
  });  

//생년월일 유효성검사

var userBirthChk = false;

 $('#userBirth').on('change blur paste',function(){
 	var birthVal = $(this).val().replace(/-/gi,'');;		
     var year = Number(birthVal.substr(0,4)); // 입력한 값의 0~4자리까지 (연)
     var month = Number(birthVal.substr(4,2)); // 입력한 값의 4번째 자리부터 2자리 숫자 (월)
     var day = Number(birthVal.substr(6,2)); // 입력한 값 6번째 자리부터 2자리 숫자 (일)
     var today = new Date(); // 날짜 변수 선언
     var yearNow = today.getFullYear(); // 올해 연도 가져옴
 	
     if (birthVal.length <=8) {
 		// 연도의 경우 1900 보다 작거나 yearNow 보다 크다면 false를 반환합니다.
 	    if (1900 > year || year > yearNow){
 	    	
 	    	$('#chkBirth').html('유효하지 않은 생년월일 입니다.');
             $('#chkBirth').attr('color', '#f82a2aa3');
             $("#signupSubmit").attr("disabled", true);
             $(this).val("");
 	    	
 	    }else if (month < 1 || month > 12) {
 	    		
 	    	$('#chkBirth').html('유효하지 않은 생년월일 입니다.');
             $('#chkBirth').attr('color', '#f82a2aa3');
             $("#signupSubmit").attr("disabled", true);
             $(this).val("");
 	    
 	    }else if (day < 1 || day > 31) {
 	    	
 	    	$('#chkBirth').html('유효하지 않은 생년월일 입니다.');
             $('#chkBirth').attr('color', '#f82a2aa3');
             $("#signupSubmit").attr("disabled", true);
             $(this).val("");
 	    	
 	    }else if ((month==4 || month==6 || month==9 || month==11) && day==31) {
 	    	 
 	    	$('#chkBirth').html('유효하지 않은 생년월일 입니다.');
             $('#chkBirth').attr('color', '#f82a2aa3');
             $("#signupSubmit").attr("disabled", true);
             $(this).val("");
 	    	 
 	    }else if (month == 2) {
 	    	 
 	       	var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
 	       	
 	     	if (day>29 || (day==29 && !isleap)) {
 	     		
 	     		$('#chkBirth').html('유효하지 않은 생년월일 입니다.');
 	            $('#chkBirth').attr('color', '#f82a2aa3');
 	            $("#signupSubmit").attr("disabled", true);
 	           $(this).val("");
 	    	
 			}else{
 				birthVal = birthVal.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
 				$(this).val(birthVal);
 				$('#chkBirth').html('');
 				$("#signupSubmit").attr("disabled", false);
 				userBirthChk = true;
 				birthChk = true;
 			}//end of if (day>29 || (day==29 && !isleap))
 	     	
 	    }else{
 	    	birthVal = birthVal.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
 			$(this).val(birthVal);
 	    	$('#chkBirth').html(''); 
 	    	$("#signupSubmit").attr("disabled", false);
 	    	userBirthChk = true;
 	    	birthChk = true;
 		}//end of if
 		
 		}else{
 			//1.입력된 생년월일이 8자 초과할때 :  auth:false
 			$('#chkBirth').html('유효하지 않은 생년월일 입니다.');
             $('#chkBirth').attr('color', '#f82a2aa3');
             $("#signupSubmit").attr("disabled", true);
             $(this).val("");
 		}
 }); //End of method /*
 
 function submitBtnChk(){
	 if(nameChk && emailChk && passChk && repassChk && phoneChk && birthChk == true){
		 $("#signupSubmit").attr("disabled", false);
	 } else {
		 $("#signupSubmit").attr("disabled", true);
	 }
 }
