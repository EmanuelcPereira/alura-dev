//highlith de código digitado
const areaDoCodigo = document.querySelector(".codeArea__texto");
const linguagem = document.querySelector(".dadosProjeto__estilos--linguagem");
const botao = document.querySelector(".codeArea__botao");

function mudaLinguagem() {
  const codigo = areaDoCodigo.querySelector("code");
  areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value} contenteditable="true" aria-label="true"></code>`;
  areaDoCodigo.firstChild.innerText = codigo.innerText;
}

linguagem.addEventListener("change", () => {
  mudaLinguagem();
});

botao.addEventListener("click", () => {
  const codigo = areaDoCodigo.querySelector("code");
  hljs.highlightElement(codigo);
});

//cor de fundo do editor
const areaColor = document.querySelector(".codeArea__back");
const selectedColor = document.querySelector(".dadosProjeto__estilos--cor");

selectedColor.addEventListener("input", () => {
  areaColor.style.backgroundColor = selectedColor.value;
});

//captura de dados para salvar no localstorage
const nomeProjeto = document.querySelector(".dadosProjeto__infos--nome");
const descricaoProjeto = document.querySelector(
  ".dadosProjeto__infos--descricao"
);
const codigoDigitado = document.querySelector("code");
const btnSalvar = document.querySelector(".dadosProjeto__botao");

function salvaProjeto() {
  let dadosProjeto = {
    'id': atribuiId(),
    'detalhesDoProjeto': {
      'nome': nomeProjeto.value,
      'descricao': descricaoProjeto.value,
      'linguagem': linguagem.value,
      'codigo': codigoDigitado.innerText,
      'cor': selectedColor.value,
    },
  };
  localStorage.setItem(dadosProjeto.id, JSON.stringify(dadosProjeto));
}

btnSalvar.addEventListener("click", () => {
  salvaProjeto();
});

function atribuiId() {
    return localStorage.length

}
