function funcaocalcular(){
    let valorA = parseFloat(document.getElementById("inputA").value);
    let valorB = parseFloat(document.getElementById("inputB").value);
    let valorC = parseFloat(document.getElementById("inputC").value);
    let delta = valorB**2 - 4*valorA*valorC;
    if(delta<=0){
        alert("Não possui raízes reais");
    }
    let raiz=Math.sqrt(delta);
    let soma1 = (-valorB - raiz)/ (2*valorA);
    let soma2 = (-valorB + raiz)/(2*valorA); 
    
    document.getElementById("resp1").innerHTML=soma1;
    document.getElementById("resp2").innerHTML=soma2;
    }
