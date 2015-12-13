$().ready(function(){
    $('#createPresentation').validate({
        rules:{
            presentationName:{
                required:true,
                minlength:3
            }
        },
        messages:{
            presentationName:{
                required:'The name of the presentation is required',
                minlength:'The length of the presentation name is too short'
            }
        }
    });       
});

