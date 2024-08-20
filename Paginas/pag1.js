import { logout } from "../Js/redireccionar.js";

const reportar = document.getElementById("Reportar")
const consulta = document.getElementById("Consulta")
const user = document.getElementById("User")
const config = document.getElementById("Config")

const home = document.getElementById("home")

const rol = localStorage.getItem("rol")

home.addEventListener("click", ()=>{
    logout()
})

reportar.addEventListener("click", () => {
    location.href="../Paginas/reportar.html"
})
consulta.addEventListener("click", () => {
    location.href="../Paginas/consultar.html"
})
user.addEventListener("click", () => {
    switch (rol) {
        case "aprendiz":
            location.href="../Paginas/user_a.html"
            break;
        case "instructor":
            location.href="../Paginas/user_f.html"
            break;
        case "funcionario":
            location.href="../Paginas/user_f.html"
            break;
        default:
            alert("ERROR...")
            break;
    }
})
config.addEventListener("click", () => {
    location.href="../Paginas/config.html"
})