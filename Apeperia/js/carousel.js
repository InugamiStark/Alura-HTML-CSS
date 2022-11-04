var btns = document.querySelectorAll('.listaDeArtigos-slider-item');

btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    })

    this.classList.add('listaDeArtigos-slider-item--ativo');
  })
})