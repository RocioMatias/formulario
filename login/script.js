// service
//   .login("example", "1234")
//   .then(function(p) {
//     console.log("el login fue exitoso");
//     console.log(user);
//   })
//   .catch(function() {
//     console.log("el login fue erroneo");
//   });

const button = document.getElementById("login_button")
const userInput = document.getElementById("user_input")
const passInput = document.getElementById("user_pass")

button.addEventListener("click", function() {
  console.log(userInput.value.length)
  console.log(passInput.value.length)

  if (userInput.value.length === 0 || passInput.value.length === 0) {
    alert("uno de los campos esta vacio ")
  } else {
    service
      .login(userInput.value, passInput.value)
      .then(function(user) {
        console.log("user")
        alert("Bienvenido")
      })
      .catch(function() {
        alert("incorrecto, intenta de nuevo")
        userInput.value = ""
        passInput.value = ""
      })
  }
})

service
  .getUsers()
  .then(function(users) {
    //   console.log(users)
    for (let i = 0; i < users.length; i++) {
      const li = document.createElement("li")
      li.innerHTML = users[i].name
      document.querySelector("h1").appendChild(li)
    }
  })
  .catch(function() {})
