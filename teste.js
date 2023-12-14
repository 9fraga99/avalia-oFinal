function enviarFormulario() {
    // Verifica se os campos estão preenchidos
    var nome = document.querySelector('input[name="campo[Nome]"]').value.trim();
    var email = document.querySelector('input[name="campo[E-mail]"]').value.trim();
    var mensagem = document.querySelector('textarea[name="campo[Mensagem]"]').value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        alert('Preencha todos os campos!');
    } else {
        // Limpa os campos
        document.querySelector('input[name="campo[Nome]"]').value = '';
        document.querySelector('input[name="campo[E-mail]"]').value = '';
        document.querySelector('textarea[name="campo[Mensagem]"]').value = '';

        // Exibe o alerta de sucesso
        alert('Dados salvos com sucesso.  Desta vez mereço um dez né sora!');
    }
}