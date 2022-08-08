document.addEventListener('DOMContentLoaded', main )

async function main() {
    const response = await fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")
    const json = await response.json()
    document.getElementById("catList").textContent = JSON.stringify(json, undefined, 2)
}