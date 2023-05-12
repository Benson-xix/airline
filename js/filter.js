$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        var filter = $(this).attr('id');
        if($(this).prop('checked')){
            $('.'+filter).show();
        } else {
            $('.'+filter).hide();
        }
    });
});