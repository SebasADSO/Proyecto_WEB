export const letras = element => {
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
 export const telefono = element => {
    const regex_tel = /^[0-9]+$/;
    if (regex_tel.test(element.value) && element.value.trim().length >=9 && element.value.trim().length <=10) {
      element.classList.remove("e")
      element.classList.add("b")
      return true
    }
    else if (!regex_tel.test(element.value)) {
      element.classList.remove("b")
      element.classList.add("e")
      return false
    }
  }
  export const documento = element => {
    const regex_doc = /^[0-9]+$/;
    if (regex_doc.test(element.value) && element.value.trim().length > 0) {
        element.classList.remove("e")
        element.classList.add("b")
        return true
      }
      else if (!regex_doc.test(element.value) || element.value.trim().length == 0) {
        element.classList.remove("b")
        element.classList.add("e")
        return false
      }
  }
  /// La contraseña debe tener minimo 8 y un maximo de 15 caracteres, en los cuales debe incluir una minuscula, mayuscula, un numero y un caracter especial ($@$!%*?&)
  export const Constraseña = element => {
    const $base = document.getElementById('contra_label')
    const $span = document.createElement('span')
    const regex_dire = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (!regex_dire.test(element.value) || element.value.trim().length == 0) {
      if ($base.children.length == 3) {
        element.classList.remove("b")
        element.classList.add("e")
        return false
      } else {
        element.classList.remove("b")
        element.classList.add("e")
        $span.classList ='span'
        $span.setAttribute("id", "wrong")
        $span.innerHTML = "La contraseña debe tener minimo 8 y un maximo de 15 caracteres, en los cuales debe incluir una minuscula, mayuscula, un numero y un caracter especial ($@$!%*?&)"
        $base.insertBefore($span, $base.children[2])
        return false
      }
    }
    else if (regex_dire.test(element.value) && element.value.trim().length > 0) {
      if ($base.children.length == 3) {
        let remove = document.getElementById('wrong')
        remove.remove()
        element.classList.remove("e")
        element.classList.add("b")
        return true
      }
      else {
        element.classList.remove("e")
        element.classList.add("b")
        return true
      }   
    }
  }

  export const email = element => {
    const regex_email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (regex_email.test(element.value) && element.value.trim().length > 0) {
        element.classList.remove("e")
        element.classList.add("b")
        return true
      }
      else if (!regex_email.test(element.value) || element.value.trim().length == 0) {
        element.classList.remove("b")
        element.classList.add("e")
        return false
      }
  }