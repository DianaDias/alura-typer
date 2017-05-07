
$('.btn-placar').click(mostraPlacar);

$('.btn-restore').click(reiniciaContagem);

function mostraPlacar() {
  //poderia usar o toggle() para mostrar e ocultar tb mais o slideDown faz a transição mais suave
  $(".placar").slideToggle(1000);
}

//HABILITA O CAMPO TEXTAREA, REMOVE CLASSE E LIMPA O CAMPO
function reiniciaContagem() {
  $(".retangulo").val('').attr("disabled", false).removeClass("campo-texto-bloqueado") ;
}
//DESABILITA O CAMPO TEXTAREA E INSERI CLASSE
$(document).keypress(function(e) {
  if(e.which == 13){
    $('.retangulo').attr("disabled", true).addClass("campo-texto-bloqueado");
  }
});
