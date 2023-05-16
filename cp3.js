function validarSenha() {
    var senha = document.getElementById("senha").value;

    if (senha.length >= 8) {
        console.log("Senha válida!");
    } else {
        console.log("A senha deve ter pelo menos 8 caracteres.");
    }
}
