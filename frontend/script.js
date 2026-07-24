const API_URL = "http://localhost:3000/products";


// Load products when page opens
window.onload = function () {
    getProducts();
};


// GET all products
function getProducts() {

    fetch(API_URL)
        .then(response => response.json())
        .then(products => {

            let productList = document.getElementById("productList");

            productList.innerHTML = "";

            products.forEach(product => {

                productList.innerHTML += `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.perfume_name}</td>
                        <td>${product.brand}</td>
                        <td>${product.category}</td>
                        <td>${product.price}</td>
                        <td>${product.quantity}</td>

               <td>
    <button onclick="editProduct(${product.id})">
        Edit
    </button>

    <button onclick="deleteProduct(${product.id})">
        Delete
    </button>
</td>

                    </tr>
                `;

            });

        })

        .catch(error => {
            console.log("Error:", error);
        });
}


// POST add product
function addProduct() {

    const product = {

        perfume_name: document.getElementById("perfume_name").value,
        brand: document.getElementById("brand").value,
        category: document.getElementById("category").value,
        price: document.getElementById("price").value,
        quantity: document.getElementById("quantity").value

    };


    fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(product)

    })

    .then(response => response.json())

    .then(() => {

        getProducts();

    });

}



// DELETE product
function deleteProduct(id) {


    fetch(`${API_URL}/${id}`, {

        method: "DELETE"

    })

    .then(() => {

        getProducts();

    });

}

function searchProduct(){

    let input = document
    .getElementById("search")
    .value
    .toLowerCase();


    let rows = document
    .getElementById("productList")
    .getElementsByTagName("tr");


    for(let i = 0; i < rows.length; i++){

        let text = rows[i].innerText.toLowerCase();


        if(text.includes(input)){

            rows[i].style.display = "";

        }

        else{

            rows[i].style.display = "none";

        }

    }

}



function logout(){

    window.location.href = "index.html";

}

function editProduct(id){

    let perfume_name = prompt("Enter new perfume name:");
    let brand = prompt("Enter new brand:");
    let category = prompt("Enter new category:");
    let price = prompt("Enter new price:");
    let quantity = prompt("Enter new quantity:");

    let product = {
        perfume_name,
        brand,
        category,
        price,
        quantity
    };


    fetch(`${API_URL}/${id}`, {

        method:"PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(product)

    })

    .then(response=>response.json())

    .then(()=>{

        getProducts();

    });

}
