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
    else if (datos0[0].documento == doc && r == 0) {
      r = 1
      console.log("El usuario ya se encuentra registrado")
      const div = document.createElement('div')
      const h1 = document.createElement('h1')
      const p1 = document.createElement('p')
      const code = document.createElement('code')
      const p2 = document.createElement('p')
      h1.innerText = "Usuario existente"
      p1.innerText = "El usuario ya se encuentra registrado en el sistema"
      div.classList = 'card_e'
      base.appendChild(div)
      div.appendChild(h1)
      div.appendChild(p1)
      div.appendChild(code)
      div.appendChild(p2)
      setTimeout(() => {
        r = 0
        div.remove()
        console.clear();
      }, 10000);
    }
    else {
      throw new Error("Error desconocido")
    }  
  } catch (error) {
    alert(error)
  }
}