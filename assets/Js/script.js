$(document).ready(function () {
    $('#hamburguer').click(function() {
        $(".open").toggleClass("close")
        $('.list').toggle()
    })
})