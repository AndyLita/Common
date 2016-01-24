/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $(document).on('change','#marketID',function(){
        $.ajax({
            url: 'bringBrands',
            //headers: {'X-CSRF-TOKEN': token},
            type: 'POST',
            //dataType: 'json',
            data: {
                marketID : $('#'+this.id).val(), 
                optionSelected: 0,
                _token: $("input[name=_token]").val()
            },
            success: function(response) { 
                $('#divSelectBrandID').html(response);
            },
            error:function(err){
                console.log(err);
            }
        });
        $.ajax({
            url: 'bringLanguages',
            //headers: {'X-CSRF-TOKEN': token},
            type: 'POST',
            //dataType: 'json',
            data: {
                marketID : $('#'+this.id).val(), 
                optionSelected: 0,
                _token: $("input[name=_token]").val()
            },
            success: function(response) { 
                $('#divSelectLanguageID').html(response);
            },
            error:function(err){
                console.log(err);
            }
        });        
    });
});
  

