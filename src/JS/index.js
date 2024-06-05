
let btnAgg = document.getElementById("btnAgg")
let listaTareas = document.getElementById("listaTareas")
let int = document.getElementById("int")


//GET
async function traedatos() {
    try {
        const respuestas = await fetch("http://localhost:3000/api/task")
        let traedatos = await respuestas.json()
        console.log(traedatos)

        traedatos.forEach(variable => {
            let p = document.createElement("p")
            let div = document.createElement("div")
            let checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            p.appendChild(checkbox)
            p.textContent = variable.nombre
            div.appendChild(p)
            div.appendChild(checkbox)
            checkbox.classList.add("")
            listaTareas.appendChild(div)
        });

    } catch (error) {
        console.error(error);
    }
}
 

//POST
async function darDatos() {
    try {
        let tarea = {
            id: Date.now(),
            nombre: int.value,
            estado: false,
        }
        const respuesta = await fetch("http://localhost:3000/api/task", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(tarea)

        })
        
        const data = await respuesta.json()
        console.log(data);
        console.log(`Se creo la tarea ${tarea.nombre}`)
        traedatos()
    } catch (error) {
    }
}

btnAgg.addEventListener("click", () => {
    darDatos()
    console.log("dsadas");
})




