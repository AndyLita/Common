$().ready(function(){
    $(document).on('mouseover','.menu',function(){
        $('.submenu').show();
    });
    
    $(document).on('mouseout','.menu',function(){
        $('.submenu').hide();
    });
});