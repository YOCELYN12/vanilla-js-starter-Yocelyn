let btnAgg = document.getElementById("btnAgg")
let listaTareas = document.getElementById("listaTareas")
let int = document.getElementById("int")


//Contador
let p = document.createElement("p")
p.type = "p"
p.innerHTML = "cont"
let cont = document.createElement("div")
div.appendChild(cont)
p.appendChild(p)

//GET
async function traedatos() {
    try {
        //Trae los datos del API
        listaTareas.innerHTML = ""
        const respuestas = await fetch("http://localhost:3000/api/task")
        let traedatos = await respuestas.json()
        console.log(traedatos)

        traedatos.forEach(variable => {


            //Agrega el Checbox a cada tarea
            let p = document.createElement("p")

            //Agrega la tarea ingresada en el input 
            p.textContent = variable.nombre

            //Agrega el Checbox a cada tarea
            let div = document.createElement("div")
            let checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            p.appendChild(checkbox)
            div.appendChild(p)
            div.appendChild(checkbox)
            listaTareas.appendChild(div)
            // checkbox.classList.add("")

            //Boton de eliminar, que se agrega a cada tarea
            let button = document.createElement("button")
            button.type = "button"
            button.innerHTML = "Eliminar"
            p.appendChild(button)
            let eliminar = document.createElement("span")
            div.appendChild(eliminar)

            //Evento que al dar click se elimine la tarea
            button.addEventListener("click", () => {
                eliminarTarea(variable.id)
            })

        });

    } catch (error) {
        console.error(error);
    }
}

async function eliminarTarea(id) {
    try {
        const eliminarTarea = await fetch(`http://localhost:3000/api/task/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const salida = await eliminarTarea.json()
        console.log(salida);
        if (eliminarTarea.ok) {
            alert("Succesfully task delete")
            await traedatos();
        }
        else {
            alert("Nothing")
        }
    } catch (error) {
        console.error(error);
    }
}


//POST
async function darDatos() {
    try {
        let tarea = {
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

traedatos()



