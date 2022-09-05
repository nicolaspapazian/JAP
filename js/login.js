document.getElementById("botonIngreso").addEventListener("click", saveEmail)

document.getElementById("botonIngreso").addEventListener("click", validacionLogin)


function saveEmail() {
    var mail = document.getElementById("exampleInputEmail1").value
    var password = document.getElementById("exampleInputPassword1").value
    var checkBox = document.getElementById("exampleCheck1").checked
    if (mail != null && password != null && checkBox ) {
    localStorage.setItem("user",JSON.stringify(mail) )
    let username = localStorage.getItem("user")
    document.getElementById("username").innerHTML = username   



   
    }
     
}



function validacionLogin() {
    var mail = document.getElementById("exampleInputEmail1").value
    var password = document.getElementById("exampleInputPassword1").value
    var checkBox = document.getElementById("exampleCheck1").checked
    if (mail != null && password != null && checkBox ) {
        window.location.replace("https://nicolaspapazian.github.io/JAP/")



    } else {
        alert("Debe completar ambos campos.")
    }

  
}

