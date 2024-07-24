let r = 0

export async function postData(nivel ,name, last, contra, tipo, doc, email, cod_program, cod_ficha, name_program, start_lect, end_lect, product, jornada, condicion1, condicion2, condicion3, condicion4, condicion5) {
    let data = {
      "nombre": name.value,
      "apellido": last.value,
      "constraseña": contra.value,
      "tipo_de_docemento": tipo.value,
      "documento": doc.value,
      "email": email.value,
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
  console.log(datos0)
  console.log(data)
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