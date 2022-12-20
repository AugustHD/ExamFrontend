const addForm = document.querySelector("#addProductForm");
addForm.addEventListener("submit", (event) => {
    event.preventDefault();


const formData = new FormData(addForm);
console.log(formData.get("name"))
const data = Object.fromEntries(formData);

// Dette virker ikke. Returnere en null. Har noget med response.json() at gøre.
    fetch("http://localhost:8080/api/products/addProduct", {
        method: "POST",
        headers: {
            "content-type": "application/json",

        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
});