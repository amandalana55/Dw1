 function funcaoCalcular() {
    let peso = parseFloat(document.getElementById("inputA").value);
    let altura = parseFloat(document.getElementById("inputB").value);

    const resposta = document.getElementById("resposta");
    const mensagem = document.getElementById("mensagem");

    // Reset estilo
    mensagem.classList.remove("erro");

    // Validação
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        mensagem.innerText = "⚠️ Preencha todos os campos com valores válidos!";
        mensagem.classList.add("erro");
        resposta.innerText = "0";
        return;
    }

    // Converter cm para metros (opcional)
    if (altura > 3) {
        altura = altura / 100;
    }

    const imc = peso / (altura * altura);
    resposta.innerText = imc.toFixed(2);

    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else if (imc < 35) classificacao = "Obesidade grau I";
    else if (imc < 40) classificacao = "Obesidade grau II";
    else classificacao = "Obesidade grau III";

    mensagem.innerText = "Classificação: " + classificacao;

    // Limpar destaque
for (let i = 1; i <= 6; i++) {
    document.getElementById("l" + i).style.backgroundColor = "";
}

// Destacar linha correta
if (imc < 18.5) document.getElementById("l1").style.backgroundColor = "#ffcccc";
else if (imc < 25) document.getElementById("l2").style.backgroundColor = "#ccffcc";
else if (imc < 30) document.getElementById("l3").style.backgroundColor = "#fff3cd";
else if (imc < 35) document.getElementById("l4").style.backgroundColor = "#ffe0b2";
else if (imc < 40) document.getElementById("l5").style.backgroundColor = "#ffccbc";
else document.getElementById("l6").style.backgroundColor = "#ffab91";
}
