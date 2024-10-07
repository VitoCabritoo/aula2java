// IMC = PESO/(ALTURA*ALTURA)

// - Abaixo de 17 - Muito abaixo do peso
// - Entre 17 e 18,49 - Abaixo do peso
// - Entre 18,50 e 24,99 - Peso normal
// - Entre 25 e 29,99 - Acima do peso
// - Acima de 30 - Obesidade

var peso;
var altura;
var imc;
var resultado;

//1 recebendo o evento
function calcular(event){
        //refresh dos imputs

        event.preventDefault();
        //alert('Teste');
        
        //recebendo os dados digitados pelo usuário
        peso = document.getElementById('peso').value;
        altura = document.getElementById('altura').value;

        //calculo do imc
        imc = peso/(altura*altura);

        //testando a recepção dos valores de peso e altura
        // testando calculo de imc
        console.log(peso);
        console.log(altura);
        console.log(imc);

        resultado = document.getElementById('resultado');
        if(imc<17){
            resultado.innerHTML = '</br> Seu resultado foi: '+imc.toFixed(2)+'</br>Cuidado, você está muito abaixo do seu peso'
        }
}