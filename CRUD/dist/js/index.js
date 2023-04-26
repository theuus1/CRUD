"use strict";
//rray para armazenar os usuários
const usuarios = [];
//riar um novo usuário
function criarUsuario(id, nome, idade) {
    const novoUsuario = { id, nome, idade };
    usuarios.push(novoUsuario);
}
//ler um usuário existente
function lerUsuario(id) {
    return usuarios.find(usuario => usuario.id === id);
}
//atualizar um usuário existente
function atualizarUsuario(id, novosDados) {
    const usuario = lerUsuario(id);
    if (usuario) {
        usuario.nome = novosDados.nome || usuario.nome;
        usuario.idade = novosDados.idade || usuario.idade;
    }
}
//deletar um usuário existente
function deletarUsuario(id) {
    const indice = usuarios.findIndex(usuario => usuario.id === id);
    if (indice !== -1) {
        usuarios.splice(indice, 1);
    }
}
