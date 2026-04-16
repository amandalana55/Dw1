function funcaocalcular(){
let veiculo= document.getElementById("inputVEICULO").checked;
let cliente= document.getElementById("inputCLIENTE").checked;
let datadeentrada= new Date(document.getElementById("inputCHEGADA").value);
let datadesaida= new Date(document.getElementById("inputSAIDA").value);
let diffMs= datadesaida - datadeentrada;
let horasEst= Math.ceil(diffMs / (1000 * 60 * 60));
let horasinicial= 5;
let horaadd= 2.50;
let tarifa= horasinicial + ((horasEst -1)* horaadd);

if (veiculo){
  tarifa= tarifa * 1.25;
} 

if (cliente){
   tarifa= tarifa * 0.95;
}

document.getElementById("resp").innerHTML = `Total de horas: ${horasEst}h | Valor: R$ ${tarifa.toFixed(2)}`;
}
