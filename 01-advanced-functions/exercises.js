// 1. Crea una función que retorne a otra función
function greet(greeting) {
    return function (name) {
        return `${greeting}, ${name}`
    }
}

const greetFunction = greet("Hola")
console.log(greetFunction("Bryan"))

// 2. Implementa una función currificada que multiplique 3 números
function currying(a){
    return function(b){
        return function(c){
            return a * b * c
        }
    }
}
console.log(currying(3)(4)(5))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function recursive(num, exp){
    if (exp === 0){
        return 1
    }
    return num * recursive(num, exp-1)
}
console.log(recursive(5, 3))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(value){
    return {
        increment: function (){
            value++
        },
        decrement: function (){
            value--
        },
        getValue: function (){
            console.log(value)
        },
    }
}
const counter = createCounter(5)
counter.getValue()
counter.increment()
counter.increment()
counter.getValue()
counter.decrement()
counter.decrement()
counter.getValue()

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
    let result = 0
    for (let number of numbers){
        result += number
    }
    return result * multiplier
}
console.log(sumManyTimes(3, 1, 2, 3, 4, 5))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function addNumbers(callback, ...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    callback(result)
}

function resultFunction(result) {
    console.log(result)
}

addNumbers(resultFunction, 1, 2, 3)

// 7. Desarrolla una función parcial
function partialFunction(num1) {
    return function(num2, num3) {
        return (num1 + num2 + num3) / 3
    }
}
const prom = partialFunction(10)
console.log(prom(11, 12))

// 8. Implementa un ejemplo que haga uso de Spread
const names = ["Bryan", "Orlando", "Piero"]
function spreadFunction(name1, name2, name3) {
    return name1 +" "+ name2 +" "+ name3
}
console.log(spreadFunction(...names))

// 9. Implementa un retorno implícito
const pow = (num1, num2) => num1**num2
console.log(pow(2,3))

// 10. Haz uso del this léxico
const person = {
    name: "Bryan",
    hobbies: ["futbol", "programacion"],
    showHobbies: function() {
        console.log(`Hola ${this.name} mis hobbies son:`)
        this.hobbies.forEach(element => {
            console.log(`${element}`)
        });
    },
}
person.showHobbies()