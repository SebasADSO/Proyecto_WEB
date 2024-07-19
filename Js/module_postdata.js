let r = 0

export async function postData(name, last, contra, tipo, doc, email) {
    let data = {
      "nombre": name,
      "apellido": last,
      "constraseña": contra,
      "tipo_de_docemento": tipo,
      "documento": doc,
      "email": email
    };
  try {
  const respuesta0 = await fetch("http://127.0.0.1:3000/users?documento="+doc, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const datos0 = await respuesta0.json()
  if (true) {
    const response = await fetch("http://127.0.0.1:3000/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    return response.json()
    }
    else {
      throw new Error("404")
    }
  } catch (error) {
    alert(error)
  }
}