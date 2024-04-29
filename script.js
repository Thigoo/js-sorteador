const inputMin = document.getElementById('min');
const inputMax = document.getElementById('max');
const btn = document.getElementById('btn-sorteio');
const resultado = document.getElementById('resultado-sorteio');

const validarDados = (min, max) => {

    if(min === '' || max === '') {
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

    return true;

} 

const sortear = () => {

    const minimo = Math.ceil(inputMin.value);
    const maximo =  Math.floor(inputMax.value);

    const dadosValidos = validarDados(minimo, maximo);

    if(dadosValidos) {

        const calculo = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        resultado.textContent = `Número sorteado: ${calculo}`;

    }

}

btn.addEventListener("click", sortear);
