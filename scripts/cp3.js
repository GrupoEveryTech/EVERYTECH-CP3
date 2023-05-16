var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var primeiroNome = document.getElementById("primeiroNome").value;
    var segundoNome = document.getElementById("segundoNome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    
    if (primeiroNome === "") {
        alert("Por favor, informe o Primeiro Nome.");
        return;
    }
    
    if (segundoNome === "") {
        alert("Por favor, informe o Segundo Nome.");
        return;
    }
    
    if (email === "") {
        alert("Por favor, informe o Email.");
        return;
    }
    
    if (senha === "") {
        alert("Por favor, informe a Senha.");
        return;
    }

    if (senha.length < 8) {
        alert("A Senha deve ter pelo menos 8 caracteres.");
    }
    
    if (confirmarSenha === "") {
        alert("Por favor, informe a Confirmação de Senha.");
        return;
    }
    
    if (senha !== confirmarSenha) {
        alert("A Senha e a Confirmação de Senha não correspondem.");
        return;
    }
    alert("Formulário válido. Dados enviados com sucesso!");
});
