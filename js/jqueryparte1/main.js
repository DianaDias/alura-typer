// $('ul').on("click", 'li', function(){
//   var texto = $(this).text();
//   alert(texto);
// });
function addTexto(){
$('#botao').on("click", function(){
  var campo = $('#campo-texto');
  var texto = campo.val();
  $('<li>').text(texto).addClass('classe-teste').appendTo('#ul');
  campo.val('');
});
}

function removeTexto() {
$('ul').on("dblclick",'li', function(){
  $(this).animate({"margin-left" : "+=100"}, function() {
    $(this).remove();
  });
});
}

function recebeDadosAjax() {
  $('#atualiza').on("click", function(){
    $.ajax({
      url: 'http://mirrorfashion.caelum.com.br/treinamentos',
      dataType: 'jsonp',
      success: function(retorno){
        if(retorno == '' || retorno == null){
          console.log('Nada foi retornado :(');
        } else {
        $.each(retorno.treinamentos, function(){
          var treinamento = this;
          alert(treinamento.nome);
        });
      }
      }
    });
  });
}
//972783552
