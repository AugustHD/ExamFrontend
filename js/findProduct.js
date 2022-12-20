//TODO: Få findProduct til at virke.
// Dette er nok ikke den rigtige måde at gøre det på..

const findForm = document.querySelector("#findProductForm");
findForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(addForm);
console.log(formData.get("name"))
const data = Object.fromEntries(formData);

    fetch("http://localhost:8080/api/products/findProduct", {
        method: "GET",
        headers: {
            "content-type": "application/json",
    
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
})