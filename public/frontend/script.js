const API_URL = window.location.hostname === "localhost"
    ? "http://localhost:3000/products"
    : "https://scenthub-h2er.onrender.com/products";
let productsCache = [];

// Load products when page opens
window.onload = function () {
    getProducts();
};


// GET all products
function getProducts() {
    fetch(API_URL)
        .then(response => response.json())
        .then(products => {
            productsCache = products;
            renderProducts(products);
            updateStats(products);
        })
        .catch(error => console.error(error));
}

// POST add product
function addProduct() {
    const name = document.getElementById('perfume_name').value.trim();
    const brand = document.getElementById('brand').value.trim();
    const category = document.getElementById('category').value;
    const priceValue = parseFloat(document.getElementById('price').value);
    const quantityValue = parseInt(document.getElementById('quantity').value, 10);
    const messageEl = document.getElementById('formMessage');

    if (!name || !brand || !category || Number.isNaN(priceValue) || Number.isNaN(quantityValue)) {
        if (messageEl) {
            messageEl.textContent = 'Please fill in all fields before saving.';
        }
        return;
    }

    if (messageEl) {
        messageEl.textContent = '';
    }

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            perfume_name: name,
            brand: brand,
            category: category,
            price: priceValue,
            quantity: quantityValue
        })
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(data.message || 'Unable to add product.');
                });
            }
            return response.json();
        })
        .then(() => {
            clearProductForm();
            toggleForm();
            getProducts();
        })
        .catch(error => {
            if (messageEl) {
                messageEl.textContent = error.message || 'Unable to add product.';
            }
            console.error(error);
        });
}

function submitProductForm() {
    const editingProductId = document.getElementById('editingProductId').value;

    if (editingProductId) {
        updateProduct(editingProductId);
    } else {
        addProduct();
    }
}

function renderProducts(products) {
    const productList = document.getElementById('productList');
    if (!productList) return;

    if (!Array.isArray(products) || products.length === 0) {
        productList.innerHTML = '<tr><td colspan="8">No products found</td></tr>';
        return;
    }

    productList.innerHTML = '';

    products.forEach(product => {
        const quantity = Number(product.quantity || 0);
        let status = 'Out of Stock';

        if (quantity > 0) {
            status = quantity <= 5 ? 'Low Stock' : 'In Stock';
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.perfume_name || ''}</td>
            <td>${product.brand || ''}</td>
            <td>${product.category || ''}</td>
            <td>${product.price ?? 0}</td>
            <td>${quantity}</td>
            <td>${status}</td>
            <td>
                <button type="button" onclick="editProduct(${product.id})">Edit</button>
                <button type="button" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        `;

        productList.appendChild(row);
    });
}

function updateStats(products) {
    const totalProductsEl = document.getElementById('totalProducts');
    const totalStockEl = document.getElementById('totalStock');
    const inventoryValueEl = document.getElementById('inventoryValue');
    const lowStockCountEl = document.getElementById('lowStockCount');

    if (!totalProductsEl || !totalStockEl || !inventoryValueEl || !lowStockCountEl) {
        return;
    }

    const totalProducts = products.length;
    const totalStock = products.reduce((sum, product) => sum + Number(product.quantity || 0), 0);
    const inventoryValue = products.reduce((sum, product) => sum + (Number(product.price || 0) * Number(product.quantity || 0)), 0);
    const lowStockCount = products.filter(product => Number(product.quantity || 0) > 0 && Number(product.quantity || 0) <= 5).length;

    totalProductsEl.textContent = totalProducts;
    totalStockEl.textContent = totalStock;
    inventoryValueEl.textContent = `GH₵ ${inventoryValue.toFixed(2)}`;
    lowStockCountEl.textContent = lowStockCount;
}

function clearProductForm() {
    document.getElementById('editingProductId').value = '';
    document.getElementById('perfume_name').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('category').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('formTitle').textContent = 'Add New Product';
    document.getElementById('saveProductBtn').textContent = 'Save Product';
    document.getElementById('cancelEditBtn').classList.add('hidden');
    document.getElementById('formMessage').textContent = '';
}

// DELETE product
function deleteProduct(id) {
    const confirmed = window.confirm('Are you sure you want to delete this product?');
    if (!confirmed) {
        return;
    }

    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Delete failed');
        }
        return response.json();
    })
    .then(() => {
        getProducts();
    })
    .catch(error => {
        console.error('Error deleting product:', error);
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

    const product = productsCache.find(item => String(item.id) === String(id));
    if (!product) return;

    document.getElementById('editingProductId').value = product.id;
    document.getElementById('perfume_name').value = product.perfume_name || '';
    document.getElementById('brand').value = product.brand || '';
    document.getElementById('category').value = product.category || '';
    document.getElementById('price').value = product.price ?? '';
    document.getElementById('quantity').value = product.quantity ?? '';

    document.getElementById('formTitle').textContent = 'Edit Product';
    document.getElementById('saveProductBtn').textContent = 'Update Product';
    document.getElementById('cancelEditBtn').classList.remove('hidden');
    document.getElementById('formMessage').textContent = '';

    document.getElementById('productForm').classList.remove('hidden');
}

function updateProduct(id) {
    const name = document.getElementById('perfume_name').value.trim();
    const brand = document.getElementById('brand').value.trim();
    const category = document.getElementById('category').value;
    const priceValue = parseFloat(document.getElementById('price').value);
    const quantityValue = parseInt(document.getElementById('quantity').value, 10);
    const messageEl = document.getElementById('formMessage');

    if (!name || !brand || !category || Number.isNaN(priceValue) || Number.isNaN(quantityValue)) {
        if (messageEl) {
            messageEl.textContent = 'Please fill in all fields before updating.';
        }
        return;
    }

    const payload = {
        perfume_name: name,
        brand,
        category,
        price: priceValue,
        quantity: quantityValue
    };

    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(data.message || 'Update failed');
                });
            }
            return response.json();
        })
        .then(() => {
            clearProductForm();
            document.getElementById('productForm').classList.add('hidden');
            getProducts();
        })
        .catch(error => {
            if (messageEl) {
                messageEl.textContent = error.message || 'Unable to update product.';
            }
            console.error(error);
        });
}

function cancelEdit() {
    clearProductForm();
    document.getElementById('productForm').classList.add('hidden');
}

function filterCategory(){


    let category = document
    .getElementById("categoryFilter")
    .value
    .toLowerCase();



    let rows = document
    .getElementById("productList")
    .getElementsByTagName("tr");



    for(let i=0;i<rows.length;i++){


        let rowCategory = rows[i]
        .children[3]
        .innerText
        .toLowerCase();



        if(category === "all" || rowCategory === category){

            rows[i].style.display="";

        }

        else{

            rows[i].style.display="none";

        }


    }


}

function exportCSV() {

    fetch(API_URL)
        .then(response => response.json())
        .then(products => {

            let csv = "ID,Perfume Name,Brand,Category,Price,Quantity\n";

            products.forEach(product => {

                csv += `${product.id},${product.perfume_name},${product.brand},${product.category},${product.price},${product.quantity}\n`;

            });

            const blob = new Blob([csv], { type: "text/csv" });

            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");

            a.href = url;
            a.download = "ScentHub_Inventory.csv";

            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            window.URL.revokeObjectURL(url);

        })
        .catch(error => {
            console.log("Error exporting CSV:", error);
        });

}
function toggleForm() {
    const form = document.getElementById('productForm');
    form.classList.toggle('hidden');
}
