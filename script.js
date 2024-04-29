const inputMin = document.getElementById('min');
const inputMax = document.getElementById('max');
const btn = document.getElementById('btn-sorteio');
const resultado = document.getElementById('resultado-sorteio');

const validarDados = (min, max) => {

    if(min == '' || max == '') {
        resultado.textContent = 'Preencha todos os campos';
        return false;
    }

    if(min < 0 || max < 0) {
        resultado.textContent = 'Os valores devem ser positivos';
        return false;       
    }
    
    if(min === max) {
        resultado.textContent = 'Os valores não podem ser iguais';
        return false;
    }

} 

const sortear = () => {

    const minimo = Math.ceil(inputMin.value);
    const maximo =  Math.floor(inputMax.value);

    validarDados(minimo, maximo);

    if(validarDados) {

        const calculo = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        resultado.innerHTML = `Número sorteado: ${calculo}`;

    }

}

btn.addEventListener("click", sortear);
