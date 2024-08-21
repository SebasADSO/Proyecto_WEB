const $template = document.querySelector("template").content
const fragmento = document.createDocumentFragment()
const $table = document.querySelector("table")
console.log($template)

const listar = async () => {
  try {
    const respuesta = await fetch("http://127.0.0.1:3000/users", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const datos = await respuesta.json()
    datos.forEach(element => {
      $template.querySelector("tr").id = `user_${element.id}`;
      $template.querySelector(".id").textContent = element.id;
      $template.querySelector(".name").textContent = element.nombre;
      $template.querySelector(".t_doc").textContent = element.apellido;
      $template.querySelector(".ndoc").textContent = element.tipo_de_docemento;
      $template.querySelector(".email").textContent = element.documento;
      $template.querySelector(".direccion").textContent = element.email;
      $template.querySelector(".telefono").textContent = element.estado;
      $template.querySelector(".edit").setAttribute("data_id", element.id);
      let clone = document.importNode($template, true);
      fragmento.appendChild(clone)
    });
    $table.querySelector("tbody").appendChild(fragmento)
  } catch (error) {
    console.log(error)
  }
}
listar()

document.addEventListener("click", (event) => {
    let element = "";
    if (event.target.matches(".edit") || event.target.matches(".edit *")) {
      element = event.target.matches(".edit") ? event.target : event.target.parentNode;
      const id = element.getAttribute("data_id");
      const modal = document.getElementById("modal");
      const modalContent = modal.querySelector(".modal-content");
      const form = modalContent.querySelector("form");
      const nameInput = form.querySelector("#name");
      const tDocInput = form.querySelector("#t_doc");
      const ndocInput = form.querySelector("#ndoc");
      const emailInput = form.querySelector("#email");
      const direccionInput = form.querySelector("#direccion");
      const telefonoInput = form.querySelector("#telefono");
  
      // Cargar los datos del elemento seleccionado en el formulario del modal
      fetch(`http://127.0.0.1:3000/users/${id}`)
        .then(response => response.json())
        .then(data => {
          nameInput.value = data.id;
          tDocInput.value = data.nombre + "" + data.apellido;
          ndocInput.value = data.tipo_de_docemento;
          emailInput.value = data.documento;
          direccionInput.value = data.email;
          telefonoInput.value = data.estado;
        })
        .catch(error => console.error(error));
  
      // Mostrar el modal
      modal.classList.add("show");
  
      // Agregar evento al botón de guardar cambios
      document.getElementById("save-btn").addEventListener("click", () => {
        const formData = new FormData(form);
    fetch(`http://127.0.0.1:3000/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         estado: telefonoInput.value
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Datos actualizados:", data);
        // Cerrar el modal
        modal.classList.remove("show");
      })
      .catch(error => console.error(error));
    } );
    }
  });