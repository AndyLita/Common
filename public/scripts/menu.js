$().ready(function(){
    $(document).on('mouseover','.menu',function(){
        $('.hidden').show();
    });
    
    $(document).on('mouseout','.menu',function(){
        $('.hidden').hide();
    });
});