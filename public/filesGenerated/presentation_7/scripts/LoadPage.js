$(document).ready(function(){
	
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
	
	Jumper(ReadPageParameters('page'));
	
	function Jumper(pageNo){
		$("#ipad-slider").data('owlCarousel').jumpTo(pageNo); 
	}
	 
});