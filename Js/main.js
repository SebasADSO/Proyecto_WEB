import { letras, email, documento, Constraseña } from "./module.js";
import { postData } from "./module_postdata.js";

let r = 0
let y = 0;
let x = 0;
let p = true;

const regex_num = /[0-9]/;
let regex_nom = /^[a-zA-Z ]+$/;
const regex_tel = /^[0-9]+$/;
const regex_doc = /^[0-9]+$/;
const regex_dire = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;;
const regex_email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

let $nombre = document.getElementById('nombre');
let $apellido = document.getElementById('apellido');
let $tipo_doc = document.getElementById('tipo_doc');
let $documento = document.getElementById('documento');
let $email = document.getElementById('email');
let $privacidad = document.getElementById('privacidad');
let $Constraseña = document.getElementById('Constraseña');
// const $ggg = document.getElementById('buscar_borrar');

const $button = document.getElementById('siguiente')
// const $buscar_btn = document.getElementById('buscar_btn')
// const $btn_borrar = document.getElementById('buscar_btn_borrar');
// const $rtt = document.getElementById('lista')
// const update = document.getElementById('update')

$nombre.addEventListener("blur", () => {
  letras($nombre);
})
$apellido.addEventListener("blur", () => {
  letras($apellido);
})
$documento.addEventListener("blur", () => {
  documento($documento)
})

$email.addEventListener("blur", () => {
  email($email)
})
$Constraseña.addEventListener("blur", () => {
  Constraseña($Constraseña)
})

// $buscar.addEventListener("keydown", () => {
//   documento($buscar)
//   if (documento($buscar)) {
//     $buscar_btn.removeAttribute("disabled", "")
//   } else if (!documento($buscar)) {
//     $buscar_btn.setAttribute("disabled", "")
//   }
//   $buscar_btn.addEventListener("click", (event) => {
//     event.preventDefault();
//     buscar($buscar)
//   })
// })
// $ggg.addEventListener("keydown", () => {
//   documento($ggg)
//   if (documento($ggg)) {
//     $btn_borrar.removeAttribute("disabled", "")
//   } else if (!documento($ggg)) {
//     $btn_borrar.setAttribute("disabled", "")
//   }
//   $btn_borrar.addEventListener("click", (event) => {
//     event.preventDefault();
//     Delete($ggg)
//   })
// })

// $rtt.addEventListener("click", (event) => {
//   update.removeAttribute("disabled", "")
//   $rtt.setAttribute("disabled", "")
//   listar(p)
//   p = false
//   event.preventDefault();
//   update.addEventListener("click", (event)=> {
//     const tabla = document.querySelectorAll('.HELLO')
//     for (let index = 0; index <= tabla.length - 1; index++) {
//       tabla[index].remove()
//     }
//     p = true
//     listar(p)
//     event.preventDefault()
//   })
// })

$privacidad.addEventListener("change", () => {
  if ($privacidad.checked == true) {
    $button.removeAttribute("disabled");
    $button.addEventListener("click", (event) => {
      event.preventDefault();
      try {
        $nombre = document.getElementById('nombre').value;
        $apellido = document.getElementById('apellido').value;
        $Constraseña = document.getElementById('Constraseña').value;
        $documento = document.getElementById('documento').value;
        $email = document.getElementById('email').value;
        $tipo_doc = document.getElementById('tipo_doc').value
        if ($nombre == "" || $documento == "" || $apellido == "" || $email == "" || $Constraseña == "") {
          throw new Error('No puede dejar campos vacios')
        }
        else if (regex_nom.test($nombre) && regex_nom.test($apellido)) {
          if (regex_doc.test($documento)) {
            if (regex_email.test($email)) {
              postData($nombre, $apellido, $Constraseña, $tipo_doc, $documento, $email);
            }
            else if (!regex_doc.test($documento)) {
              throw new Error('El documento es invalido')
            }
          }
        }
        else if (!regex_nom.test($nombre) || !regex_nom.test($apellido)) {
          throw new Error('Solo se permite letras en el los campos de nombre y apellido')
        }
        else {
          throw new Error('Desconocido 404')
        }
      }catch (error) {
        alert(error)
      }
    })
  }
  else {
    $button.setAttribute("disabled", "");
  }
})
