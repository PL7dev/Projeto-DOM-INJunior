const inputNota = document.getElementById("nota");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnCalcular = document.getElementById("btnCalcular");
const listaNotas = document.getElementById("listaNotas");
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

let notas = [];

function validarNota(valor) {
  if (valor === "") return "Por favor, insira uma nota";

  valor = valor.replace(",", ".");
  const nota = Number(valor);

  if (isNaN(nota) || nota < 0 || nota > 10) {
    return "A nota digitada é inválida, por favor, insira uma nota válida.";
  }

  return nota;
}

function adicionarNota() {
  mensagem.textContent = "";

  const valor = inputNota.value.trim();
  const nota = validarNota(valor);

  // Se a validação retornou string, é erro
  if (typeof nota === "string") {
    mensagem.textContent = nota;
    return;
  }

  notas.push(nota);

  const p = document.createElement("p");
  p.textContent = `A nota ${notas.length} é: ${nota}`;
  listaNotas.appendChild(p);

  inputNota.value = "";
  inputNota.focus();
}

function calcularMedia() {
  if (notas.length === 0) {
    mensagem.textContent = "Insira pelo menos uma nota antes de calcular a média.";
    return;
  }

  const soma = notas.reduce((total, n) => total + n, 0);
  const media = soma / notas.length;

  resultado.textContent = `A média é: ${media.toFixed(2)}`;
}

btnAdicionar.addEventListener("click", adicionarNota);
btnCalcular.addEventListener("click", calcularMedia);
inputNota.addEventListener("keypress", (e) => {
  if (e.key === "Enter") adicionarNota();
});