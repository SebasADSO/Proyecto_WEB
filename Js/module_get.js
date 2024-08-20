import { login_re } from "../Js/redireccionar.js";
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
        if (element.tipo_de_docemento == tipo.value && element.documento == num.value && element.constraseña == pass.value) {
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
export default login;