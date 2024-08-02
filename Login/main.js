import { buscar } from "../Js/doc_tipo.js";
import login from "../Js/module_get.js";

buscar()

let $tipo = document.getElementById('tipo_doc')
let $num_doc = document.getElementById('user_login')
let $pass = document.getElementById('password_login')
let $singup = document.getElementById('Login')








$singup.addEventListener("click", ()=> {
    login($tipo, $num_doc, $pass)
    // console.log("e")
    // localStorage.setItem("tipo=", $tipo.value)
    // localStorage.setItem("user=", $num_doc.value)
    // localStorage.setItem("pass=", $pass.value)
})