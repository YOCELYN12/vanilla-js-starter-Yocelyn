let btnAgg = document.getElementById("btnAgg") //Variable para el boton de agregar
let listaTareas = document.getElementById("listaTareas") //variable para las tareas
let int = document.getElementById("int") // variable para mi input
let parrafo = document.getElementById("nn") //variable para mostrar si hay tareas o no 
let container = document.getElementById("int2") 

import { darDatos } from "./post.js";

//Para que al tocar la tecla enter, se guarde la tarea
int.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && int.value !== "") {
        alert("ingrese un texto")
        darDatos()
    }
})

//GET
export async function traedatos(){
    try {
        //Trae los datos del API
        listaTareas.innerHTML = ""
        const respuestas = await fetch("http://localhost:3000/api/task")
        let traedatos = await respuestas.json()
        let datos = Array.from(traedatos)
        
        if (datos.length == 0) {
            console.log("No hay tareas")
            parrafo.style.display = "block"
            parrafo.setAttribute("class", "seVe")

        } else {
            console.log("Si hay tareas")
            parrafo.style.display = "none"

        }
        console.log(traedatos)


        //validarTexto()
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

            //Evento de checkbox para el contador 
            checkbox.addEventListener("click", () => {
                if (checkbox.checked == true) {
                    upCheckList(variable.id)
                    container.value++
                } else {
                    container.value
                }
            });
        })

    } catch (error) {
        console.log(error);
    }
}


//Eliminar tarea
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


//Boton para agregar la tarea
btnAgg.addEventListener("click", () => {
    if (int.value.trim() !== "") {
        alert("The task was added successfully")
        darDatos()
    }
    else (
        alert("enter a text")
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


traedatos()//funcion traedatos



