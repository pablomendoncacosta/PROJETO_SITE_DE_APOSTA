window.onscroll = function() {
    const barraInformacao = document.querySelector('.barra-informacao');
    if (window.pageYOffset > 50) { // Altere 50 para a posição desejada onde a barra deve ficar fixa
      barraInformacao.style.top = '0';
    } else {
      barraInformacao.style.top = '-40px'; // Esconde a barra acima da visualização
    }
  };
  var menu_configuracao = document.querySelector(".menu_configuracao")
  function configuracao_open(){
    if(menu_configuracao.style.display == "block"){
      menu_configuracao.style.display = "none"
    }else{
      menu_configuracao.style.display = "block"
    }
  }
  function configuracao_close(){
    if(menu_configuracao.style.display == "block"){
      menu_configuracao.style.display = "none"
    }else{
      menu_configuracao.style.display = "block"
      
    }
  }