//GET
async function verUsuarios() {
    
    try {
        const guardarUsuarios = await fetch("http://localhost:3000/api/task")
        let registrar = await guardarUsuarios.json()
        let usuarios = Array.from(registrar)

    } catch (error) {
        console.log("error")
    }
   console.log(registrar)
}

