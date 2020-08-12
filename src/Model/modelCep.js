// classe CEP
class ModelCep {
    constructor(localidade, uf, logradouro, bairro){
        this._localidade = localidade;
        this._uf = uf;
        this._logradouro = logradouro;
        this._bairro = bairro;
    }

    cepUsuario(){
        return{
           localidade: this._localidade,
           uf: this._uf, 
           logradouro: this._logradouro,
           bairro: this._bairro,
        };
    };
};
