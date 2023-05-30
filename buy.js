
// Retrieve the query parameter value
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var itemsJson = urlParams.get('items');

// Parse the JSON string to an array
var items = JSON.parse(decodeURIComponent(itemsJson));

// Display the product items and prices
var checkoutItemsDiv = document.getElementById('checkout-items');
var totalAmount = 0;
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var itemContainer = document.createElement('div');

    var image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;
    itemContainer.appendChild(image);

    var itemInfo = document.createElement('p');
    itemInfo.textContent = "Item: " + item.name + ", Price: " + item.price.toFixed(2);
    itemContainer.appendChild(itemInfo);

    checkoutItemsDiv.appendChild(itemContainer);

    totalAmount += item.price;
}

var totalAmountElement = document.getElementById('total-amount');
totalAmountElement.textContent = totalAmount.toFixed(2);

var selectedPaymentMethod = '';

function selectPaymentMethod(paymentMethod) {
    selectedPaymentMethod = paymentMethod;
    // Add visual feedback to the selected button if needed
    // For example, change the background color or add a border
}

function placeOrder() {
    var address = document.getElementById('address').value;

    if (selectedPaymentMethod === '') {
        alert('Please select a payment method.');
        return;
    }

    if (address.trim() === '') {
        alert('Please enter an address.');
        return;
    }

    // You can perform further validation or processing here

    // Show order placed message
    alert('Order Placed! Payment Method: ' + selectedPaymentMethod);
}

