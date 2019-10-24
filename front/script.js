const nombre = document.getElementById("nombre")
const imagen = document.getElementById("imagen")
const password = document.getElementById("password")
const email = document.getElementById("email")

let posts = []


button.addEventListener("click", function () {
    let post = {
        nombre: nombre.value,
        imagen: imagen.value,
        password: password.value,
        email: email.value
    }
    posts.push(post)
    createListItem(post)
   
})


function createListItem(post) {
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    h1.innerHTML = post.titulo
    img.src = post.img
    li.appendChild(h1)
    li.appendChild(img)
    ul.appendChild(p)
}