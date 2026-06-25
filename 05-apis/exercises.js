// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log("Error:", error)
    })

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
fetch("https://jsonplaceholder.typicode.com/userasass")
    .then(response => {
        if (!response.ok) {
            throw Error(`Status: ${response.status}`)
        }
        return response.json()})
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function getUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(`Error: ${error}`)
    }
}
getUsers()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
async function createUser(){
    try{
        const newUser = {
            name: "Bryan Orbegoso",
            username: "bryanorx2",
            email: "bryanorx@email.com",
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })

        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
createUser()

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
async function replaceUser() {
    try{
        const putUser = {
            name: "Bryan Orlando",
            username: "bryanorx",
            email: "bryanorx@email.com",
            address: {
                street: "Los Robles",
                suite:"Apt. 202",
                city: "Lima",
                zipcode: "92998-3874",
                geo: {
                    lat: "-35.3159",
                    lng: "71.1496",
                }
            },
            phone: "1-880-736-8031 x56442",
            website: "bryanorx.org",
            company: {
                name: "Bryan-Crona",
                catchPhrase: "Proactive didactic contingency",
                bs: "harness real-time e-markets",
            },
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(putUser),
        })

        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
replaceUser()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
async function updateUser() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/10", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: "Juan Perez"})
        })
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
updateUser()

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
async function deleteUser() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/10", {
            method: "DELETE",
        })
        if (response.ok){
            console.log("Recurso eliminado con éxito")
            const data = await response.json()
            console.log(data)
        } else {
            console.error("Error al eliminar el recurso", response.status)
        }
    }
    catch(error){
        console.log(error)
    }
}
deleteUser()

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
async function getWeather(city) {
    const apiKey = "cb8e0b037aa31a7a73a60935ce988dfe"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
getWeather("Tarapoto")

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function getPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    try{
        const response = await fetch(url)
        const data = await response.json()
        const dataSpecies = data.species
        const urlSpecies = await fetch(dataSpecies.url)
        const dataSpeciesUrl = await urlSpecies.json()
        const dataEvolutionUrl = await fetch(dataSpeciesUrl.evolution_chain.url)
        const dataEvolution = await dataEvolutionUrl.json()
        console.log(dataEvolution)
        console.log(`Cadena evolutiva de ${data.name}:`)
        console.log(dataEvolution.chain.species.name)
        if (dataEvolution.chain.evolves_to.length > 0) {
            console.log(dataEvolution.chain.evolves_to[0].species.name)
            if (dataEvolution.chain.evolves_to[0].evolves_to.length > 0) {
                console.log(dataEvolution.chain.evolves_to[0].evolves_to[0].species.name)
            }
        }
        
    }
    catch(error){
        console.log(error)
    }
}
getPokemon("onix")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
