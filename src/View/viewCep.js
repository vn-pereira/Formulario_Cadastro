// class para escrever os dados no input

class viewCep{
    constructor(){
        throw new Error("Não há necessidade de instância");
    }
    static enderecoCep(buscaDados) {/*passa para o metodo os dados da API*/
        let inputEstado = document.getElementById('inputEstado')
        inputEstado.value = buscaDados.uf;

        let inputCidade = document.getElementById('inputCidade')/*pegando as informações e jogando no campo input*/
        inputCidade.value = buscaDados.localidade; 

        let inputEndereco = document.getElementById('inputEndereco')
        inputEndereco.value = buscaDados.logradouro;

        let inputBairro = document.getElementById('inputBairro')
        inputBairro.value = buscaDados.bairro;
    }
}