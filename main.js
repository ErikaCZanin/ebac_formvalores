const form = document.getElementById('form-deposito');
const valorOrcacao = document.getElementById('orcacao');
const valorGastos = document.getElementById('gasto');

function valorTotal() {
  const orcacao = parseFloat(valorOrcacao.value);
  const gastos = parseFloat(valorGastos.value);
  return orcacao > gastos; // Verifica se o orçamento é maior que os gastos
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const mensagemSucesso = `Montante de: <b>${valorOrcacao.value}</b> depositado para o cliente: <b>${valorGastos.value}</b>`;
  const mensagemErro = `O valor do <b>gasto real</b> precisa ser menor que o <b>orçamento!</b>`;
  
  const formValido = valorTotal();
  
  const containerMensagemSucesso = document.querySelector('.sucess-message');
  const containerMensagemErro = document.querySelector('.error-message');

  // Limpa mensagens anteriores
  containerMensagemSucesso.innerHTML = '';
  containerMensagemErro.innerHTML = '';

  if (formValido) {
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';
    
    valorOrcacao.value = '';
    valorGastos.value = '';
    containerMensagemErro.style.display = 'none'; 
  } else {
    containerMensagemErro.style.display = 'block'; 
  }
});

valorOrcacao.addEventListener('blur', function(e) {
  const formValido = valorTotal();

  if (!formValido) {
    valorOrcacao.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  } else {
    valorOrcacao.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
    valorOrcacao.style.border = ''; 
  }
});
