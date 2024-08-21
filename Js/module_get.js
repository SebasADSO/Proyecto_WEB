import { login_re, login_ad } from "../Js/redireccionar.js";
import { URL } from "../Js/config.js";
const login = async function (tipo, num, pass) {
    const td = await fetch(`${URL}users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const result_one = await td.json()
      let i = 0;
      let bandera = false;
      result_one.forEach(element => {
        i++
        if (element.estado == "ACTIVO" && element.tipo_de_docemento == tipo.value && element.documento == num.value && element.constraseña == pass.value) {
          localStorage.setItem("user", element.id)
          localStorage.setItem("rol", element.rol.nivel)
          return bandera = true;
        }
        else if (!element.tipo_de_docemento == tipo.value && !element.documento == num.value && !element.constraseña == pass.value && element.id == 1) {
          console.log("Buscando")
        }
      });
      try {
        if (bandera == true) {
          alert("Bienvenido a la plataforma")
          login_re()
        }
        else if (bandera == false) {
          throw new Error("Usuario no encontrado")
        }
      } catch (error) {
        alert(error)
      }

}
export const userinfo = async (id, name, last, contra, tipo, doc, email, cod_program, cod_ficha, name_program, start_lect, end_lect, product, jornada, condicion1, condicion2, condicion3, condicion4, condicion5) => {
  const response = await fetch(`${URL}users/?id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const response_json = await response.json()
  response_json.forEach( element=> {
    name.setAttribute("value", element.nombre)
    last.setAttribute("value", element.apellido)
    contra.setAttribute("value", element.contraseña)
    tipo.setAttribute("value", element.tipo_de_docemento)
    doc.setAttribute("value", element.documento)
    email.setAttribute("value", element.email)
    cod_program.setAttribute("value", element.rol.cod_programa)
    cod_ficha.setAttribute("value", element.rol.cod_ficha)
    name_program.setAttribute("value", element.rol.nombre_programa)
    start_lect.setAttribute("value", element.rol.inicio_lectiva)
    end_lect.setAttribute("value", element.rol.final_lectiva)
    product.setAttribute("value", element.rol.fecha_productiva)
    jornada.setAttribute("value", element.rol.jornada)
  })
}

export const userinfo2 = async (id, name, last, contra, tipo, doc, email, educacion, dias) => {
  const response = await fetch(`${URL}users/?id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const response_json = await response.json()
  response_json.forEach( element=> {
    name.setAttribute("value", element.nombre)
    last.setAttribute("value", element.apellido)
    contra.setAttribute("value", element.contraseña)
    tipo.setAttribute("value", element.tipo_de_docemento)
    doc.setAttribute("value", element.documento)
    email.setAttribute("value", element.email)
    educacion.setAttribute("value", element.rol.educacion)
    dias.setAttribute("value", element.rol.dias)
  })
}

export async function listar() {
  try {
    const respuesta = await fetch("http://127.0.0.1:3000/users", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const datos = await respuesta.json()
    datos.forEach(element => {
      $template.querySelector('tr').id = `user_${element.id}`;
      $template.querySelector('.name').textContent = element.nombre + " " + element.apellido;
      $template.querySelector('.t_doc').textContent = element.tipo_de_docemento;
      $template.querySelector('.ndoc').textContent = element.documento;
      $template.querySelector('.email').textContent = element.email;
      $template.querySelector('.direccion').textContent = element.direccion;
      $template.querySelector('.telefono').textContent = element.telefono;
      $template.querySelector('.edit').setAtribute("data_id", element.id);
      $template.querySelector('.delete').setAtribute("data_id", element.id);
      let clone = document.importNode($template, true);

    });
  } catch (error) {
    alert(error)
  }
}



export const login2 = async function (tipo, num, pass) {
  const td = await fetch(`${URL}users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const result_one = await td.json()
    let i = 0;
    let bandera = false;
    result_one.forEach(element => {
      i++
      if (element.nombre == "admin" && element.tipo_de_docemento == tipo.value && element.documento == num.value && element.constraseña == pass.value) {
        localStorage.setItem("user", element.id)
        localStorage.setItem("rol", element.rol.nivel)
        return bandera = true;
      }
      else if (!element.tipo_de_docemento == tipo.value && !element.documento == num.value && !element.constraseña == pass.value && element.id == 1) {
        console.log("Buscando")
      }
    });
    try {
      if (bandera == true) {
        alert("Bienvenido a la plataforma")
        login_ad()
      }
      else if (bandera == false) {
        throw new Error("Usuario no encontrado")
      }
    } catch (error) {
      alert(error)
    }

}

export default login;