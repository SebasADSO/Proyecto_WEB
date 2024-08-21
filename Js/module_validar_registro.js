// export const validar_user = function (nombre, apellido, contraseña, documento, email, tipo_doc) {
//     let regex_nom = /^[a-zA-Z ]+$/;
//     const regex_num = /^[0-9]+$/;
//     const regex_doc = /^[0-9]+$/;
//     const regex_dire = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;;
//     const regex_email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//           try {
//             nombre = document.getElementById('nombre').value;
//             apellido = document.getElementById('apellido').value;
//             contraseña = document.getElementById('Constraseña').value;
//             documento = document.getElementById('documento').value;
//             email = document.getElementById('email').value;
//             tipo_doc = document.getElementById('tipo_doc').value
//             if (nombre == "" || documento == "" || apellido == "" || email == "" || Constraseña == "") {
//               throw new Error('No puede dejar campos vacios')
//             }
//             else if (!regex_nom.test(nombre) || !regex_nom.test(apellido)) {
//                 throw new Error('Solo se permite letras en el los campos de nombre y apellido')
//               }
//             else if (regex_nom.test(nombre) && regex_nom.test(apellido)) {
//               if (regex_doc.test(documento)) {
//                 if (regex_email.test(email)) {
//                   return true
//                 }
//                 else if (!regex_doc.test(documento)) {
//                   throw new Error('El documento es invalido')
//                 }
//               }
//             }
//             else {
//                 throw new Error('Desconocido 404')
//               }
//           }catch (error) {
//             alert(error)
//           }
// }

// export const validar_rol = function (cod_program, cod_ficha, name_program, start_lect, end_lect, product, jornada) {
//     const regex_tel = /^[0-9]+$/;
//     const regex_fecha = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;
//     let regex_nom = /^[a-zA-ZñÑ ]+$/;
//     try {
//       let cod_program = document.getElementById('cod_program').value;
//       let cod_ficha = document.getElementById('cod_ficha').value;
//       let name_program = document.getElementById('name_program').value;
//       let start_lect = document.getElementById('start_lect').value;
//       let end_lect = document.getElementById('end_lect').value;
//       let product = document.getElementById('product').value;
//       let jornada = document.getElementById('jornada').value;
//         if (cod_program == "" || cod_ficha == "" || name_program == "" || start_lect == "" || end_lect == "" || product == "") {
//             throw new Error('No puede dejar campos vacios')
//           }
//           else if (!regex_nom.test(name_program)) {
//               throw new Error('Solo se permite letras en el campo de nombre del programa')
//             }
//             else if (!regex_tel.test(cod_program) || !regex_tel.test(cod_ficha)) {
//               throw new Error('Solo se permite numeros en el campo de codigo de programa y numero de ficha')
//             }
//            else if (regex_nom.test(name_program) && regex_tel.test(cod_program) || regex_tel.test(cod_ficha)) {
//             if (regex_fecha.test(start_lect) || regex_fecha.test(end_lect) || regex_fecha.test(product)) {
//               if (regex_email.test(email)) {
//                 return true
//               }
//               else if (!regex_doc.test(documento)) {
//                 throw new Error('Las fechas son invalidas')
//               }
//             }
//           }
//           else {
//               throw new Error('Desconocido 404')
//             }
//     } catch (error) {
//         alert(error)
//     }
// }

export const validar_condicion = function (Condicion_1, Condicion_2, Condicion_3, Condicion_4, Condicion_5) {
  if (!Condicion_1 == "" || !Condicion_2 == "" || !Condicion_3 == "" || !Condicion_4 == "" || !Condicion_5 == "") {
    return true
  } else {
    return false
  }
}