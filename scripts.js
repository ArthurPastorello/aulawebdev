/*
console.log('hello world')
console.info("info")
console.warn("warning")
console.error("error")

console.table(
    [
        { id: 1, tarefa: "estudar" },
        { id: 2, tarefa: "praticar codigo" },

    ])
console.group("grupo de logs")
console.log('log 1')
console.log('log 2')
console.groupEnd()

console.time('timer')
if (1 == 2) {
    console.log('nao')
}
console.timeEnd('timer')

// comentario de 1 linha
/*
comentario de varias linhas


let variavelMutavel = 'valor que pode ser alterado'
const variavelImutavel = 'valor que nao pode ser alterado diretamente'

variavelMutavel = 1
console.log(variavelMutavel)
*/

// tipos de dados basicos
/*
let texto = 'texto'
console.log(typeof texto)
let numero = 0
console.log(typeof numero)
let isCompleted = false
console.log(typeof isCompleted)
let semValor
console.log(typeof semValor)
let nulo = null
console.log(typeof nulo)
let uniqueId = Symbol('id')
console.log(typeof uniqueId)
let bigNumero = 999999999999999999999999999n
console.log(typeof bigNumero)
*/

// tipos de dados complexos

let tarefa = [
     {id: 1, tarefa: 'estudar'},
 ]
 console.log(tarefa)
 console.log(tarefa.id)
 console.log(tarefa.tarefa)

let tasks= [
    { id: 1, tarefa: "estudar" },
        { id: 2, tarefa: "praticar codigo" },
]
console.log(tasks)
console.log(tasks[0])
console.log(tasks[0]['id'])

let hoje = new Date('2025-03-20')
console.log(hoje)

let pattern = /^[a-z]+$/i;
console.log(pattern)