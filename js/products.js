


document.addEventListener('DOMContentLoaded', main)

/*  document.addEventListener('DOMContentLoaded', showCategoriesList)*/

const currentID = localStorage.getItem("catID")

document.addEventListener('DOMContentLoaded', mostrarCatName())



async function main() {
    var url = "https://japceibal.github.io/emercado-api/cats_products/" + currentID + ".json"
    var response = await fetch(url)
    var json = await response.json()
    console.log(json.name)
    var jsonArreglo = []
    for (var i in json) {
        jsonArreglo.push(json[i])

    }
    console.log(jsonArreglo.name)
    var productosArreglo = []
    productosArreglo.push(jsonArreglo[2])
    console.log(productosArreglo)
    let htmlContentToAppend = ''

    for (let i = 0; i < productosArreglo.length; i++) {
        for (let j = 0; j < productosArreglo[i].length; j++) {

            let category = productosArreglo[i][j].id
            console.log(productosArreglo[i][j])
            mostrarCatName(category)



            htmlContentToAppend += `
            
            <div onclick="setCatID(${category})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${productosArreglo[i][j].image}" alt="${productosArreglo[i][j].description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${productosArreglo[i][j].name}
                            <h4 class="mb-1">${productosArreglo[i][j].currency} ${productosArreglo[i][j].cost}

                            </br>

                            <small class="text-muted">${productosArreglo[i][j].soldCount} art�culos</small>

                        </div>
                        <p class="mb-1">${productosArreglo[i][j].description}</p>
                    </div>
                </div>
            </div>
            <br />
            `
            document.getElementById("productosLista").innerHTML = htmlContentToAppend
                                                    
                

            


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
                <small class="text-muted">${productosArreglo[i][j].soldCount} art�culos</small>
            </div>
            <p class="mb-1">${productosArreglo[i][j].description}</p>
        </div>
    </div>
</div>
*/

async function mostrarCatName (){
    var url2 = "https://japceibal.github.io/emercado-api/cats_products/" + currentID + ".json"
    const response2 = await fetch(url2)
    const json2 = await response2.json()
    var json2cat = []
    json2cat.push(json2)
    console.log(json2.name)
    console.log(json2cat)
    for (let index = 0; index < json2cat.length; index++) {
        let show = json2cat[index]
        let categories = []
        categories.push(show)
        console.log(categories)

        console.log(show)

        for (let index = 0; index < show.length; index++) {
            let showIndexed = show[index].name
            console.log(showIndexed)
             

            document.getElementById("verCat").innerHTML = `Veras aqui los productos de la categoria: ${showIndexed} `


        }

        //let showIndexed = show[index]

    }
    
    
}



/*function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.productCount);
            let bCount = parseInt(b.productCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function setCatID(id) {
    localStorage.setItem("catID", id);
    window.location = "products.html"
}

function showCategoriesList(){
    currentCategoriesArray.push()

    let htmlContentToAppend = "";
    for(let i = 0; i < currentCategoriesArray.length; i++){
        let category = currentCategoriesArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(category.productCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(category.productCount) <= maxCount))){

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
        }

        document.getElementById("productosLista").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

    //Muestro las categorías ordenadas
    showCategoriesList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CATEGORIES_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCategoriesArray = resultObj.data
            showCategoriesList()
            //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_NAME);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_BY_NAME);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showCategoriesList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showCategoriesList();
    });
});

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
                            <small class="text-muted">${category.productCount} art�culos</small>
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
                         <small class="text-muted">${category.productCount} art�culos</small>
                     </div>
                     <p class="mb-1">${category.description}</p>
                 </div>
             </div>
         </div>
         `
     document.getElementById("cat-list-container").innerHTML = htmlContentToAppend

 }
 */


