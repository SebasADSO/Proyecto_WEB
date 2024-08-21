import { letras, email, documento, Constraseña } from "../Js/module_user.js";
import { Nombre, cod, date } from "../Js/module_rol.js"
import { buscar, educacion } from "../Js/doc_tipo.js";
import { update_data2 } from "../Js/module_postdata.js"
import { URL } from "../Js/config.js";
import { userinfo2 } from "../Js/module_get.js";

buscar()

let $nombre = document.getElementById('nombre');
let $apellido = document.getElementById('apellido');
let $tipo_doc = document.getElementById('tipo_doc');
let $documento = document.getElementById('documento');
let $email = document.getElementById('email');
let $Constraseña = document.getElementById('Constraseña');

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

let $educacion = document.getElementById('educacion')
let $dias = document.getElementById('dias')

$educacion.addEventListener("click", ()=>{
    letras($educacion)
})
$dias.addEventListener("click", ()=>{
    letras($dias)
})

let id = localStorage.getItem("user")

userinfo2(id, $nombre, $apellido, $Constraseña, $tipo_doc, $documento, $email, $educacion, $dias)

const $button_update = document.getElementById("update")
const $button_modificar = document.getElementById("modificar")

$button_update.addEventListener("click", (event)=> {
    event.preventDefault()
    update_data2(id, $nombre, $apellido, $Constraseña, $tipo_doc, $documento, $email, $educacion, $dias)
})
$button_modificar.addEventListener("click", (event)=> {
    event.preventDefault()
    let disabledElements = document.querySelectorAll('[disabled]');
    if (disabledElements.length > 0) {
        for (let i = 0; i < disabledElements.length; i++) {
            const element = disabledElements[i];
            element.removeAttribute("disabled");
    }
    }
    else if (disabledElements.length <= 0) {
        let inputElements = document.querySelectorAll('input');
        console.log(inputElements.length)
        for (let i = 0; i < inputElements.length; i++) {
            const element = inputElements[i];
            element.setAttribute("disabled", "");
        }
    }
})