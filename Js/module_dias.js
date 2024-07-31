export const dias_select = function(lunes, martes, miercoles, jueves, viernes, sabado) {
    let dias =""
    if (lunes.checked) {
        dias += lunes.value
    }
    if (martes.checked) {
        dias += " " + martes.value
    }
    if (miercoles.checked) {
        dias += " " + miercoles.value
    }
    if (jueves.checked) {
        dias += " " + jueves.value
    }
    if (viernes.checked) {
        dias += " " + viernes.value
    }
    if (sabado.checked) {
        dias += " " + sabado.value
    }
    return dias
}