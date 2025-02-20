function validaNome(nome) {
    const regexNome = /^[a-z,A-ZÀ-ÿ\s\-']+$/;
    const isvalid = nome.length >= 2 && regexNome.test(nome);
    return isvalid;
}

function validaEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isvalid = regexEmail.test(email);
    return isvalid;
}

function validaTelefone(telefone) {
    const regexTelefone = nothing//colocar
    const isvalid = regexTelefone.test(telefone);
    return isvalid;
}

export function validaUsuario(nome, email, telefone) {
    const nomeValido = validaNome(nome);
    const emailValido = validaEmail(email);
    const telefoneValido = validaTelefone(telefone);

    const usuarioValido = nomeValido && emailValido; //&& telefoneValido colocar quando a função estiver pronta

    if (usuarioValido) {
        return { status: true, mensagem: ""};
    } else {
        return { status: false, mensagem: 'Nome, email e/ou telefone inválido(s)'};
    }
}