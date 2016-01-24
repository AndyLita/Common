$().ready(function(){
    $('#createPresentation').validate({
        rules:{
            presentationName:{
                required:true,
                minlength:3
            },
            marketID:{
                required:true,
                min:1
            },
            brandID:{
                required:true,
                min:1
            },
            languageID:{
                required:true,
                min:1
            },
            description:{
                required:false
            }
        },
        messages:{
            presentationName:{
                required:'*',
                minlength:'?'
            },
            marketID: {
                required:'*',
                min:'*'
            },
            brandID:{
                required:'*',
                min:'*'
            },
            languageID:{
                required:'*',
                min:'*'
            },            
        }
    });       
});

