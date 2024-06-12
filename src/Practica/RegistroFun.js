import { registroUsuarios } from "./post"

let btnRegis = document.getElementById("btnRegis")//variable para el boton de registrar
let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")


btnRegis.addEventListener("click", () => {  //evento para el boton de agregar el usuario

    // registroUsuarios(name,password,email)
    window.location

    registroUsuarios(name.value, password.value, email.value)

})



