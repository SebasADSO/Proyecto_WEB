import { letras, email, documento, Constraseña } from "../Js/module_user.js";
import { Nombre, cod, date } from "../Js/module_rol.js"
import { buscar, educacion, rol } from "../Js/doc_tipo.js";
import { validar_condicion } from "../Js/module_validar_registro.js"
import { postData2 } from "../Js/module_postdata.js";
import { dias_select } from "../Js/module_dias.js";

let nivel = "";

buscar()
rol()
educacion()

/// --------------------------------Información del usuario---------------------------------------------- ///

let $nombre = document.getElementById('nombre');
let $apellido = document.getElementById('apellido');
let $tipo_doc = document.getElementById('tipo_doc');
let $documento = document.getElementById('documento');
let $email = document.getElementById('email');
let $privacidad = document.getElementById('privacidad');
let $Constraseña = document.getElementById('Constraseña');
let $Constraseña_confirm = document.getElementById('re_Constraseña');
const $button = document.getElementById('siguiente')
let $title = document.getElementById('title_rol')

$title.innerHTML = `Registro información del rol: ${nivel}`

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

///---------------------------Rol----------------------------------///

let $rol = document.getElementById('rol')
let $educacion = document.getElementById('educacion')
let lunes = document.getElementById('lunes')
let martes = document.getElementById('martes')
let miercoles = document.getElementById('miercoles')
let jueves = document.getElementById('jueves')
let viernes = document.getElementById('viernes')
let sabado = document.getElementById('sabado')

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
    let dias = dias_select(lunes, martes, miercoles, jueves, viernes, sabado)
    $button.addEventListener("click", (event) => {
        event.preventDefault()
        try {
            if (letras($nombre) && letras($apellido) && documento($documento) && email($email) && Constraseña($Constraseña)) {
                if (letras($rol) && letras($educacion)) {
                    if (validar_condicion($Condicion_1, $Condicion_2, $Condicion_3, $Condicion_4, $Condicion_5)) {
                        if ($Constraseña.value == $Constraseña_confirm.value) {
                            postData2(nivel ,$nombre, $apellido, $Constraseña, $tipo_doc, $documento, $email, $rol, $educacion, dias, $Condicion_1, $Condicion_2, $Condicion_3, $Condicion_4, $Condicion_5)
                        } else {
                            $Constraseña.classList.add('e')
                            $Constraseña_confirm.classList.add('e')
                            throw new Error("Las contraseñas no son iguales")
                        }
                    }
                    else if (!validar_condicion($Condicion_1, $Condicion_2, $Condicion_3, $Condicion_4, $Condicion_5)) {
                        throw new Error("Revisar los campos de las condiciones")
                    }
                }
                else if (!letras($rol) || !letras($educacion)){
                    letras($rol)
                    letras($educacion)
                    throw new Error(`Revisar los campos de la información del ${nivel}`)
                }
            }
            else if (!letras($nombre) || !letras($apellido) || !documento($documento) || !email($email) || !Constraseña($Constraseña)) {
                letras($nombre)
                letras($apellido)
                documento($documento)
                email($email)
                Constraseña($Constraseña)
                letras($rol)
                letras($educacion)
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