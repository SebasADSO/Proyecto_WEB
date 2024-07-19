export async function buscar() {
    const respuesta = await fetch("http://127.0.0.1:3000/documentos", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const datos = await respuesta.json()
    const tipo_doc = document.getElementById('tipo_doc')
    datos.forEach(element => {
        let option = document.createElement('option')
        option.innerHTML = element.Tipo
        option.setAttribute("value", element.Tipo)
        tipo_doc.appendChild(option)
    });
}