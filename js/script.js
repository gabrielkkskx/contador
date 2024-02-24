const botoes = $(".botao");

for (let i = 0; i < botoes.length; i++) {
    $(botoes[i]).click(function() {
        for (let j = 0; j < botoes.length; j++) {
            $(botoes[j]).removeClass('active');
        }
        $(this).addClass('active');
    });
}