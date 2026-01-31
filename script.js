const inputNota = document.getElementById("nota");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnCalcular = document.getElementById("btnCalcular");
const listaNotas = document.getElementById("listaNotas");
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

let notas = [];

btnAdicionar.addEventListener("click", () => {
  mensagem.textContent = "";

  let valor = inputNota.value.trim();

  if (valor === "") {
    mensagem.textContent = "Por favor, insira uma nota";
    return;
  }

  valor = valor.replace(",", ".");
  let nota = Number(valor);

  if (isNaN(nota) || nota < 0 || nota > 10) {
    mensagem.textContent = "A nota digitada é inválida, por favor, insira uma nota válida.";
    return;
  }

  notas.push(nota);

  const p = document.createElement("p");
  p.textContent = nota;
  listaNotas.appendChild(p);

  inputNota.value = "";
  inputNota.focus();
});

btnCalcular.addEventListener("click", () => {
  if (notas.length === 0) {
    mensagem.textContent = "Insira pelo menos uma nota antes de calcular a média.";
    return;
  }

  const soma = notas.reduce((total, n) => total + n, 0);
  const media = soma / notas.length;

  resultado.textContent = `A média é: ${media.toFixed(2)}`;
});