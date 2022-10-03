document.addEventListener('DOMContentLoaded', mostrarUser)


function mostrarUser (){
    const username = (localStorage.getItem("user"))
    const usernameCleansed = username.replace(/['"]+/g, '');
    document.getElementById("email").innerHTML = usernameCleansed
}


document.getElementById("autos").addEventListener("click", setCatID)
document.getElementById("juguetes").addEventListener("click", setCatID)
document.getElementById("muebles").addEventListener("click", setCatID)


function setCatID(id) {
    localStorage.setItem("catID", id);
    window.location = "products.html"
    

}
