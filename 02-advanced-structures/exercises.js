// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let arrayPrices = [30, 45, 50, 63, 80]

let discountPrice = arrayPrices.map(element => element * 0.3)
console.log(discountPrice)

let arrayNames = ["Bryan", "Orlando", "Roberto", "Piero", "Kevin"] 
let lengthNames = arrayNames.filter(element => element.length > 5)
console.log(lengthNames)

let arrayWords = ["El " ,"secreto " ,"de ", "salir ", "adelante ", "es ","empezar"]
let phrase = arrayWords.reduce((previous, current) => previous + current, "")
console.log(phrase)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArrayNumbers = arrayNumbers.map(element => element ** 3)
let evenNumbers = newArrayNumbers.filter(element => element % 2 === 0)
console.log(evenNumbers)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
let animals = ["perro", "gato", ["pez", ["caballo"]]]
let flatAnimals = animals.flat(2)
console.log(flatAnimals)

let fruits = [{frutas:["manzana", "pera"]}, {frutas:["uva", "limón"]}]
let allFruits = fruits.flatMap(element => element.frutas)
console.log(allFruits)

// 4. Ordena un array de números de mayor a menor
let disordered = [45, 3, 78, 12, 99, 1, 56, 23]
let ordered = disordered.sort((a, b) => b - a)
console.log(ordered)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([3, 4, 5, 6, 7]);

const union = new Set ([...setA, ...setB])
const intersection = new Set ([...setA].filter(element => setB.has(element)))
const difference = new Set ([...setA].filter(element => !setB.has(element)))

console.log(union)
console.log(intersection)
console.log(difference)

// 6. Itera los resultados del ejercicio anterior
union.forEach(element => console.log(element))

for (const element of intersection) {
    console.log(element)
}

for (const element of difference.values()) {
    console.log(element)
}

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
let users = new Map([
    [1, { name: "Ana",    age: 25, email: "ana@mail.com"    }],
    [2, { name: "Luis",   age: 17, email: "luis@mail.com"   }],
    [3, { name: "María",  age: 30, email: "maria@mail.com"  }],
    [4, { name: "Carlos", age: 15, email: "carlos@mail.com" }],
    [5, { name: "Sofía",  age: 22, email: "sofia@mail.com"  }],
]);

users.forEach((values, key) => console.log(`${key}: ${values.name}, ${values.age}, ${values.email}`))

// 8. Dado el mapa anterior, crea un array con los nombres
const usersName = Array.from(users.values()).map(element => element.name)
console.log(usersName)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const usersEmail = new Set(
    Array.from(users.values())
        .filter(element => element.age >= 18)
        .map(element => element.email)
)
console.log(usersEmail)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
const objectFromMap = Object.fromEntries(users)
console.log(objectFromMap)

const mapFromObject = new Map(
    Object.entries(objectFromMap)
        .map(([key, value]) => [value.email, value])
);