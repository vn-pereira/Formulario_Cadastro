// requisição para puxar os dados do CEP
let buscaDados = '';
class controllerCep {
    constructor(){
        throw new Error("Não há necessidade de instância");
    }
    static geraCep(){
        let dadosCep = new XMLHttpRequest();
        dadosCep.open("GET",`https://viacep.com.br/ws/21810260/json/`);
            console.log(dadosCep);
                
            
            dadosCep.addEventListener("load", ()=> {
            if(dadosCep.status == 200){
                let respostaCep = JSON.parse(dadosCep.responseText)
                    buscaDados = new ModelCep(respostaCep.uf, respostaCep.localidade, respostaCep.logradouro, respostaCep.bairro); 
                    console.log(buscaDados);
                    viewCep.enderecoCep(buscaDados.cepUsuario());
            }
        });
        dadosCep.send();
    }
} 


