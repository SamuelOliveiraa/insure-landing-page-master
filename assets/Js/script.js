$(document).ready(function () {
    
    //I USED JQUERY TO SHOW AND HIDE THE MENU HAMBURGUER AND THE DIV WITH THE CLASS "LIST" FOR BIG SCREENS
    
    $(window).resize(function() {
        var vpWidth = $(window).width();
        if( vpWidth <= 770 ){
            $('#hamburguer').show()
            $('.list').hide()
            if($("#hamburguer").hasClass("close")){
                $('#hamburguer').removeClass('close')
                $("#hamburguer").addClass("open")
                $('.list').hide()
            }
        }else if(vpWidth > 770){
            $('#hamburguer').hide()
            $('.list').show()
        }
    });

    $('#hamburguer').click(function() {
                
        $(".open").toggleClass("close")
        $('.list').toggle()
    
    })

    


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



/* else if(vpWidth > 770){
            $("#hamburguer").addClass("close")
            $("#hamburguer").hide()
            $('.list').show()
        }  */