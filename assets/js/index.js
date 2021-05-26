const areaDoCodigo = document.querySelector('.codeArea__texto');
const linguagem = document.querySelector('.dadosProjeto__estilos--linguagem');
const botao = document.querySelector('.codeArea__botao');

function mudaLinguagem() {
  const codigo = areaDoCodigo.querySelector('code');
  areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value} contenteditable="true" aria-label="true"></code>`;
  areaDoCodigo.firstChild.innerText = codigo.innerText;
}

linguagem.addEventListener("change", () => {
  mudaLinguagem();
});

botao.addEventListener("click", () => {
  const codigo = areaDoCodigo.querySelector('code');
  hljs.highlightBlock(codigo);
})