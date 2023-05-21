// validação dos usuario 

let listaDeUsuarios = [

    { 

        nome: "oi",
        segundonome: "eae",
        email:"rmoieae@fiap.com.br",
        senha:"123456",
        confirmacaosenha:"123456"
        

     
    }
];

localStorage.setItem("listaUser" ,JSON.stringify(listaDeUsuarios));


   //USUÁRIO QUE VEM DO FORMULARIO 


   const usuarioLogado = {
     
    nomeUsuarioLogado : userInput.value,
    segundonomeUsuariologado: SeguserInput.value,
    emailUsuariologado: emailInput.value,
    senhaUsuarioLogado: passInput.value,
    confirmaçãosenhaLogado: confirmpass.value
 
}

let usuarioValidado = {};

let listaDeUsuariosRecuperada = JSON.parse(localStorage.getItem("listaUser"));

if(evento.target.id == "btnSubmit"){

try{
        listaDeUsuariosRecuperada.forEach((usuario)=>{

            if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && usuarioLogado. segundonomeUsuariologado == usuario.segundonomeUsuario && 
                usuarioLogado.emailUsuariologado == usuario.emailUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario && usuarioLogado. confirmaçãosenhaLogado == usuario.confirmacaosenhaUsuario){

                usuarioValidado = usuario;
                throw "USUÁRIO VALIDADO!";
            }
        });

        throw "USUÁRIO OU SENHA INCORRETOS!";

    }catch(msg){

     const msgStatus = document.querySelector("#info");

     if(msg == "USUÁRIO VALIDADO!"){
        //Criar uma msg para o usuário
        msgStatus.setAttribute("style","color:#00ff00");
        msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} realizou o login com SUCESSO!!</strong></span>`


     

    }else {
    //Criar uma msg para o usuário
    msgStatus.setAttribute("style","color:#ff0000");
    msgStatus.innerHTML = `<span><strong>Nome de usuário ou senha inválidos...</strong></span>`
}


    }
}
