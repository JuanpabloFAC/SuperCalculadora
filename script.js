let soma = document.getElementById('soma');
let subtracao1 = document.getElementById('subtracao1');
let subtracao2 = document.getElementById('subtracao2');
let multiplicacao = document.getElementById('multiplicacao');
let divisao1 = document.getElementById('divisao1');
let divisao2 = document.getElementById('divisao2');
let potencia1 = document.getElementById('potencia1');
let potencia2 = document.getElementById('potencia2');
let raiz1 = document.getElementById('raiz1');
let raiz2 = document.getElementById('raiz2');
let fatorial1 = document.getElementById('fatorial1');
let fatorial2 = document.getElementById('fatorial2');
let porcentagem1 = document.getElementById('porcentagem1');
let porcentagem2 = document.getElementById('porcentagem2');
let media = document.getElementById('media');


soma.innerHTML = 0;
subtracao1.innerHTML = 0;
subtracao2.innerHTML = 0;
multiplicacao.innerHTML = 0;
divisao1.innerHTML = 0;
divisao2.innerHTML = 0;
potencia1.innerHTML = 0;
potencia2.innerHTML = 0;
raiz1.innerHTML = 0;
raiz2.innerHTML = 0;
fatorial1.innerHTML = 0;
fatorial2.innerHTML = 0;
porcentagem1.innerHTML = 0;
porcentagem2.innerHTML = 0;
media.innerHTML = 0;





function calcularSoma(a,b){
    return a+b
}

function calcularSubtracao(a, b){
    return a-b
}

function CalcularMultiplicacao(a,b){
    return a*b
}

function div(a, b){
    return a/b
}

function CalcularPotencia(a,b){
     return a**b
}

function CalcularRaiz(a){
    return Math.sqrt(a).toFixed(2)
}

 function CalcularFatorial(a){
     var fatorial1 = 1
     for (let i = 1; i <= a; i++) {
         fatorial1 = fatorial1 * (i)
     }
     return fatorial1
}

 function CalcularPorcentagem(a,b){
     return (b*100)/a 
 }

 function CalcularMedia(a,b){
     return (a+b)/2
 }


const calcular = () => {
        let inputA = document.getElementById('primeiroNumero').value
        let inputB = document.getElementById('segundoNumero').value

        let a = parseFloat(inputA)
        let b = parseFloat(inputB)

        soma.innerHTML = calcularSoma(a, b)
        subtracao1.innerHTML = calcularSubtracao(a,b)
        subtracao2.innerHTML = calcularSubtracao(b,a)
        multiplicacao.innerHTML = CalcularMultiplicacao(a,b)
        divisao1.innerHTML = div(a,b).toFixed(2)
        divisao2.innerHTML = div(b,a).toFixed(2)
        potencia1.innerHTML = CalcularPotencia(a,b);
        potencia2.innerHTML = CalcularPotencia(b,a);
        raiz1.innerHTML = Math.sqrt(a).toFixed(2);
        raiz2.innerHTML = Math.sqrt(b).toFixed(2);
        fatorial1.innerHTML = CalcularFatorial(a)
        fatorial2.innerHTML = CalcularFatorial(b)
        porcentagem1.innerHTML = CalcularPorcentagem(a,b).toFixed(0);
        porcentagem2.innerHTML = CalcularPorcentagem(b,a).toFixed(2);
        media.innerHTML = CalcularMedia(a,b)
}