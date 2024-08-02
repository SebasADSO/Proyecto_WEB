const login = async function (tipo, num, pass) {
    const td = await fetch("http://127.0.0.1:3000/users", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const result_one = await td.json()
      result_one.forEach(element => {
        if (element.tipo_de_docemento == tipo.value && element.documento == num.value && element.constraseña == pass.value) {
            console.log("Correcto")
            localStorage.setItem("user=", num.value)
            location.href="../Paginas/index.html"
        }
        else if (!element.tipo_de_docemento == tipo.value && !element.documento == num.value && !element.constraseña == pass.value && element.id == 1) {
            console.log("Buscando")
        }
      });
}
export default login;