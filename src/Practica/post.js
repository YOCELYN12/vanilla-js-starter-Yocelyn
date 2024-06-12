//POST
async function registroUsuarios(name,password,email){
 console.log(name,password,email)
    try {
        let usuario = {
            nombre: name,
            password: password,
            email: email,
        }
        const registrar = await fetch(`http://localhost:1234/api/task/`,{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(usuario)
        })
        
        const usua = await registrar.json()
        console.log(usua)
        console.log(`se agrego el usuario ${usuario.nombre}`)
        
    } catch (error) {
        console.error(error);
    }
}
export {registroUsuarios}