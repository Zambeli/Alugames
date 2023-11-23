function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`)
    let imagem = jogoClicado.querySelector('.dashboard__item__img')
    let botao = jogoClicado.querySelector('.dashboard__item__button')
    
    if(botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar'
        imagem.classList.remove('dashboard__item__img--rented')
        } else {
        botao.textContent = 'Devolver'
        botao.classList.add('dashboard__item__button--return')
        imagem.classList.add('dashboard__item__img--rented')
    }
}
