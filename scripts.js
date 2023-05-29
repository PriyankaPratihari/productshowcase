var productClass = "product";
var buyButtonClass = "buy-button";

var products = [
    { name: "Badminton", image: "badminton.jpg", price: 100.00 },
    { name: "Ball", image: "ball.jpg", price: 60.00 },
    { name: "Sports Shoe", image: "sports shoe.jpg", price: 600.00 },
    { name: "bat", image: "bat.png", price: 800.0 },
    { name: "rack", image: "rack.png", price: 400.00 },
    { name: "volleyballnet", image: "volleyballnet.png", price: 300.00 },
    { name: "stackable", image: "stackable.jpg", price: 200.00 },
    { name: "volleyball", image: "volleyball.png", price: 450.0 },
    { name: "waterbottle", image: "waterbottle.png", price: 320.0 },
    // Add more products as needed
];

function generateProductHTML(name, image, price) {
    return `
        <div class="${productClass}" onclick="showModal('${name}', 'item added to cart', '${price}')">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p>Price: Rs${price.toFixed(2)}</p>
            <a href="#" class="${buyButtonClass}" onclick="addToCart('${name}', ${price})">Buy</a>
        </div>
    `;
}

function generateProductList() {
    var productListHTML = '';
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        productListHTML += generateProductHTML(product.name, product.image, product.price);
    }
    return productListHTML;
}

var cartItems = [];
var totalAmount = 0;

function showModal(title, item, price) {
    // ...
}

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    totalAmount += price;
    refreshCartItems();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    totalAmount -= cartItems[index].price;
    refreshCartItems();
}

function refreshCartItems() {
    var cartItemsElement = $('#cart-items');
    cartItemsElement.empty();

    for (var i = 0; i < cartItems.length; i++) {
        var listItem = $('<li>').addClass('cart-item');
        var itemNumber = $('<span>').text(i + 1 + '. ').addClass('item-number');
        var itemName = $('<span>').text(cartItems[i].name).addClass('item-name');
        var removeButton = $('<button>').html('&times;').addClass('btn btn-xs btn-danger').attr('onclick', 'removeFromCart(' + i + ')');

        listItem.append(itemNumber);
        listItem.append(itemName);
        listItem.append(removeButton);
        cartItemsElement.append(listItem);
    }

    $('#total-amount').text(totalAmount.toFixed(2));
}

function clearCart() {
    cartItems = [];
    totalAmount = 0;
    refreshCartItems();
}

$(document).ready(function() {
    $('#product-list').html(generateProductList());
});