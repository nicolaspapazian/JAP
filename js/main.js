document.addEventListener('DOMContentLoaded', mostrarUser)


function mostrarUser (){
    let username = localStorage.getItem("user") 
    document.getElementById("email").innerHTML = username   
}