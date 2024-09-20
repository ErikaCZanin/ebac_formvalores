const form = document.getElementById('form-deposito');
const valorOrcacao = document.getElementById('orcacao');
const valorGastos = document.getElementById('gasto');
let formValido = false;

function valorTotal() {
  const orcacao = parseFloat(valorOrcacao.value);
  const gastos = parseFloat(valorGastos.value);
  return orcacao >= gastos;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const mensagemSucesso = `Montante de: <b>${valorOrcacao.value}</b> depositado para o cliente: <b>${valorGastos.value}</b>`;
  const mensagemErro = `O valor do <b>orçamento</b> precisa ser menor que o b>gasto real!</b>`;

  formValido = valorTotal();
  if (formValido) {
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    valorOrcacao.value = '';
    valorGastos.value = '';
  } else {
    valorGastos.classList.add('error');
    containerMensagemErro.innerHTML = mensagemErro;
  }
});

valorOrcacao.addEventListener('blur', function(e) {
  formValido = valorTotal();

  if (!formValido) {
    valorOrcacao.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  } else {
    valorOrcacao.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
    valorOrcacao.style.border = ''; 
  }
});
