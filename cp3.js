// validação dos usuario 

let listaDeUsuarios = [

    { 

        nome: "renato",
        segundonome: "atanes",
        email:"rm552029",
        senha:"123456",
        confirmacaosenha:"123456"
        

     
    }
];

localStorage.setItem("listaUser" ,JSON.stringify(listaDeUsuarios));

const toggleDarkModeInput = document.getElementById('toggleDarkMode');
const body = document.body;

toggleDarkModeInput.addEventListener('change', function() {
  if (toggleDarkModeInput.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});






