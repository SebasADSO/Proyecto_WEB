import { buscar } from "../Js/doc_tipo.js";
import login from "../Js/module_get.js";
import {num_isnull, pass_isnull} from "../Js/module_user.js"

buscar()

let $tipo = document.getElementById('tipo_doc')
let $num_doc = document.getElementById('user_login')
let $pass = document.getElementById('password_login')
let $singup = document.getElementById('Login')



$num_doc.addEventListener("blur", (event) => {
    num_isnull($num_doc)
})
$pass.addEventListener("blur", (event) => {
    pass_isnull($pass)
})

$singup.addEventListener("click", (event)=> {
    event.preventDefault()
    if (!num_isnull($num_doc) || !pass_isnull($pass)) {
        pass_isnull($pass)
        num_isnull($num_doc)
    }
    else if (num_isnull($num_doc) && pass_isnull($pass)) {
        pass_isnull($pass)
        num_isnull($num_doc)
        login($tipo, $num_doc, $pass)
    }
})