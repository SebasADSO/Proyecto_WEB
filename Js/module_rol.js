export const Nombre = element => {
    let regex_nom = /^[a-zA-ZñÑ ]+$/;
    if (regex_nom.test(element.value) && element.value.trim().length > 0) {
      element.classList.remove("e")
      element.classList.add("b")
      return true
    }
    else if (!regex_nom.test(element.value) || element.value.trim().length == 0) {
      element.classList.remove("b")
      element.classList.add("e")
      return false
    }
  }
 export const cod = element => {
    const regex_tel = /^[0-9]+$/;
    if (regex_tel.test(element.value) && element.value.trim().length > 0) {
      element.classList.remove("e")
      element.classList.add("b")
      return true
    }
    else if (!regex_tel.test(element.value) || element.value.trim().length == 0) {
      element.classList.remove("b")
      element.classList.add("e")
      return false
    }
  }
  export const date = element => {
    const regex_dire = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;
    if (regex_dire.test(element.value) && element.value.trim().length > 0) {
        element.classList.remove("e")
        element.classList.add("b")
        return true
      }
      else if (!regex_dire.test(element.value) || element.value.trim().length == 0) {
        element.classList.remove("b")
        element.classList.add("e")
        return false
      }
  }