function alterarStatus(id) {
    let gameClicado = document.getElementById(`livro-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        var confirmar = confirm(`Deseja devolver o livro ${nomeJogo.textContent}?`);
        if (confirmar) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
        } else {
            alert("Continue lendo, devolva quando possível.");
        }
    } else {
        var confirmar = confirm(`Deseja alugar o livro ${nomeJogo.textContent}?`);
        if (confirmar) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver';
            botao.classList.add('dashboard__item__button--return');
        } else {
            alert("A opção de aluguel deste título ainda poderá ser feita no futuro.");
        }
    }
    
  
}


alterarStatus();