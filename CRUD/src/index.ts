interface Usuario {
    id: number;
    nome: string;
    idade: number;
  }
  
//rray para armazenar os usuários
const usuarios: Usuario[] = [];

//riar um novo usuário
function criarUsuario(id: number, nome: string, idade: number): void {
  const novoUsuario: Usuario = { id, nome, idade };
  usuarios.push(novoUsuario);
}

//ler um usuário existente
function lerUsuario(id: number): Usuario | undefined {
  return usuarios.find(usuario => usuario.id === id);
}

//atualizar um usuário existente
function atualizarUsuario(id: number, novosDados: Partial<Usuario>): void {
  const usuario = lerUsuario(id);
  if (usuario) {
    usuario.nome = novosDados.nome || usuario.nome;
    usuario.idade = novosDados.idade || usuario.idade;
  }
}

//deletar um usuário existente
function deletarUsuario(id: number): void {
  const indice = usuarios.findIndex(usuario => usuario.id === id);
  if (indice !== -1) {
    usuarios.splice(indice, 1);
  }
}