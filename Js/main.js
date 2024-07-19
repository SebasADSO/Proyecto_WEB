import { letras, email, documento, Constraseña } from "./module_user.js";
import { Nombre, cod, date } from "./module_rol.js"
import { postData } from "./module_postdata.js";
import { buscar } from "./doc_tipo.js";

buscar()

let r = 0
let y = 0;
let x = 0;
let p = true;

let regex_nom = /^[a-zA-Z ]+$/;
const regex_num = /^[0-9]+$/;
const regex_doc = /^[0-9]+$/;
const regex_dire = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;;
const regex_email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

/// --------------------------------Información del usuario---------------------------------------------- ///
let $nombre = document.getElementById('nombre');
let $apellido = document.getElementById('apellido');
let $tipo_doc = document.getElementById('tipo_doc');
let $documento = document.getElementById('documento');
let $email = document.getElementById('email');
let $privacidad = document.getElementById('privacidad');
let $Constraseña = document.getElementById('Constraseña');
const $button = document.getElementById('siguiente')

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

///--------------------------------Información del rol -------------------------------///

let $cod_program = document.getElementById('cod_program');
let $cod_ficha = document.getElementById('cod_ficha');
let $name_program = document.getElementById('name_program');
let $start_lect = document.getElementById('start_lect');
let $end_lect = document.getElementById('end_lect');
let $product = document.getElementById('product');
let $jornada = document.getElementById('jornada');

$cod_program.addEventListener("blur", () => {
  cod($cod_program)
})

$cod_ficha.addEventListener("blur", () => {
  cod($cod_ficha)
})

$name_program.addEventListener("blur", () => {
  Nombre($name_program)
})

$start_lect.addEventListener("blur", () => {
  date($start_lect)
})

$end_lect.addEventListener("blur", () => {
  date($end_lect)
})

$product.addEventListener("blur", () => {
  date($product)
})

$jornada.addEventListener("blur", () => {
  Nombre($jornada )
})