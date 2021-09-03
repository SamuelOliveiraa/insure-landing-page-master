$(document).ready(function () {
    
    //I USED JQUERY TO SHOW AND HIDE THE MENU HAMBURGUER AND THE DIV WITH THE CLASS "LIST" FOR BIG SCREENS
    
    var vpWidth = $(window).width();

    $('#hamburguer').show()
    $('#hamburguer').removeClass('close')
    $('.list').hide()

    if(vpWidth >= 720){
        $('#hamburguer').hide()
        $('.list').show()
    }else{
        $('#hamburguer').show()
        $('.list').hide()

        $('#hamburguer').click(function() {
            $('#hamburguer').toggleClass('close')
            $('.list').toggle()
        })
    }
    
    $(window).resize(function() {
        let vpWidth = $(window).width();

        $('#hamburguer').show()
        $('#hamburguer').removeClass('close')
        $('.list').hide()

        if(vpWidth > 720){
            $('#hamburguer').hide()
            $('.list').show()
        }else{
            $('#hamburguer').show()
            $('.list').hide()
    
            $('#hamburguer').click(function() {
                $('#hamburguer').toggleClass('close')
                $('.list').toggle()
            })
        }
    });
    $("#li4").hover(function() {
            
            $(this).css('background', 'black');
            $('#link4').css('color', 'white')
    },
        function(){
            //Ao remover o cursor da div
            $(this).css('background', 'white');
            $('#link4').css('color', 'black')
        }
    );

    $('nav ul li a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });
})