let r = 0

export async function postData(nivel ,name, last, contra, tipo, doc, email, cod_program, cod_ficha, name_program, start_lect, end_lect, product, jornada, condicion1, condicion2, condicion3, condicion4, condicion5) {
    let data = {
      "nombre": name.value,
      "apellido": last.value,
      "constraseña": contra.value,
      "tipo_de_docemento": tipo.value,
      "documento": doc.value,
      "email": email.value,
      "estado": "ACTIVO",
      "rol": {
        "nivel": nivel, 
        "cod_programa": cod_program.value,
        "cod_ficha": cod_ficha.value,
        "nombre_programa": name_program.value,
        "inicio_lectiva": start_lect.value,
        "final_lectiva": end_lect.value,
        "fecha_productiva": product.value,
        "jornada": jornada.value
      },
      "condicion": {
        "Condicion1": condicion1.value,
        "Condicion2": condicion2.value,
        "Condicion3": condicion3.value,
        "Condicion4": condicion4.value,
        "Condicion5": condicion5.value
      }
    };
  try {
  const respuesta0 = await fetch("http://127.0.0.1:3000/users?documento="+doc.value, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const datos0 = await respuesta0.json()
  if (datos0.length == 1) {
    const response = await fetch("http://127.0.0.1:3000/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    return response.json()
    }
    else if(datos0.length != 1) {
      throw new Error("El usuario ya se encuentra registrado")
    }
  } catch (error) {
    alert(error)
  }
}

export async function postData2(nivel ,name, last, contra, tipo, doc, email, rol, educacion, dias, condicion1, condicion2, condicion3, condicion4, condicion5) {
  let data = {
    "nombre": name.value,
    "apellido": last.value,
    "constraseña": contra.value,
    "tipo_de_docemento": tipo.value,
    "documento": doc.value,
    "email": email.value,
    "estado": "ACTIVO",
    "rol": {
      "nivel": nivel, 
      "rol": rol.value,
      "educacion": educacion.value,
      "dias": dias,
    },
    "condicion": {
      "Condicion1": condicion1.value,
      "Condicion2": condicion2.value,
      "Condicion3": condicion3.value,
      "Condicion4": condicion4.value,
      "Condicion5": condicion5.value
    }
  };
try {
const respuesta0 = await fetch("http://127.0.0.1:3000/users?documento="+doc.value, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
})
const datos0 = await respuesta0.json()
if (datos0.length == 1) {
  const response = await fetch("http://127.0.0.1:3000/users", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
  })
  return response.json()
  }
  else if(datos0.length != 1) {
    throw new Error("El usuario ya se encuentra registrado")
  }
} catch (error) {
  alert(error)
}
}


export async function postDataReport(user_id, title, desc, site, fecha_r) {
  let data = {
    "id_user_fk": user_id,
    "titulo": title.value,
    "constraseña": desc.value,
    "tipo_de_docemento": site.value,
    "documento": fecha_r,
    "estado": {
      "estado": "PENDIENTE",
      "fecha_revision": "0000-00-00",
      "tipo_peligro": "DESCONOCIDO",
      "nivel_peligro": "DESCONOCIDO",
    }
  };
  const response = await fetch("http://127.0.0.1:3000/reportes", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
  })
  alert("REPORTE RESIVIDO")
  return response.json()
}

export async function update_data(id, name, last, contra, tipo, doc, email, cod_program, cod_ficha, name_program, start_lect, end_lect, product, jornada) {
  let data = {
    "nombre": name.value,
    "apellido": last.value,
    "tipo_de_docemento": tipo.value,
    "documento": doc.value,
    "email": email.value,
    "rol": {
      "nivel": "aprendiz",
      "cod_programa": cod_program.value,
      "cod_ficha": cod_ficha.value,
      "nombre_programa": name_program.value,
      "inicio_lectiva": start_lect.value,
      "final_lectiva": end_lect.value,
      "fecha_productiva": product.value,
      "jornada": jornada.value
    },
    "condicion": {
      "Condicion1": "NINGUNA",
      "Condicion2": "NINGUNA",
      "Condicion3": "NINGUNA",
      "Condicion4": "NINGUNA",
      "Condicion5": "NINGUNA"
    }
  };
const response = await fetch("http://127.0.0.1:3000/users/"+id, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data, {encoding: 'utf8'})
})
.then(response => response.json())

.then(data => console.log(data))

.catch(error => console.error(data));
}

export async function update_data2(id, name, last, contra, tipo, doc, email, educacion, dias) {
  let data = {
    "nombre": name.value,
    "apellido": last.value,
    "tipo_de_docemento": tipo.value,
    "documento": doc.value,
    "email": email.value,
    "rol": {
      "educacion": educacion.value,
      "dias": dias.value
    }
  };
const response = await fetch("http://127.0.0.1:3000/users/"+id, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data, {encoding: 'utf8'})
})
.then(response => response.json())

.then(data => console.log(data))

.catch(error => console.error(data));
}