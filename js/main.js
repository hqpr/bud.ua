/**
 * Created by alex on 12.03.15.
 */

$(document).ready(function(){

    $('.wish').on('click', function(){
        $(this).find('.wish-done').css('display', 'block');
    });

    $('#sm-mood').on('click', function(e){
        e.preventDefault();
        $('.sm-mood-menu').slideDown();
    });

    $('#call_registration').on('click', function(e){
        e.preventDefault();
        $('.registration').slideDown();
    });

});

