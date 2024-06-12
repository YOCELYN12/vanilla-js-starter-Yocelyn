async function actualizar(id,users) {
    try {
        const datos = await fetch( `http://localhost:1234/api/task/${id}`,{
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(users)
        })
        let data = await datos.json()
        console.log(data)

    } catch (error) {
        console.log(error);
    }
}
