$(document).ready(function(){
  $('#carousel-images').slick({
      autoplay:true
  })

  $('.menu-hamburguer').click(function(){
      $('nav').slideToggle()
  })

  $('#telefone').mask('(00) 00000-0000')

  $('form').validate({
      rules: {
          nome: {
              required: true,
          },
          telefone: {
              required: true,
          },
          email: {
              required: true,
              email:true
          },
          veiculoDeInteresse: {
              required: true,
          }
      }, messages: {
          nome: 'Preencha o campo nome',
          telefone: 'Preencha o campo telefone',
          email: 'Preencha o campo email',
          veiculoDeInteresse: 'Preencha este campo'
      },
      submitHandler: function(form) {
          console.log(form)
      },
      invalidHandler: function(evento, validador) {
          let camposIncorretos = validador.numberOfInvalids();
          if (camposIncorretos)
              alert(`Existem ${camposIncorretos} campos incorretos`)
      }
  })

  $('.lista-veiculos button').click(function(){
    const destino = $('#contato')

    const nomeVeiculo = $(this).parent().find('h3').text()

    $('#veiculo-interesse').val(nomeVeiculo)
    
    $('html').animate({
      scrollTop: destino.offset().top

    }, 1000)
  })

})