var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event) {

    event.preventDefault(); // Impede o envio do formulário

    
    var primeiroNome = document.getElementById("primeiroNome").value;
    var segundoNome = document.getElementById("segundoNome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    

    if (primeiroNome.trim() === "") {
        alert("Por favor, informe o Primeiro Nome.");
        return;
    }
    

    if (segundoNome.trim() === "") {
        alert("Por favor, informe o Segundo Nome.");
        return;
    }

    if (email.trim() === "") {

        alert("Por favor, informe o Email.");
        return;
    }

    if (senha.trim() === "") {
        alert("Por favor, informe a Senha.");
        return;
    }
    
    if (senha.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return;
    }
    
    if (confirmarSenha.trim() === "") {

        alert("Por favor, informe a Confirmação de Senha.");
        return;
    }
    
    if (senha !== confirmarSenha) {
        alert("A Senha e a Confirmação de Senha não correspondem.");
        return;
    }

    
    // Se todas as validações passaram, o formulário é válido
    alert("Formulário válido. Dados enviados com sucesso!");
    
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, etc.

});


