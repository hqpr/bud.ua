/**
 * Created by alex on 12.03.15.
 */

$(document).ready(function(){

    $('#bud-party').on('click', function(e){
        e.preventDefault();
        $('.mood2').slideDown('fast');
    });

    $('#mood-strongly').on('click', function(e){
        e.preventDefault();
        $('.mood1').slideDown('fast');
    });
});

