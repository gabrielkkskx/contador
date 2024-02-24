$(document).ready(function(){
    var botoes = $(".botao");

    botoes.click(function(){
        botoes.removeClass("active");
        $(this).addClass("active");
    });
});