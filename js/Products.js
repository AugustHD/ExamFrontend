window.onload = getProducts;

async function getProducts() {
    let url = 'http://localhost:8080/api/products';
    let response = await fetch(url);
    let data = await response.json();
    let target = document.getElementById("target");
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdWeight = document.createElement("td");
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdWeight)
        tdName.append(data[i].name);
        tdPrice.append(data[i].price + " kr");
        tdWeight.append(data[i].weight + "g")
        target.appendChild(tr);
    }
}
