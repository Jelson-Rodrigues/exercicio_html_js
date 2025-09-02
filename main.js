document.addEventListener('DOMContentLoaded', (event) => {
    const comparadorForm = document.getElementById('formulario');
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const mensagem = document.getElementById('message');
    const validarBtn = document.getElementById('btn-enviar');

    comparadorForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    validarBtn.addEventListener('click', () => {
        const valorA = parseFloat(campoA.value);
        const valorB = parseFloat(campoB.value);

        if (isNaN(valorA) || isNaN(valorB)) {
            mensagem.textContent = 'Por favor, preencha ambos os campos com números.';
            mensagem.classList.remove('message');
            mensagem.classList.add('erro');
            return;
        }

        if (valorB > valorA) {
            mensagem.textContent = 'Sucesso! O valor do Campo B é maior que o do Campo A.';
            mensagem.classList.remove('erro');
            mensagem.classList.add('message');
        } else {
            mensagem.textContent = 'Aviso! O valor do Campo B deve ser maior que o Do Campo A.';
            mensagem.classList.remove('message');
            mensagem.classList.add('erro');
        }
    });
});