function funcaoCalcular(){
let nome= document.getElementById("inputA").value;
let ra= parseFloat(document.getElementById("inputB").value);
let nota1=parseFloat(document.getElementById("inputC").value);
let nota2=parseFloat(document.getElementById("inputD").value);
let nota3=parseFloat(document.getElementById("inputE").value);
let nota4=parseFloat(document.getElementById("inputF").value);
let me=parseFloat(document.getElementById("inputG").value);
let ma=(nota1 + nota2 * 2 + nota3 * 3 + nota4 * 4 + me )/11;
let conceito="";
let situacao="";
if(ma>=9.0){
    conceito="A"
}else if (ma>=7.5){
    conceito="B"
}else if(ma>=6.0){
    conceito="C"
}else if(ma>=4.0){
    conceito="D"
}else{
    conceito="E"
}

if(conceito==="A"||conceito==="B"||conceito==="C"){
    situacao="Aprovado"
}else{
    situacao="Reprovado"
}
document.getElementById("resp").innerHTML=ra;
document.getElementById("resp1").innerHTML=nome;
document.getElementById("resp2").innerHTML=nota1+""+ ","+ nota2 +""+","+ nota3 +""+","+ nota4 ;
document.getElementById("resp3").innerHTML=ma.toFixed(2);
document.getElementById("resp4").innerHTML=conceito;
document.getElementById("resp5").innerHTML=situacao;
}
