const nome1 = document.getElementById("nome-1");
const nome2 = document.getElementById("nome-2");
const nome3 = document.getElementById("nome-3");
const botao = document.getElementById("btn");
const infoBox = document.getElementById("info");
const infoName = document.getElementsByClassName("nome-info");

function exibirNomesPreenchidos() {
  if (
    nome1.value.length === 0 ||
    nome2.value.length === 0 ||
    nome3.value.length === 0
  ) {
    alert("preencha todos os campos");
  } else {
    infoBox.removeAttribute("hidden");
    infoName[0].innerText = nome1.value;
    infoName[1].innerText = nome2.value;
    infoName[2].innerText = nome3.value;
  }
}

botao.addEventListener("click", () => {
  exibirNomesPreenchidos();
});