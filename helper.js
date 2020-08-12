//chamando a função de click fora

let cep = document.getElementById('inputCep');
cep.addEventListener("change", ()=>{
    controllerCep.geraCep();   
})
