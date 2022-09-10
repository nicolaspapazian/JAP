document.addEventListener('DOMContentLoaded', mostrarUser)


function mostrarUser (){
    const username = (localStorage.getItem("user"))
    const usernameCleansed = username.replace(/['"]+/g, '');
    document.getElementById("email").innerHTML = usernameCleansed
}