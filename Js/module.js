export const letras = element => {
    let regex_nom = /^[a-zA-Z ]+$/;
    if (regex_nom.test(element.value)) {
      element.classList.remove("e")
      element.classList.add("b")
    }
    else if (!regex_nom.test(element.value)) {
      element.classList.remove("b")
      element.classList.add("e")
    }
  }
 export const telefono = element => {
    const regex_tel = /^[0-9]+$/;
    if (regex_tel.test(element.value) && element.value.length >=9 && element.value.length <=10) {
      element.classList.remove("e")
      element.classList.add("b")
    }
    else if (!regex_tel.test(element.value)) {
      element.classList.remove("b")
      element.classList.add("e")
    }
  }
  export const documento = element => {
    const regex_doc = /^[0-9]+$/;
    if (regex_doc.test(element.value)) {
        element.classList.remove("e")
        element.classList.add("b")
        return true
      }
      else if (!regex_doc.test(element.value)) {
        element.classList.remove("b")
        element.classList.add("e")
        return false
      }
  }
  export const Constraseña = element => {
    const regex_dire = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (regex_dire.test(element.value)) {
        element.classList.remove("e")
        element.classList.add("b")
      }
      else if (!regex_dire.test(element.value)) {
        element.classList.remove("b")
        element.classList.add("e")
      }
  }
  export const email = element => {
    const regex_email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (regex_email.test(element.value)) {
        element.classList.remove("e")
        element.classList.add("b")
      }
      else if (!regex_email.test(element.value)) {
        element.classList.remove("b")
        element.classList.add("e")
      }
  }