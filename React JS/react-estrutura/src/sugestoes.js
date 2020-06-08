//Para os if's
// ver se o numero é par e positivo 

// let numero = 21

// const resto = numero % 2
// const condicao1 = resto == 0
// const condicao2 = numero > 0

// if (condicao1 && condicao2) {
//     console.log(`Boa o numero ${numero} passou`)
// }
// else {
//     console.log(`para o ${numero} não rola`)
// }


// Criar funções gerenericas, assim fica apenas um ponto de manutenção 

const pessoas = [{ nome: 'a', idade: 18 }, { nome: 'b', idade: 18 }];


const tratarPelapropiedade = (obj, prop, valor)  => {return obj.filter(obj => obj[prop] === valor)}


const trataArrayPessoas = pessoas => {
  const pessoasComDezoitoAnos = tratarPelapropiedade(pessoas, 'idade', 18)
  console.log(pessoasComDezoitoAnos)
  const pessoasFiltradasPorNome = tratarPelapropiedade(pessoas, 'nome', 'a')
  console.log(pessoasFiltradasPorNome)

};


trataArrayPessoas(pessoas)

