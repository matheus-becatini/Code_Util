const array = [1, 3, 4, 5, 6, 7]
console.log(`O array inicial é: ${array}`)

console.log('Usando o MAP: ')
//MAP (Percorre todo a estrutura de dados e executa alguma tarefa com cada item)
const newArray = array.map((item, index) => `O item ${index} x2 = ${item*2}`)
console.log(newArray)

console.log('Usando o Reduce: ')
//Retorna uma unica string 
console.log(newArray.reduce((acumulador, next)=> acumulador+' '+next))

//Reduce - reduz todo a estrutura de dados em um unico item
const soma = array.reduce((acumulador, prox) => acumulador + prox)
console.log(soma)

console.log('Usando o Filter: ')
//Filter - filtra todos os itens que satisfação o requisito
const arrFiltrado = array.filter(item => {
    return item%2 === 0
})
console.log(arrFiltrado)

console.log('Usando o Find: ')
//Find - encontra um item no array 
const numero3 = array.find(item => item === 3)
console.log(numero3)

console.log('--------------------------------------------------------------------')
//Desestruturação de objetos 
//Operador Rest 

console.log('Usando os operadores Rest e Spread')
const obj = {
    nome: 'Fulano',
    idade: 20,
    endereco: {
        rua: 'Rua tal',
        numero: 100
    },
    caminhar: () => console.log('Caminhando ...')
}

function mostrarInfo ({ nome, idade, ...resto }){
    console.log(`${nome} tem ${idade} anos`)
    console.log(`Mais informações:`)
    console.log(resto.endereco)
    resto.caminhar()
}
mostrarInfo(obj)

function receber (...parametros){
   console.log(parametros)
}
receber(obj.nome, obj.idade)

//Operador Spread

const obj2 = {...obj, pular: () => console.log('Pulando ...'), nome: 'outra pessoa'}
mostrarInfo(obj2)
obj2.pular()