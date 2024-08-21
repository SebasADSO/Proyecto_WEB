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

export async function educacion() {
  const respuesta = await fetch("http://127.0.0.1:3000/Educacion", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const datos = await respuesta.json()
  const educacion = document.getElementById('educacion')
  datos.forEach(element => {
      let option = document.createElement('option')
      option.innerHTML = element.Nivel
      option.setAttribute("value", element.Nivel)
      educacion.appendChild(option)
  });
}

export async function rol() {
  const respuesta = await fetch("http://127.0.0.1:3000/roles", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const datos = await respuesta.json()
  const rol = document.getElementById('rol')
  datos.forEach(element => {
      let option = document.createElement('option')
      option.innerHTML = element.rol
      option.setAttribute("value", element.rol)
      rol.appendChild(option)
  });
}

export async function condicion_list() {
  const respuesta = await fetch("http://127.0.0.1:3000/condicion", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const datos = await respuesta.json()
  const educacion = document.getElementById('educacion')
  datos.forEach(element => {
      let option = document.createElement('option')
      option.innerHTML = element.Nivel
      option.setAttribute("value", element.Nivel)
      educacion.appendChild(option)
  });
}