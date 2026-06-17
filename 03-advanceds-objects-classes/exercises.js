// 1. Agregega una función al prototipo de un objeto
let character = {
    name:"Drogon",
    hp: 250,
    level: 15,
}
console.log(character)
console.log(character.__proto__)
Object.getPrototypeOf(character).status = function() {
    console.log(`[${this.name}] Nivel ${this.level} - HP: ${this.hp}`)
}

character.status()
console.log(character.hasOwnProperty("status"))

// 2. Crea un objeto que herede de otro
let vehicle = {}
let motorcycle = Object.create(vehicle)
vehicle.brand = "Honda"
vehicle.speed = "120 km/h"
vehicle.move = function() {
    console.log(`${this.brand} se mueve a ${this.speed}`)
}

motorcycle.type = "deportiva"

console.log(Object.getPrototypeOf(motorcycle) === vehicle)
console.log(motorcycle.brand)
console.log(motorcycle.type)
motorcycle.move()
console.log(vehicle.type)

// 3. Define un método de instancia en un objeto
function Product(name, price, stock) {
    this.name = name
    this.price = price
    this.stock = stock
}

Product.prototype.summary = function() {
    console.log(`${this.name} - S/${this.price} (${this.stock} en stock)`)
}

const p1 = new Product("Monitor", 850, 12)
const p2 = new Product("Teclado", 120, 40)
p1.summary()
p2.summary()
console.log(p1.summary === p2.summary)

// 4. Haz uso de get y set en un objeto
const Thermometer = {
    _temperatura: 22,

    get temperatura() {
        return this._temperatura
    },
    get fahrenheit() {
        return (this._temperatura*9/5)+32
    },

    set temperatura(value) {
        if (value < -273.15) {
            console.log("Temperatura fuera de rango")
        } else {
            this._temperatura = value
        }
    },
}
Thermometer.temperatura = 100
console.log(Thermometer.fahrenheit)

// 5. Utiliza la operación assign en un objeto
let defaultConfig = {
    theme: "light", lang: "es",
    fontSize: 14, notifications: true
}

let userConfig = {
    theme: "dark", fontSize: 18
}

let finalConfig = Object.assign({},defaultConfig, userConfig)
console.log(finalConfig)

// 6. Crea una clase abstracta
class Shape {
    constructor(base, height){
        if (new.target === Shape){
            throw new Error("Shape no se puede instanciar")
        }
        this.base = base
        this.height = height
    }
    area(){
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}
try {
    const shape1 = new Shape(4, 6)
} catch(error) {
    console.log(error.message)
}

// 7. Utiliza polimorfismo en dos clases diferentes
class Rectangle extends Shape {
    area() {
        return this.base * this.height
    }
}

class Triangle extends Shape {
    area(){
        return (this.base * this.height)/2
    }
}

const shapes = [new Rectangle(4, 6), new Triangle(5, 8)]
shapes.forEach(s => console.log(s.area()))

// 8. Implementa un Mixin
const ConectableMixin = {
    connect() {
        console.log(`${this.name} conectado`)
    },
    disconnect() {
        console.log(`${this.name} desconectado`)
    }
}

const LoggeableMixin = {
    log(msg) {
        console.log(`[LOG] ${msg}`)
    }
}

class Sensor {
    constructor(name) {
        this.name = name
    }
}

class SmartLamp {
    constructor(name) {
        this.name = name
    }
}

Object.assign(Sensor.prototype, ConectableMixin, LoggeableMixin)
Object.assign(SmartLamp.prototype, ConectableMixin, LoggeableMixin)

const s = new Sensor("Temp-01")
s.connect()
s.log("Lectura: 23°C")
s.disconnect()

const lamp = new SmartLamp("Sala")
lamp.connect()
lamp.log("Encendida al 80%")

// 9. Crea un Singleton
class Logger {
    constructor(name, logs) {
        if (Logger.instance) {
            return Logger.instance
        }
        this.name = name
        this.logs = []
        Logger.instance = this
    }
    add(msg) {
        this.logs.push(msg)
    }
    history() {
        console.log(this.logs)
    }
}

const log1 = new Logger()
const log2 = new Logger()

log1.add("App iniciada")
log2.add("Usuario conectado")

log1.history()
console.log(log1 === log2)

// 10. Desarrolla un Proxy
class Inventory {
    constructor(){
        this.laptop = 50
        this.keyboard = 40
    }
}

const proxy = {
    get (target, property) {
        if (property in target === false) {
            return "Sin stock"
        }
        return target[property]
    },

    set(target, property, value) {
        if (value < 0){
            throw new Error("El stock no puede ser negativo")
        }
        target[property] = value
    }
}

const store = new Proxy(new Inventory(), proxy)
console.log(store.laptop)
console.log(store.drone)
store.laptop = 30
store.keyboard = -5