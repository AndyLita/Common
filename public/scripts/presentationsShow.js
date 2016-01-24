$(document).ready(function(){
    var defaultMenuLoad = "/slidesElements/createText";
    var tokenValue = $("input[name=_token]").val();
    $.ajaxSetup({
      headers: {'X-CSRF-Token': tokenValue}
    });
    
    $( "#navigatorMenu" ).draggable({ 
        containment: "html", 
        scroll: false });
    
    //LoadMenu();
    
    $(document).on('click','[id^=slideMenu]',function(){
        var clickedID = this.id;
        console.log(clickedID);
        LoadMenu(clickedID);
    });
    
    function LoadMenu(clickedID){
        LoaderInNavigator();
        var getUrl = $('#'+clickedID).data('geturl');
        $.ajax({
            method: "GET",
            url: $('#baseURL').val() + getUrl,
            data: $('form#essentialData').serialize()
          })
            .done(function(screenContent) {
                LoaderRemoveFromNavigator();
                $('#innerMenuContent').html(screenContent);
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
    
    $(document).on("click","#saveButton",function(){
        var slideNumber = $('#pageNumber').val(); 
        var postUrl = $('#'+this.id).data('posturl');
        var redirectUrl = $('#'+this.id).data('redirectUrl');
        $.ajax({
            method: "POST",
            url: $('#baseURL').val() + postUrl,
            data: $('form#navigatorMenuForm').serialize()+"&"+$('form#essentialData').serialize()
          })
            .done(function(screenContent) {
                LoadIframe();                
                $('#innerMenuContent').html(screenContent);
            }); 
    });
    
    $(document).on('click','[id^=switchTo]',function(){
        var desiredSection = this.id.replace('switchTo-','');
        if(desiredSection=='slides'){
            $('#presentationsEditor').hide();
        }else{
            $('#slidesEditor').hide();
        }
        $('#'+desiredSection+'Editor').show();
    });
    
    $(document).on('click','[id^=addSlide-]',function(){
        var desiredOption = this.id.replace('addSlide-','');
        $.ajax({
            method: "POST",
            url: $('#baseURL').val()+"/slides/store",
            data: $('form#essentialData').serialize()+ '&desiredOption='+desiredOption
          })
            .done(function(screenContent) {
                LoadIframe();   
                $('#innerMenuContent').html(screenContent);
            }); 
    });
    
    function LoaderInNavigator(){
        $('#innerMenuContent').addClass('loading');
    }
    function LoaderRemoveFromNavigator(){
        $('#innerMenuContent').removeClass('loading');
    }
});
