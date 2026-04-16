let pontosA = 0;
let pontosB = 0;
const pontuacaoVitoria = 10; // Pontos para vencer
const mensagem = document.getElementById("mensagem");

function atualizarPlacar() {
    const nomeTimeA = document.getElementById("nomeA").value || "Time A";
    const nomeTimeB = document.getElementById("nomeB").value || "Time B";

    document.getElementById("placarA").innerText = pontosA;
    document.getElementById("placarB").innerText = pontosB;

}

function adicionarPonto(time) {
    if (time === 'A') pontosA++;
    else if (time === 'B') pontosB++;

    atualizarPlacar();
}

function subtrairPonto(time) {
    if (time === 'A' && pontosA > 0) pontosA--;
    else if (time === 'B' && pontosB > 0) pontosB--;

    atualizarPlacar();
}

function resetarTudo() {
    pontosA = 0;
    pontosB = 0;
    document.getElementById("nomeA").value = "";
    document.getElementById("nomeB").value = "";
    mensagem.innerText = "";
    atualizarPlacar();
}
