import { letras, email, documento, Constraseña } from "../Js/module_user.js";
import { Nombre, cod, date } from "../Js/module_rol.js"
import { buscar } from "../Js/doc_tipo.js";
import { validar_condicion } from "../Js/module_validar_registro.js"
import { postData } from "../Js/module_postdata.js";

buscar()

/// --------------------------------Información del usuario---------------------------------------------- ///

const nivel = "aprendiz";

let $nombre = document.getElementById('nombre');
let $apellido = document.getElementById('apellido');
let $tipo_doc = document.getElementById('tipo_doc');
let $documento = document.getElementById('documento');
let $email = document.getElementById('email');
let $privacidad = document.getElementById('privacidad');
let $Constraseña = document.getElementById('Constraseña');
const $button = document.getElementById('siguiente');

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
    Nombre($jornada)
})


///---------------------------Condición----------------------------///


const $Condicion_1 = document.getElementById('Condicion_1')
const $Condicion_2 = document.getElementById('Condicion_2')
const $Condicion_3 = document.getElementById('Condicion_3')
const $Condicion_4 = document.getElementById('Condicion_4')
const $Condicion_5 = document.getElementById('Condicion_5')


///--------------------------------subir-------------------------------///

$privacidad.addEventListener("change", (event) => {
    event.preventDefault()
  if ($privacidad.checked == true) {
    $button.removeAttribute("disabled");
    $button.addEventListener("click", (event) => {
        event.preventDefault()
        try {
            if (letras($nombre) && letras($apellido) && documento($documento) && email($email) && Constraseña($Constraseña)) {
                if (cod($cod_program) && cod($cod_ficha) && Nombre($name_program) && date($start_lect) && date($end_lect) && date($product) && Nombre($jornada)) {
                    if (validar_condicion($Condicion_1, $Condicion_2, $Condicion_3, $Condicion_4, $Condicion_5)) {
                        postData(nivel ,$nombre, $apellido, $Constraseña, $tipo_doc, $documento, $email, $cod_program, $cod_ficha,$name_program, $start_lect, $end_lect, $product, $jornada,$Condicion_1, $Condicion_2, $Condicion_3, $Condicion_4, $Condicion_5)
                        location.href = "../Registro/Correct.html"
                    }
                    else if (!validar_condicion($Condicion_1, $Condicion_2, $Condicion_3, $Condicion_4, $Condicion_5)) {
                        throw new Error("Revisar los campos de las condiciones")
                    }
                }
                else if (!cod($cod_program) || !cod($cod_ficha) || !Nombre($name_program) || !date($start_lect) || !date($end_lect) || !date($product) || !Nombre($jornada)){
                    cod($cod_program)
                    cod($cod_ficha)
                    Nombre($name_program)
                    date($start_lect)
                    date($end_lect)
                    date($product)
                    throw new Error("Revisar los campos de la información del programa")
                }
            }
            else if (!letras($nombre) || !letras($apellido) || !documento($documento) || !email($email) || !Constraseña($Constraseña)) {
                letras($nombre)
                letras($apellido)
                documento($documento)
                email($email)
                Constraseña($Constraseña)
                cod($cod_program)
                cod($cod_ficha)
                Nombre($name_program)
                date($start_lect)
                date($end_lect)
                date($product)
                throw new Error("Revisar los campos de la información personal")
            }
            else {
                throw new Error("Corregir el formulario")
            }
        } catch (error) {
            alert(error)
        }
        
      })
  }
  else {
    $button.setAttribute("disabled", "");
  }
})