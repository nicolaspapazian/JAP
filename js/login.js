document.getElementById("botonIngreso").addEventListener("click", validarYguardar)



function validarYguardar() {
    var mail = document.getElementById("exampleInputEmail1").value
    var password = document.getElementById("exampleInputPassword1").value
    var checkBox = document.getElementById("exampleCheck1").checked
    if (mail != null && password != null && checkBox ) {
        localStorage.setItem("user",JSON.stringify(mail) )
        let username = localStorage.getItem("user") 
        document.querySelectorAll("email").innerHTML = username   
         
    }
    if (mail != null && password != null && checkBox ) {
        document.location.replace("main.html")



    } else {
        alert("Debe completar ambos campos.")
    }

    

    
     
}





