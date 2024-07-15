const quantInput = document.getElementById('quant-input');
const aumentar = document.getElementById('aumentar');
const diminuir = document.getElementById('diminuir');

aumentar.addEventListener('click', () => {
    if (quantInput.value < 5) {
        quantInput.value = parseInt(quantInput.value) + 1;
    }
});

diminuir.addEventListener('click', () => {
    if (quantInput.value > 1) {
        quantInput.value = parseInt(quantInput.value) - 1;
    }
});