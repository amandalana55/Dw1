function funcaocalcular() {
    let dog = parseFloat(document.getElementById("inputA").value) ||0;
    let bauru1 = parseFloat(document.getElementById("inputB").value) ||0;
    let bauru2 = parseFloat(document.getElementById("inputC").value) ||0;
    let hamburguer= parseFloat(document.getElementById("inputD").value) ||0;
    let cheeseburguer= parseFloat(document.getElementById("inputE").value) ||0;
    let refrigerante= parseFloat(document.getElementById("inputF").value) ||0;

    let total = (dog * 18.10) + 
                (bauru1 * 11.30) + 
                (bauru2 * 11.50) + 
                (hamburguer * 19.10) + 
                (cheeseburguer * 21.30) + 
                (refrigerante * 6.00);

    document.getElementById("resultado").innerText = total.toFixed(2);
}
