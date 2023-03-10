function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

async function getProducts(keyword) {
    // FETCH
    url = getProductsUrl(keyword)
    return fetch(url, {
        method: "GET",
    }).then(res=> {
        return res.json()
    })
}

function clearProducts() {
    const productUl = document.getElementById("products");
    productUl.textContent = ""
}

function displayProduct(product) {
    const productLi = document.createElement("li")
    productLi.textContent = product.name

    const productUl = document.getElementById("products")
    productUl.appendChild(productLi)
}

async function buttonClick() {
    const val = document.getElementById("keyword").value

    const value = await getProducts(val)
    
    const products = value.data.products;
    clearProducts()
    products.forEach(product => {
        displayProduct(product)
    });
}