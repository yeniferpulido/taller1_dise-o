const contenedor = document.getElementById("contenedor")
const btnCraer = document.getElementById("crear")

let personas =[]

async function obtenerPersonas(){
    const response = await fetch("personas.json")
    personas = await response.json()

    renderizar()
}

function renderizar(){
    contenedor.innerHTML = ""

    personas.forEach(persona => {

        const card = document.createElement("div") 
        card.classList.add("card")
        
        card.innerHTML = `
        <h3>${persona.nombre}</h3>
        <p>Edad: ${persona.edad}</p>
        <p>Ciudad: ${persona.ciudad}</p>

        `

        contenedor.appendChild(card)
    });
}


btnCraer.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value
    const edad = document.getElementById("edad").value
    const ciudad = document.getElementById("ciudad").value

      const nuevaPersona = {
        id : personas.length +1,
        nombre,
        edad,
        ciudad,
      }

      personas.push(nuevaPersona)

      renderizar()
})
obtenerPersonas()

