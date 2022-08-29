document.addEventListener('DOMContentLoaded', main)
/*  document.addEventListener('DOMContentLoaded', showCategoriesList)*/

async function main() {
    const response = await fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")
    const json = await response.json()
    console.log(json)
    var jsonArreglo = []
    for (var i in json) {
        jsonArreglo.push(json[i])

    }
    console.log(jsonArreglo)
    var productosArreglo = []
    productosArreglo.push(jsonArreglo[2])
    console.log(productosArreglo)
    let htmlContentToAppend = ''

    for (let i = 0; i < productosArreglo.length; i++) {
        for (let j = 0; j < productosArreglo[i].length; j++) {

            let category = productosArreglo[i][j].id
            console.log(productosArreglo[i][j])



            htmlContentToAppend += `
            
            <div onclick="setCatID(${category})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${productosArreglo[i][j].image}" alt="${productosArreglo[i][j].description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${productosArreglo[i][j].name}</h4> <h4 class="mb-1"> asdasd asdasd </h4>
                            </br>

                            <small class="text-muted">${productosArreglo[i][j].soldCount} artículos</small>

                        </div>
                        <p class="mb-1">${productosArreglo[i][j].description}</p>
                    </div>
                </div>
            </div>
            <br />
            `

                                                    
                


            document.getElementById("productosLista").innerHTML = htmlContentToAppend;


        }
    }
}


/*<div onclick="setCatID(${category})" class="list-group-item list-group-item-action cursor-active">
    <div class="row">
        <div class="col-3">
            <img src="${productosArreglo[i][j].image}" alt="${productosArreglo[i][j].description}" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">${productosArreglo[i][j].name}</h4>
                <small class="text-muted">${productosArreglo[i][j].soldCount} artículos</small>
            </div>
            <p class="mb-1">${productosArreglo[i][j].description}</p>
        </div>
    </div>
</div>
*/











/* var jsonArray = []
jsonArray.push(JSON.stringify(json, undefined, 2))

function showCategoriesList() {

    let htmlContentToAppend = "";
    for (let i = 0; i < jsonArray.length; i++) {
        let category = jsonArray[i];



        htmlContentToAppend += `
            <div onclick="setCatID(${category.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${category.imgSrc}" alt="${category.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${category.name}</h4>
                            <small class="text-muted">${category.productCount} artículos</small>
                        </div>
                        <p class="mb-1">${category.description}</p>
                    </div>
                </div>
            </div>
            `


        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}
*/




/* async function main() {
    const response = await fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")
    const json = await response.json()
    console.log(json)
    var jsonArreglo = []
    jsonArreglo.push(json)
    console.log(jsonArreglo)
    var productosArreglo = []
    productosArreglo.push(jsonArreglo[0].products)
    console.log(productosArreglo)
    
        



    


    
    

    /*jsonArreglo.forEach((element) => {  NO FUNCIONA PORQUE NECESITO RECORRER/ITERAR EN EL ARRAY EL INDICE, NO SOLO INSTRUCCIONES POR CADA OBJETO*/

/* for (let i = 0; i < jsonArreglo.length; i++) {
     let htmlContentToAppend = ''

     let category = jsonArreglo[i]
     console.log(category)

     htmlContentToAppend += `
         <div onclick="setCatID(${category.id})" class="list-group-item list-group-item-action cursor-active">
             <div class="row">
                 <div class="col-3">
                     <img src="${category.imgSrc}" alt="${category.description}" class="img-thumbnail">
                 </div>
                 <div class="col">
                     <div class="d-flex w-100 justify-content-between">
                         <h4 class="mb-1">${category.name}</h4>
                         <small class="text-muted">${category.productCount} artículos</small>
                     </div>
                     <p class="mb-1">${category.description}</p>
                 </div>
             </div>
         </div>
         `
     document.getElementById("cat-list-container").innerHTML = htmlContentToAppend

 }
 */


