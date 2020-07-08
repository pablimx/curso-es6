//Exercício 01

// class Usuario {
//   constructor(email, senha) {
//     this.email = email;
//     this.senha = senha;
//   }

//   isAdmin() {
//     return this.admin === true;
//   }
// }

// class Admin extends Usuario {
//   constructor(email, senha) {
//     super(email, senha);

//     this.admin = true;
//   }
// }

// const User1 = new Usuario("email@teste.com", "senha123");
// const Adm1 = new Admin("email@teste.com", "senha123");
// console.log(User1.isAdmin()); // false
// console.log(Adm1.isAdmin()); // true

//Exercício 02

// const usuarios = [
//   { nome: "Diego", idade: 23, empresa: "Rocketseat" },
//   { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
//   { nome: "Lucas", idade: 30, empresa: "Facebook" },
// ];

// const idades = usuarios.map(function (item) {
//   return item.idade;
// });

// console.log(idades);

// const trabalhadores = usuarios.filter(function (item) {
//   return item.empresa === "Rocketseat" && item.idade > 18;
// });

// console.log(trabalhadores);

// const google = usuarios.find(function (item) {
//   return item.empresa === "Google";
// });

// console.log(google);

// // const filtro = usuarios.map((usuario) => ({
// //   ...usuario,
// //   idade: usuario.idade * 2,
// // }));

// const filtro = usuarios
//   .map(function (usuario) {
//     return { ...usuario, idade: usuario.idade * 2 };
//   })
//   .filter(function (usuario) {
//     return usuario.idade <= 50;
//   });

// console.log(filtro);

// const calculo = usuarios
//   .map((usuario) => ({ ...usuario, idade: usuario.idade * 2 }))
//   .filter((usuario) => usuario.idade <= 50);

// console.log(calculo);

//Exercício 03

// const arr = [1, 2, 3, 4, 5];

// arr.map(function (item) {
//   return item + 10;
// });

// const arrow1 = arr.map(item => item + 10);
// console.log(arrow1);

// const usuario = { nome: 'Diego', idade: 23 };

// function mostraIdade(usuario) {
//   return usuario.idade;
// }

// mostraIdade(usuario);

// const mostraIdade = usuario => usuario.idade;

// const nome = "Diego";

// const idade = 23;

// function mostraUsuario(nome = "Diego", idade = 18) {
//   return { nome, idade };
// }

// mostraUsuario(nome, idade);
// mostraUsuario(nome);

// const mostraUsuario = (nome = "Diego", idade = "18") => ({ nome, idade });

// const promise = function () {
//   return new Promise(function (resolve, reject) {
//     return resolve();
//   });
// };

// const promise = () => new Promise((resolve, reject) => resolve());

// const empresa = {
//   nome: "Rocketseat",
//   endereco: {
//     cidade: "Rio do Sul",
//     estado: "SC",
//   },
// };

// const {
//   nome,
//   endereco: { cidade, estado },
// } = empresa;

// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

// function mostraInfo({ nome, idade }) {
//   return `${nome} tem ${idade} anos.`;
// }

// console.log(mostraInfo({ nome: "Diego", idade: 23 }));

// const arr = [1, 2, 3, 4, 5, 6];

// const [x, ...y] = arr;

// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]

// const usuario = {
//   nome: "Diego",
//   idade: 23,
//   endereco: {
//     cidade: "Rio do Sul",
//     uf: "SC",
//     pais: "Brasil",
//   },
// };

// const usuario2 = { ...usuario, nome: "Gabriel" };

// const usuario3 = {
//   ...usuario,
//   endereco: { ...usuario.endereco, cidade: "Lontras" },
// };

// console.log(usuario2);

// console.log(usuario3);

// const usuario = "Diego";
// const idade = 23;

// console.log("O usuário " + usuario + " possui " + idade + " anos");

// console.log(`O usuário ${usuario} possui ${idade} anos.`);

// const nome = "Diego";
// const idade = 23;
// // const usuario = {
// // nome: nome,
// // idade: idade,
// // cidade: 'Rio do Sul',
// // };

// const usuario = {
//   nome,
//   idade,
//   cidade: "Rio do Sul",
// };

// console.log(usuario);
