$("document").ready(function () {
    // the configuration parameters are in the config.js file (same folder)
	ResizePages();

    // check the different file uploaded before 
    // var active and all Pages store active, respective active & hidden pages
    // ex. below
    // var activePages = [0, 1, 3];
	// var allPages = [0, 1, 2, 3, 4];

    // var pagesContent stores the HTML content of the pages 
    //check the different file uploaded before 
	
	var currentPage = ReadPageParameters("page");
	var startPage = currentPage;
	var totalPages = pagesContent.length;

	var blockButton = 0;
	var urlRequestedPage = false;
	
	// here we load the pages content
    LoadPages(currentPage);
    
    // here we activate internal navigation (home...)
    $("#exit").click(function () {
        LoadPages(0);
    });
    
    $("#exit").on("touchclick", function () {
        LoadPages(0);
    });

    /////////////////////////////////////////////////////
    // navigation left-right, swipe and click
    $("#navLeft").click(function () {
    	if (blockButton == 1){
			return;
		}
        TranslationRight("button");
    });
    
    $("#navLeft").on("touchclick", function () {
    	if (blockButton == 1){
			return;
		}
        TranslationRight("button");
    });    

    $("#navRight").click(function () {
    	if (blockButton == 1){
			return;
		}    	
        TranslationLeft("button");
    });
    
    $("#navRight").on("touchclick", function () {
    	if (blockButton == 1){
			return;
		}    	
        TranslationLeft("button");
    });    
    
    // we reposition all elements where they shall be;
    function ResizePages(){
	$("#wrapper").css("height",screenHeight);
	$("#wrapper").css("width",screenWidth);
	$('[id^=content]').css("height",screenHeight);
	$('[id^=content]').css("width",screenWidth);
	$('#contentLeft').css("left",screenWidth*(-1));
	$('#contentRight').css("right",screenWidth);
	$('[id^=page]').css("height",screenHeight);
	$('[id^=page]').css("width",screenWidth);	
	} 

    //here we read the parameter from get request
    function ReadPageParameters(textParameter) {
	    var parameter = 0;
	    var urlRequest = document.URL.toLowerCase();
	    if (urlRequest.indexOf("?") < 0) { return 0 };
	    // here we split the string after html to read the parameters 
	    var paramsList = urlRequest.slice(urlRequest.indexOf("?") + 1, urlRequest.length);
	    //here we measure the length of the parameters List 
	    var lengthOfParamsList = paramsList.length;
	    //console.log(paramsList + " - lenght:" + lengthOfParamsList);
	    // in order to split the string correctly, we add an & at the end of the string, but we ensure this is not there
	    var lastLetterInString = paramsList.slice(parseInt(paramsList.length) - 1, paramsList.length);
	    //console.log("last letter is = " + lastLetterInString);
	    if (lastLetterInString != "&") {
	        paramsList = paramsList + "&";
	    }
	    // here we split the string into readable parameters 
	    var paramsFromUrlRequest = paramsList.slice(0, paramsList.indexOf("&"));
	    //console.log("paramsFromUrlRequest " + paramsFromUrlRequest);
	    var filteredList = paramsList.split("&");

	    //console.log("filteredList");
	    //console.log(filteredList);

	    // here we check if the textParameter requied is contained 
	    for (i = 0; i < filteredList.length; i++) {
	        // here we split after the equal sign 
	        var paramsValue = filteredList[i].split("=");
	        if (paramsValue[0] == textParameter) {
	            return parseInt(paramsValue[1]);
	        }
	    }
	}
      
	$(document).swipe({		
	  swipeStatus:function(event, phase, direction, distance, duration, fingers) {
	  		$("body").css("left","0px");
	  		$("body").css("top","0px");
	  		//console.log(direction); 
	  		//console.log(event); 
	  		//console.log(duration); 
	  		//console.log(event.type); 
	  		//console.log(distance); 
	  		// here we are moving elements
	        if(direction=="left" && event.type=="touchmove") 
	        {
				if (blockButton == 1){return;}
				SwipeMoveElement(1,distance);
			}
			
			if (direction=="right" && event.type=="touchmove") 
	        {
				if (blockButton == 1){return;}
				SwipeMoveElement(-1,distance);
	        }	
	        // here we trigger page change 	
	        if(direction=="left" && event.type=="touchend" && distance>swipeTreshold) 
	        {
	        	if (blockButton == 1){return;}
	        	if (currentPage<(totalPages-1))
	        	{
	        		//console.log("current page="+ currentPage);
	        		//SwipeTranslationRight("touch");
	        		TranslationLeft();	        		
				}
			}
			
	        if (direction=="right" && event.type=="touchend" && distance>swipeTreshold) 
	        {
	        	if (blockButton == 1){return;}
	        	if (currentPage>0){
	        		//console.log("current page="+ currentPage);
	        		//SwipeTranslationLeft("touch");
	        		TranslationRight();
	        	}
	        }   
	        // here we trigger page reshape (after not moving enough) 	
	        if(direction=="left" && event.type=="touchend" && distance<swipeTreshold) 
	        {
	        	if (blockButton == 1){return;}
	        	ShowAfterSwipe();
				RepositionLateralDivs();
			}
			
	        if (direction=="right" && event.type=="touchend" && distance<swipeTreshold) 
	        {
	        	if (blockButton == 1){return;}
	        	ShowAfterSwipe();
	        	RepositionLateralDivs();
	        } 	                    
	  },
	  threshold:10
	});   
	
	function SwipeMoveElement(moveDirection,moveDistance){	
		//HideDuringSwipe();	
		var moveContentDiv = - moveDirection * moveDistance;
		var moveLeftDiv = 0;
		var moveRightDiv = 0;	
		// swipe towards left (decrease position values) 	
		if (currentPage == 0 && moveDirection < 0){
			return;
		}
		if (currentPage == (totalPages-1) && moveDirection > 0){
			return;
		}
		moveRightDiv = screenWidth + moveContentDiv;
		moveLeftDiv = - screenWidth + moveContentDiv;
		blockButton = 1;	
		$("#content").css("left",moveContentDiv);
		$("#contentLeft").css("left",moveLeftDiv);
		$("#contentRight").css("left",moveRightDiv);					
		$("#contentLeft").show();
		$("#contentRight").show();
		blockButton = 0;
	    //console.log(moveDirection + " & contentDiv=" + moveContentDiv + " positionLeftDiv=" + moveLeftDiv + " positinRightDiv=" + moveRightDiv); 
		return;				
	}

    // page loader
	function LoadPages(pageIndex) {
		blockButton = 1;
		$("#content").html("");
		$("#content").html(pagesContent[pageIndex]);
        $("#contentRight").html("");
		$("#contentLeft").html("");		
		RepositionLateralDivs();		
		var pageRight = pageIndex + 1;
		var pageLeft = pageIndex - 1;
		if (pageIndex == 0) {
		    //console.log("loadedRight");
		    $("#navLeft").hide();
		    $("#contentRight").append(pagesContent[pageRight]);
		    $("#contentLeft").html("");
        }
		if (pageIndex == (totalPages * 1 - 1)) {
		    //console.log("loadedLeft");
		    $("#navRight").hide();
			$("#contentRight").html("");
			$("#contentLeft").append(pagesContent[pageLeft]);
        }
		if (pageIndex > 0 && pageIndex < (totalPages * 1 - 1)) {
		    //console.log("loadedBothPages");
		    $("#contentRight").append(pagesContent[pageRight]);
		    $("#contentLeft").append(pagesContent[pageLeft]);
			$("#navRight").show();
			$("#navLeft").show();		
        }
		RepositionLateralDivs();	
		currentPage = pageIndex;
        // here we show the elements which are not ok to be shown during the swipe effect 
		ShowAfterSwipe();
	    // here we animate the content with automated animations on page rendering

		$.each(pageAutomaticAnimations, function () {
		    if (parseInt(this.page) == currentPage) {
		        //console.log(this);
		        //console.log(this.page);
		        //console.log(this.elementsToAnimate);
		        //console.log(currentPage);
		        ChooseAnimationFunction(this.elementsToAnimate);
		    }
		});
	    // end animation 
		stringToHash = "current=" + currentPage;
		//console.log(urlRequestedPage);
		if (urlRequestedPage==false){
		    stringToHash="current="+ currentPage;	
		}
		location.hash = stringToHash;
		blockButton = 0;
		//console.log("current page="+ pageIndex +" - left=" + pageLeft + " - right=" + pageRight);
	}

	function RepositionLateralDivs(){
		var leftPosition = screenWidth*(-1);
		$("#contentRight").css("position","absolute");
		$("#contentLeft").css("position","absolute");
		$("#content").css("position","absolute");	
		$("#contentRight").css("left",screenWidth);
		$("#contentLeft").css("left",leftPosition);
		$("#content").css("left","0px");
		ShowAfterSwipe();
		return; 	
	}

	function CalculateCurrentPage(directionParameter) {
        //here we have to check if we browse through active pages only, or trough all pages
		currentPage = currentPage+directionParameter;
		if (currentPage <0){
			currentPage = 0;
		}
		if (currentPage == totalPages){
			currentPage = totalPages-1;
		}
		return currentPage;
	}

	function TranslationLeft() {
		HideDuringSwipe();
		blockButton = 1;
	    $("#contentRight").show();
	    currentPage = CalculateCurrentPage(+1); 
	    animationValue = screenWidth*(-1);
	    $("#content").css("position", "fixed").animate({
	        left: animationValue,
	        top: 0
	    });    
	    $("#contentRight").css("position", "fixed").animate(
	    {
	        left: 0,
	        top: 0
	    },
	    {
	    	duration: animationSpeed-1, 
	    	queue: false,
	    	complete: function()
	    	{
	    		LoadPages(currentPage)
	    		}});
	}

	function TranslationRight() {
		HideDuringSwipe();
		blockButton = 1;
	    $("#contentLeft").show();
	    currentPage = CalculateCurrentPage(-1); 
	    animationValue = screenWidth;
	    $("#content").css("position", "fixed").animate({
	        left: screenWidth,
	        top: 0
	    },{duration: animationSpeed-1, queue: false});       
	    $("#contentLeft").css("position", "fixed").animate(
	    	{left:0,top: 0},
	    	{duration: animationSpeed, queue: false,complete: function(){LoadPages(currentPage)}});
	}

    ////////////////////////////////////////////////
    // animations in page 
    //
	function Show(elementID,delayTime, speedTime){
	    $(elementID).delay(delayTime).show(speedTime);
	}
	
	function Hide(elementID, delayTime,speedTime){
		$(elementID).delay(delayTime).hide(speedTime);
	}
	
	function SlideDown(elementID, delayTime, speedTime) {
		$(elementID).delay(delayTime).slideDown(speedTime);
	}
	
	function SlideUp(elementID, delayTime, speedTime){
		$(elementID).delay(delayTime).slideUp(speedTime);
	}
	
	function FadeIn(elementID, delayTime, speedTime) {
	    $(elementID).fadeTo(1, .01).delay(delayTime).show().fadeTo(speedTime, 1);
	}
	
	function FadeOut(elementID, delayTime, speedTime){
	    $(elementID).delay(delayTime).fadeTo(speedTime, .01);
	}
	
	function Animate(elementID, delayTime, speedTime, finalPositionLeft, finalPositionTop, easingOption, loopAnimation) {
	        $(elementID).css("position", "fixed").delay(delayTime).animate(
            {
                left: finalPositionLeft,
                top: finalPositionTop
            },
            {
                duration: speedTime,
                queue: false,
                easing: easingOption
            });
	    $(elementID).css("position", "absolute");
	}
	
	function HideDuringSwipe(){
		$(".toggleDuringSwipe").fadeTo(750,0.01);
		$(".popUp").fadeTo(750,0.01);
		$(".popUp").hide();
		$(".popUp").fadeTo(1,1);
	}
	
	function ShowAfterSwipe() {
		$(".toggleDuringSwipe").fadeTo(750,1);
		$(".toggleDuringSwipe").show();
	}
	
    // here we trigger the animations in the pages driven by the elements with triggers
	//here we trigger the popUp
	//showPopUp_0_1
	$(document).on("click", "[id^=trigger]", function(){
	    var dataAnimationsJSON = $(this).data("animations");
	    //console.log(dataAnimationsJSON);
	    ChooseAnimationFunction(dataAnimationsJSON);
	});
	
	//$("[id^=showPopUp]").on("touchclick", function(){
	$(document).on("touchclick", "[id^=trigger]", function(){
	    var dataAnimationsJSON = $(this).data("animations");
	    //console.log(dataAnimationsJSON);
	    ChooseAnimationFunction(dataAnimationsJSON);
	});

    // This function calls the right animation function based on data parameters
	function ChooseAnimationFunction(dataAnimationsJSON) {
	    $.each(dataAnimationsJSON, function () {
	        //console.log(this);
	        //console.log(this.page);
	        //console.log(this.elementsToAnimate);
	        //console.log(this.elementId);
	        switch (this.animationEffect) {
	            case "slideUp":
	                SlideUp("#" + this.elementId, parseInt(this.delayTime), parseInt(this.speedTime));
	                break;
	            case "slideDown":
	                SlideDown("#" + this.elementId, parseInt(this.delayTime), parseInt(this.speedTime));
	                break;
	            case "fadeIn":
	                FadeIn("#" + this.elementId, parseInt(this.delayTime), parseInt(this.speedTime));
	                break;
	            case "fadeOut":
	                FadeOut("#" + this.elementId, parseInt(this.delayTime), parseInt(this.speedTime));
	                break;
	            case "show":
	                Show("#" + this.elementId, parseInt(this.delayTime), parseInt(this.speedTime));
	                break;
	            case "hide":
	                Hide("#" + this.elementId, parseInt(this.delayTime), parseInt(this.speedTime));
	                break;
	            case "translate":
	                Animate("#" + this.elementId, parseInt(this.delayTime), parseInt(this.speedTime), parseInt(this.finalPositionLeft), parseInt(this.finalPositionTop), this.easingOption, parseInt(this.loopAnimation));
	                break;
	            default:
	                console.log("The required animation effect for the parameter " + this.animationEffect + " does not exist.");
	                console.log("The accepted parameters are: slideUp, slideDown, fadeIn, fadeOut, show, hide, animate");
	                break;
	        }
	    });
	}
});