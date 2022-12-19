window.onload = getProducts;

async function getProducts() {
    let url = 'http://localhost:8080/api/products';
    let response = await fetch(url);
    let data = await response.json();
    let target = document.getElementById("target");
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        tr.appendChild(td);
        td.append(data[i].name);
        target.appendChild(tr);
    }
}