//POST

import { traedatos } from ".";
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
export {darDatos}