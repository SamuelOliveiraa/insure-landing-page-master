$(document).ready(function () {
    
    //I USED JQUERY TO SHOW AND HIDE THE MENU HAMBURGUER AND THE DIV WITH THE CLASS "LIST" FOR BIG SCREENS 

    $(window).resize(function() {
        var vpWidth = $(window).width();

        if( vpWidth <= 770 ){
            if($("#hamburguer").hasClass("close")){
                $('#hamburguer').removeClass('close')
                $("#hamburguer").addClass("open")
                $('.list').toggle()
            }else if ($("#hamburguer").hasClass("open")){
                $('#hamburguer').click(function() {
                    $(".open").toggleClass("close")
                    $('.list').toggle()
                })
            }
        }else if(vpWidth > 770){
            $("#hamburguer").addClass("close")
            $('.list').show()
        } 
    });

    //I USED JQUERY TO SMOOTH PAGE SCROLL
    $(function(){
        $('li a').click(function(event) {
            event.preventDefault(); 
            var href = $(this).attr('href'); 
            var offSetTop = $(href).offset().top; 
            $('html, body').animate({ 
                'scrollTop': offSetTop 
            }, 'slow'); 
        });
    });
})

