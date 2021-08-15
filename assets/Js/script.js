$(document).ready(function () {
    
    //I USED JQUERY TO SHOW AND HIDE THE MENU HAMBURGUER AND THE DIV WITH THE CLASS "LIST" FOR BIG SCREENS
    
    var vpWidth = $(window).width();

    $('#hamburguer').click(function() {
        $("#hamburguer").toggleClass("close")
        $('.list').toggle()
    })
    
    $(window).resize(function() {
        if(vpWidth > 770){
            $('#hamburguer').toggleClass()
            $('.list').show()
        }else if( vpWidth <= 770 ){
            $('#hamburguer').toggleClass()
            $('.list').hide()
        }
    });

    

    //I USED JQUERY TO SMOOTH PAGE SCROLL
    /*$(function(){
        $('li a').click(function(event) {
            event.preventDefault(); 
            var href = $(this).attr('href'); 
            var offSetTop = $(href).offset().top; 
            $('html, body').animate({ 
                'scrollTop': offSetTop 
            }, 'slow'); 
        });
    });*/
})