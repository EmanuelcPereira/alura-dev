const cards = document.querySelector('.cards');
new (function () {
  mostraProjetos();
})();

function mostraProjetos() {
  if (localStorage.length === 0) {
    return;
  }
  let projetos = [];
  for (let i = 0; i < localStorage.length; i++) {
    projetos.push(JSON.parse(localStorage.getItem(i)));
  }
  projetos.forEach((projeto) => {
    cards.innerHTML += montaCard(projeto);
    const codigoHtml = cards.querySelector(`[data-id="${projeto.id}"]`)
    codigoHtml.querySelector('.card__preview').innerText = projeto.detalhesDoProjeto.codigo;
  });
}

function montaCard(projeto) {
  let cartao = `
    <div class="card" data-id="${projeto.id}">
        <div class="card__back">
          <div class="card__tela">
            <div class="card__botoes">
              <div class="card__botoes--red"></div>
              <div class="card__botoes--yellow"></div>
              <div class="card__botoes--green"></div>
            </div>
            <div class="card__texto">
              <code class="card__preview hljs" araia-label="editor" contenteditable="true"></code>
            </div>
          </div>
        </div>
        <div class="card__dadosProjeto">
          <h2 class="card__dadosProjeto--titulo">${projeto.detalhesDoProjeto.nome}</h2>
          <p class="card__dadosProjeto--descricao">${projeto.detalhesDoProjeto.descricao}</p>
        </div>
        <div class="card__infos">
          <div class="card__metadata">
            <div class="card__comments">
              <img src="assets/img/icons/comentario.svg" alt="Icone comentario" class="card__infos--comments">
              <p class="card__infos--coments-qtd">${9}</p>
            </div>
            <div class="card__curtidas">
              <img src="assets/img/icons/curtida.svg" alt="Icone de curtidas" class="card__infos--curtidas">
              <p class="card__infos--curtidas-qtd">${9}</p>
            </div>
          </div>
          <div class="card__infos--author">
            <img src="assets/img/emanuel02.png" alt="Foto Autor do código" class="card__infos--avatar">
            <p class="card__infos--username">@Emanuel</p>
          </div>
        </div>
    </div>
 `;

 return cartao;
}
