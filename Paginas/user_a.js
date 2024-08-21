import { letras, email, documento, Constraseña } from "../Js/module_user.js";
import { Nombre, cod, date } from "../Js/module_rol.js"
import { buscar } from "../Js/doc_tipo.js";
import { update_data } from "../Js/module_postdata.js"
import { URL } from "../Js/config.js";
import { userinfo } from "../Js/module_get.js";

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

///-------------///
const $Condicion_1 = document.getElementById('Condicion_1')
const $Condicion_2 = document.getElementById('Condicion_2')
const $Condicion_3 = document.getElementById('Condicion_3')
const $Condicion_4 = document.getElementById('Condicion_4')
const $Condicion_5 = document.getElementById('Condicion_5')

//------------------///
let id = localStorage.getItem("user")
userinfo(id ,$nombre, $apellido, $Constraseña, $tipo_doc, $documento, $email, $cod_program, $cod_ficha,$name_program, $start_lect, $end_lect, $product, $jornada)

const $button_update = document.getElementById("update")
const $button_modificar = document.getElementById("modificar")


$button_update.addEventListener("click", (event)=> {
    event.preventDefault()
    console.log($nombre.value)
    update_data(id ,$nombre, $apellido, $Constraseña, $tipo_doc, $documento, $email, $cod_program, $cod_ficha, $name_program, $start_lect, $end_lect, $product, $jornada)
})
$button_modificar.addEventListener("click", (event)=> {
    event.preventDefault()
    let disabledElements = document.querySelectorAll('[disabled]');
    console.log(disabledElements.length)
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