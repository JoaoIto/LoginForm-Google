const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMissmatch",
];

const mensagensErro = {
    nome: {
        valueMissing: "Este campo não pode estar vazio!"
    },

    email: {
        valueMissing: "Este campo não pode estar vazio!",
        typeMismatch: "O campo digitado não é valido!"
    },

    senha: {
        valueMissing: "Este campo não pode estar vazio!",
        patternMissmatch: "O campo deve ter de 6 a 12 caracteres, números válidos!"
    }
}

function mostraMensagemErro(tipoDeInput, input){
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensErro[tipoDeInput][erro];
        };
    });
    let mensagem = "";
    return mensagem;
};