import {text_null} from "../Js/module_user.js"
import { postDataReport } from "../Js/module_postdata.js";
import { logout } from "../Js/redireccionar.js";


const title_c = document.getElementById("Menu_form--title")
const title = document.getElementById("titulo")

const desc_c = document.getElementById("Menu_form--desc")
const desc = document.getElementById("descripcion")

const site_c = document.getElementById("Menu_form--site")
const site = document.getElementById("lugar")

const home = document.getElementById("home")

home.addEventListener("click", ()=>{
    logout()
})

title.addEventListener("blur", (event) => {
    event.preventDefault()
    text_null(title, title_c)
})

desc.addEventListener("blur", (event) => {
    event.preventDefault()
    text_null(desc, desc_c)
})

site.addEventListener("blur", (event) => {
    event.preventDefault()
    text_null(site, site_c)
})

const user_id = localStorage.getItem("user=")

const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
const fecha = hoy.toDateString();


const subir = document.getElementById("subir")

subir.addEventListener("click", (event) => {
    if (text_null(title, title_c)) {
        if (text_null(title, title_c)) {
            if (text_null(site, site_c)) {
                event.preventDefault()
                postDataReport(user_id, title, desc, site, fecha)
                location.href="../Paginas/index.html"
            }else {
                text_null(site, site_c)
            }
        }else {
            text_null(title, title_c)
        }
    }else {
        text_null(title, title_c)
    }
})
