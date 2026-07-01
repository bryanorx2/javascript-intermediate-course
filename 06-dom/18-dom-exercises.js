document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title")
    title.textContent = "¡Hola Mundo!"

    const imag = document.getElementById("myImage")
    imag.setAttribute("src","https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/9db5/live/48fd9010-c1c1-11ee-9519-97453607d43e.jpg.webp")

    const box = document.getElementById("box")
    box.classList.add("resaltado")

    const colorText = document.getElementById("paragraph")
    colorText.style.color = "blue"
    
    const list = document.getElementById("list")
    const addButton = document.getElementById("newButton")
    
    function addElement(){
        const newElement = document.createElement("li")
        newElement.textContent = "Nuevo elemento"

        list.appendChild(newElement)
    }

    addButton.addEventListener("click", addElement)

    const deleteParagraph = document.getElementById("deleteParagraph")
    const deleteButton = document.getElementById("deleteButton")

    deleteButton.addEventListener("click", () => {
        deleteParagraph.remove()
    })

    const div = document.getElementById("content")
    div.innerHTML = "<h2>Nuevo Contenido</h2>"

    const greetButton = document.getElementById("greetBtn")
    greetButton.addEventListener("click", () => {
        alert("¡Hola!")
    })

    const textInput = document.getElementById("textInput")
    const result = document.getElementById("result")

    textInput.addEventListener("input", () => {
        result.textContent = textInput.value
        console.log(result)
    })

    const backgroundBtn = document.getElementById("backgroundBtn")
    const colorName = document.getElementById("colorName")

    backgroundBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = colorName.value
    })
})