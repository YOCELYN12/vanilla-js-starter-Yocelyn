let btnAgg = document.getElementById("btnAgg")
let listaTareas = document.getElementById("listaTareas")
let int = document.getElementById("int")
let container = document.getElementById("int2")
import { darDatos } from "./post.js";

int.addEventListener("keydown",(e)=>{
    if (e.key=="Enter" && int.value!==""){
        alert("ingrese un texto")
        darDatos()
    }
})

//GET
export async function traedatos() {
    try {
        //Trae los datos del API
        listaTareas.innerHTML = ""
        const respuestas = await fetch("http://localhost:3000/api/task")
        let traedatos = await respuestas.json()
        console.log(traedatos)

        traedatos.forEach(variable => {
            //Agrega el Checbox a cada tarea
            let p = document.createElement("p")

            p.classList.add("parrafo")
            //Agrega la tarea ingresada en el input 
            p.textContent = variable.nombre

            //Agrega el Checbox a cada tarea
            let div = document.createElement("div")
            let checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            p.appendChild(checkbox)
            div.appendChild(p)
            listaTareas.appendChild(div)

            

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
            checkbox.addEventListener("click", () => {
                if (checkbox.checked == true) {
                    upCheckList(variable.id)
                    container.value++
                } else {
                    container.value--
                }
            });
        })       
    } catch (error) {
        console.error(error);
    }
}



//POST Eliminar tarea
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



btnAgg.addEventListener("click", () => {
    if(int.value!== ""){
        alert("The task was added successfully")
        darDatos()
    }
    else (
        alert("ingrese un texto")
    )
})

//put
async function upCheckList(id) {
    try {
        let task = {
            estado: true
        }
        const answer = await fetch(`http://localhost:3000/api/task/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(task)
        })
        let data = await answer.json()
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
traedatos()



