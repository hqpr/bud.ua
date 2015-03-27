/**
 * Created by alex on 12.03.15.
 */

$(document).ready(function(){

    $('.wish').on('click', function(){
        //$(this).find('.wish-done').css('display', 'block');
        $(this).find('.wish-done').fadeToggle();
    });

    $('#sm-mood').on('click', function(e){
        e.preventDefault();
        $('.sm-mood-menu').slideDown();
    });

    $('#call_registration').on('click', function(e){
        e.preventDefault();
        $('.registration').slideDown();
    });

    $('#collapse_xs_menu_on').on('click', function(e){
        e.preventDefault();
        $('#collapse_xs_menu').toggle();
    });

});

