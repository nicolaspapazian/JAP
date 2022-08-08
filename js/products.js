document.addEventListener('DOMContentLoaded', main)
document.addEventListener('DOMContentLoaded', showCategoriesList)


var jsonArray = JSON.stringify (main(), undefined, 2)


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


        document.getElementById("catList").innerHTML = htmlContentToAppend;
    }
}





async function main() {
    const response = await fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")
    const json = await response.json()
    var arrayCat101 = []

    for (var i in json) {
        arrayCat101.push(json[i])
    }

    return arrayCat101

}

