
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
            let li = document.createElement("li")
            li.textContent = variable.nombre
            listaTareas.appendChild(li)

        });
    } catch (error) {
        console.error(error);

    }

    let checkBox = document.getElementById("divInput")
    let check = () => {
        let div = document.createElement("div")
        let p = document.createElement("p")
        let box = document.createElement("input")
        box.type = "checkbox"
        p.innerHTML = "ffff"
        div.appendChild(p)
        div.appendChild(box)
        checkBox.appendChild(div)
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
})




