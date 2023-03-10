function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
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

function buttonClick() {
    const val = document.getElementById("keyword").value
    const promise = getProducts(val)
    promise
        .then(value=> {
            return value.data.products;
        })
        .then(products=> {
            clearProducts()
            products.forEach(product => {
                displayProduct(product)
            });
        })
        .catch(err=> alert(err.message))
}