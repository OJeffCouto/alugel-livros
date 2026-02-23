let contagemLivros = 0;

function contagem() {
    console.log(`Total de livros alugados ${contagemLivros}`)
}

function alterarStatus(id) {
    let livroClicado = document.getElementById(`livro-${id}`);
    let imagem = livroClicado.querySelector('.dashboard__item__img');
    let botao = livroClicado.querySelector('.dashboard__item__button');
    let nomeLivro = livroClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        var confirmar = confirm(`Deseja devolver o livro ${nomeLivro.textContent}?`);
        if (confirmar) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            contagemLivros--
        } else {
            alert("Continue lendo, devolva quando possível.");
        }
    } else {
        var confirmar = confirm(`Deseja alugar o livro ${nomeLivro.textContent}?`);
        if (confirmar) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver';
            botao.classList.add('dashboard__item__button--return');
            contagemLivros++
        } else {
            alert("A opção de aluguel deste título ainda poderá ser feita no futuro.");
        }
    }
    contagem()
}

document.addEventListener('DOMContentLoaded', function() {
    contagemLivros = document.querySelectorAll('.dashboard__item__img--rented').length;
    contagem();
})
