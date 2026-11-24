
$(document).ready(function(){
	
	if($(window).width() <= 768) {
		$(".gif").attr('src', 'images/images_mobile/' + '1' + '.gif' ); //@@Set File name here
			
			
			
		}
	
	
	//alert("test")
	var result = 1;
	var modelSize = 1;
	$(".icon_ar").click(function(){
		   $(this).toggleClass("selected");
		   $(".icon_tractor, .icon_info, .lamp_btn").removeClass("selected");
		   
	});
	$(".lamp_btn").click(function(){
		   $(this).toggleClass("selected");
		   $(".icon_tractor, .icon_info, .icon_ar").removeClass("selected");
		   
	});
	
	$(".icon_tractor").click(function(){
		   $(this).toggleClass("selected");
		    $(".lamp_btn, .icon_info, .icon_ar").removeClass("selected");
	});
	
	$(".icon_info").click(function(){
		   $(this).toggleClass("selected");
		    $(".icon_tractor, .lamp_btn, .icon_ar").removeClass("selected");
	});
	
	$("#pop_skip").click(function(){
		   $("#pop1").fadeOut();
		    $(".overlay").fadeOut();
		   
	});
	
	
	$(".icon_tractor").click(function(){
		   $("#pop_tractor_brands").fadeIn();
		    $(".overlay").fadeIn();
		   
	});
	
	$("#pop_tractor_brands .heading a").click(function(){
		   $("#pop_tractor_brands").fadeOut();
		   $(".icon_tractor").removeClass("selected");
		     $(".overlay").fadeOut();
		   
	});
	
	$("#ext").click(function(){
		   $("#int").addClass("opac");
		   $(this).removeClass("opac");
		   
	});
	
	$("#int").click(function(){
		   $("#ext").addClass("opac");
		    $(this).removeClass("opac");
		   
	});
	
	$(".icon_ar").click(function(){
		   $("#pop_qr").fadeIn();
		     $(".overlay").fadeIn();
		   
	});
	
	$("#pop_qr .close").click(function(){
		   $("#pop_qr").fadeOut();
		     $(".overlay").fadeOut();
		   
	});
	
	$("#pop_close").click(function(){
		  sdsdsd
		   
	});
	
	


	
		var counter = 1;
	
	
		$("#pop_next").click(function(){
				
			counter++;
			$(".gif").attr('src', 'images/' + counter + '.gif' ); //@@Set File name here
			
			if($.trim($(".gif").attr("src")) == "images/2.gif")// check image has src
			{
				
				$("#pop_next").hide();
				$("#pop_prev").show();
				$("#pop_close").show();
				$("#i1").hide();
				$("#i2").show();
				
			}
			
		
		});
		
		$("#pop_prev").click(function(){
			
			
				
				
				
			counter--;
			$(".gif").attr('src', 'images/' + counter + '.gif' ); //@@Set File name here
			
			
			if($(window).width() <= 768) {
				$(".gif").attr('src', 'images/images_mobile/' + '1' + '.gif' ); //@@Set File name here
				
				$("#pop_prev").hide();
				$("#pop_next").show();
			
			
		}
			
			
			
			if($.trim($(".gif").attr("src")) == "images/2.gif")// check image has src
			{
				
				$("#pop_next").hide();
				$("#pop_prev").show();
				
				$("#i1").hide();
				$("#i2").show();
				
			}
			
			if($.trim($(".gif").attr("src")) == "images/1.gif")// check image has src
			{
				
					$("#pop_prev").hide();
					$("#pop_next").show();
					
					$("#i1").show();
					$("#i2").hide();
				
			}
			
			
		
		});
	
	
	
	
	$("#menu1 li.item1").click(function(){
		  
		 $(this).addClass("selected");
		 $("#menu1 li.item2").removeClass("selected");
		 
	});
	
	$("#menu1 li.item2").click(function(){
		  
		 $(this).addClass("selected");
		 $("#menu1 li.item1").removeClass("selected");
		 
	});

		
	
	$("#menu1 .menu_item").click(function(){
		  
		 
		  $("#menu1 i").toggle();
		   $("#menu1 ul ul").slideToggle();
	});
	
	$("#menu2 .menu_item").click(function(){
		  
		  //$("#menu2 i").addClass("test")
		  $("#menu2 i").toggle();
		  $("#menu2 ul ul").slideToggle();
	});
   
   $(".popup header a").click(function(){
		  
		  
		  $(".popup").fadeOut();
		  $(".overlay").fadeOut();
		  
	});
	
	 $(".popup_btn").click(function(){
		  
		  
		  $(".popup").fadeOut();
		  $(".overlay").fadeOut();
		  
	});
	
	
	
	
	 $(".spot").click(function(){
		$("#pop2").fadeIn();
		$(".overlay").fadeIn();
		  
	});

$('#webXRNotSupported').click(function(){$('#webXRNotSupported').css('display','none')});
$('#enableWebGl').click(function(){$('#enableWebGl').css('display','none')});

	
	$("#menu2 .menu_item i").click(function(){
		$("#menu2 .menu_item span").toggle(10);
		//alert("test")
		
		  
	});
	
	
	var isChromium = window.chrome;
	var winNav = window.navigator;
	var vendorName = winNav.vendor;
	var isOpera = typeof window.opr !== "undefined";
	var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
	var isIOSChrome = winNav.userAgent.match("CriOS");

	if (isIOSChrome) {
	   // is Google Chrome on IOS
	} else if(
	  isChromium !== null &&
	  typeof isChromium !== "undefined" &&
	  vendorName === "Google Inc." &&
	  isOpera === false &&
	  isIEedge === false) 
	  {
	   // is Google Chrome
	} else { 
	   // not Google Chrome 
	}
	
	function detectWebGL()
	{
	   var gl = document.createElement('canvas').getContext('webgl2');
		if (!gl) 
		{ 
			return 2; 
		} 
		else 
		{ 
			return 1; 
		}
	};
	
		var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		var element = document.getElementById('AR_btn');
		
		if (isMobile) 
		{
			modelSize = 1.5;
			//$("#ext").html("");
			//$("#int").html("");
			window.onorientationchange = function(event) {
				console.log(event.target.screen.orientation.angle);
				if(event.target.screen.orientation.angle == 90 || event.target.screen.orientation.angle == 270){
						document.getElementById('doNotUseLandscape').style.display = "block";
				}
				else{
					document.getElementById('doNotUseLandscape').style.display = "none";
				}
			};
			
			if(screen.availHeight < screen.availWidth){
				document.getElementById('doNotUseLandscape').style.display = "block";
			}
			else{
					document.getElementById('doNotUseLandscape').style.display = "none";
				}
			
  			element.style.display = "block";
			
			var userAgent = navigator.userAgent || navigator.vendor || window.opera;

			// Windows Phone must come first because its UA also contains "Android"
			if (/windows phone/i.test(userAgent)) {
				document.getElementById('AR_btn').style.display = "block";
				document.getElementById('btnEnterARIOS').style.display = "none";
				document.getElementById('enableWebGl').style.display = "none";
			}

			if (/android/i.test(userAgent)) {
				document.getElementById('AR_btn').style.display = "block";
				document.getElementById('btnEnterARIOS').style.display = "none";
				document.getElementById('enableWebGl').style.display = "none";
			}

			// iOS detection from: http://stackoverflow.com/a/9039885/177710
			if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
				document.getElementById('btnEnterARIOS').style.display = "block";
				document.getElementById('AR_btn').style.display = "none";
				var output = detectWebGL();
				if(output == 1)
				{
					document.getElementById('enableWebGl').style.display = "none";
				}
				else{
					document.getElementById('enableWebGl').style.display = "block";
				}
			}
		}
			
		else 
		{
			document.getElementById('btnEnterARIOS').style.display = "none";
			document.getElementById('AR_btn').style.display = "none";
			document.getElementById('enableWebGl').style.display = "none";
		}
		
});
