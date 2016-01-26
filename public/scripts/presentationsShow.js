$(document).ready(function(){
    var defaultMenuLoad = "/slidesElements/indexText";
    var tokenValue = $("input[name=_token]").val(); 
    $.ajaxSetup({
      headers: {'X-CSRF-Token': tokenValue}
    });
    
    $( "#navigatorMenu" ).draggable({ 
        containment: "html", 
        scroll: false });
    
    function LoadMenu(clickedID){
        LoaderInNavigator();
        var getUrl = $('#'+clickedID).data('geturl');
        var functionToCallAfter = $('#'+clickedID).data('functiontocallafter');
        //console.log(functionToCallAfter);
        //alert();
        $.ajax({
            method: "GET",
            url: $('#baseURL').val() + getUrl,
            data: $('form#essentialData').serialize()
          })
            .done(function(screenContent) {
                LoaderRemoveFromNavigator();
                $('#innerMenuContent').html(screenContent);
                //window[functionToCallAfter]();
            });   
    }    
    
    function LoadIframe(){
        $('#slidesPreviewer').attr('src','http://localhost:10101/pfizerlaravel/public/filesGenerated/presentation_'+$('#presentationID').val()+'/index.html?page='+$('#pageNumber').val());
    }

    window.addEventListener( "message", function (e) {
        if(e.origin !== 'http://localhost:10101'){ 
            //console.log(e.origin);  
            return; } 
        //console.log(e.origin + ' - ' +e.data);
        if(e.data.indexOf("page=")>=0){
            var dataFromIFrame = e.data.split("&");
            //console.log(dataFromIFrame);
            $('#pageNumber').val(dataFromIFrame[0].replace('page=',''));
            $('#slideID').val(dataFromIFrame[1].replace('slideID=',''));
        }
    },
    false);    
    
    $(document).on('change','#pageNumber',function(){
        LoadIframe();
        $("#pageNumber").blur(); 
    });
    
    $(document).on("click",".actionButton",function(){
        var slideNumber = $('#pageNumber').val(); 
        var requestUrl = $('#'+this.id).data('requesturl');
        var redirectUrl = $('#'+this.id).data('redirecturl');
        var slidesElementID = 0;
        var paramToAppend = "";
        if (typeof $('#'+this.id).data('slideselementid') !== 'undefined') { 
            slidesElementID = $('#'+this.id).data('slideselementid');
        }
        if(slidesElementID>0){
            paramToAppend = '&slidesElementID='+slidesElementID;
        }
        $.ajax({
            method: "POST",
            url: $('#baseURL').val() + requestUrl,
            data: $('form#navigatorMenuForm').serialize()+"&"+$('form#essentialData').serialize()+"&redirectUrl="+ redirectUrl + paramToAppend
          })
            .done(function(screenContent) {
                LoadIframe();                
                $('#innerMenuContent').html(screenContent);
            }); 
    }); 
    
    $(document).on("click",".getButton",function(){
        var slideNumber = $('#pageNumber').val(); 
        var requestUrl = $('#'+this.id).data('requesturl');
        var redirectUrl = $('#'+this.id).data('redirecturl');
        var slidesElementID = 0;
        var paramToAppend = "";
        if (typeof $('#'+this.id).data('slideselementid') !== 'undefined') { 
            slidesElementID = $('#'+this.id).data('slideselementid');
        }
        if(slidesElementID>0){
            paramToAppend = '&slidesElementID='+slidesElementID;
        }
        $.ajax({
            method: "GET",
            url: $('#baseURL').val() + requestUrl,
            data: $('form#navigatorMenuForm').serialize()+"&"+$('form#essentialData').serialize()+"&redirectUrl="+ redirectUrl + paramToAppend
          })
            .done(function(screenContent) {
                LoadIframe();                
                $('#innerMenuContent').html(screenContent);
            }); 
    });
    
    $(document).on('click','[id$=Menu0]',function(){
        var dataHide = $('#'+this.id).data('hide');
        var dataShow = $('#'+this.id).data('show');
        SwitchMenu(dataHide, dataShow);
    });
    
    function SwitchMenu(dataHide, dataShow){
        $('#'+dataHide+'Editor').hide();
        $('#'+dataShow+'Editor').show();
        LoaderRemoveFromNavigator();        
    }
    
    $(document).on('click','.addSlideButton',function(){
        var desiredOption = $('#'+this.id).data('position'); 
        var functionToCall = $('#'+this.id).data('functiontocallafter');    
        $.ajax({
            method: "POST",
            url: $('#baseURL').val()+"/slides/store",
            data: $('form#essentialData').serialize()+ '&desiredOption='+desiredOption
          })
            .done(function(screenContent) {
                LoadIframe();   
                $('#innerMenuContent').html(screenContent);
                functionToCallAfter(functionToCall);                
            }); 
    });
    
    $(document).on('change','#cssClassID',function(){
        FillFormWithJSON('cssClassID');
    });
    
    function FillFormWithJSON(elementID){
        var postUrl = $('#'+elementID).data('posturl');
        var functionToCall = $('#'+elementID).data('functiontocallafter');   
         $.ajax({
            method: "POST",
            url: $('#baseURL').val()+ postUrl,
            data: $('form#essentialData').serialize()+ '&' + elementID + '=' + $('#'+elementID).val()
          })
            .done(function(responseJSON) {
                var returnedJSON = jQuery.parseJSON(responseJSON);
                functionToCallAfter(functionToCall,returnedJSON);                
            });       
    }    
    
    function functionToCallAfter(functionName,returnedJSON) {
        switch (functionName){
            case 'OpenNewCreatedSlide':{
                  var newSlideID = $('#newSlideID').val();  
                  $('#pageNumber').val(newSlideID);
                  LoadIframe();
                  SwitchMenu('presentations','slides');
                  return;
                } 
                break;
            case 'FillInPosXandV': {
                    $('#posLeft').val(returnedJSON.posX);
                    $('#posTop').val(returnedJSON.posV);
                    return;
                }
                break; 
            default:return;
        }
    };
    
    function LoaderInNavigator(){
        $('#innerMenuContent').addClass('loading');
    }
    function LoaderRemoveFromNavigator(){
        $('#innerMenuContent').removeClass('loading');
    }
    
    function readURL(input,imageID) {
        //console.log(input);
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            //console.log(reader);
            reader.onload = function (e) {
                //console.log(e.target.result);
                var fileLoaded = e.target.result; 
                //console.log(CheckFileType(fileLoaded.toString(),'img'));
                if (CheckFileType(fileLoaded.toString(),'img')==false){
                    InPageError($('#fileFormatError').val(),'#info','add');
                    return;
                }
                $(imageID).attr('src', fileLoaded);
                $('#inputFile').hide();
                $('#previewFile').removeClass('hidden');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(document).on('change',"[id^=uploadImage]", function(){
        var imageID= '#'+this.id+'Preview';
        InPageError($('#fileFormatError').val(),'#info','remove');
        readURL(this,imageID);
    });
    
    function CheckFileType(fileToParse,requiredType){
        var valToReturn = false;
        switch (requiredType){
            case 'img':
            case 'image':
            {
                var acceptedValues = ['image','img','jpeg','jpg','png','gif','ico'];
                for (i=0; i<acceptedValues.length; i++){
                    if (fileToParse.toLowerCase().indexOf('data:'+acceptedValues[i]) >= 0){
                        valToReturn = true;
                    }   
                }
            }
            break;
            default:break; 
        }
        return valToReturn;
    }
    
    var textBeforeError;
    function InPageError(text,destination,mode){
        if(mode=='add'){    
            textBeforeError = $(destination).text();
            $(destination).html(text);
            $(destination).addClass('errorField');}
        else{
            $(destination).html(textBeforeError);
            $(destination).removeClass('errorField');
        }
    }
    
    //form to upload the image 
    $(document).on('click','#saveImageToServer',function(){
        submitWithAjax();
    });
    
    function submitWithAjax(){
          //$("form#addImage").submit(function(){
            var formData = new FormData($("form#addImage")[0]);
            $.ajax({
                url: $('#baseURL').val()+'/slidesElements/addImagePost',
                type: 'POST',
                data: formData,
                async: false,
                success: function (screenContent) {
                    $('#innerMenuContent').html(screenContent);
                },
                cache: false,
                contentType: false,
                processData: false
            });
            return false;
    }

    
});
