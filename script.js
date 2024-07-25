let total = 0;

function updatePrice() {
    const selectElement = document.getElementById('productName');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const productPrice = selectedOption ? selectedOption.getAttribute('data-price') : 0;
    document.getElementById('productPrice').value = productPrice ? `Rp ${Number(productPrice).toLocaleString()}` : '';
}

function addItem() {
    const productSelect = document.getElementById('productName');
    const productName = productSelect.options[productSelect.selectedIndex].text;
    const productPrice = parseFloat(productSelect.options[productSelect.selectedIndex].getAttribute('data-price'));
    const productQuantity = parseInt(document.getElementById('productQuantity').value);

    if (!productName || isNaN(productPrice) || isNaN(productQuantity) || productQuantity <= 0) {
        alert('Please select a product and enter a valid quantity');
        return;
    }

    const cartBody = document.getElementById('cartBody');

    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${productName}</td>
        <td>Rp ${productPrice.toLocaleString()}</td>
        <td>${productQuantity}</td>
        <td>Rp ${(productPrice * productQuantity).toLocaleString()}</td>
    `;

    cartBody.appendChild(newRow);

    total += productPrice * productQuantity;
    document.getElementById('totalPrice').innerText = `${total.toLocaleString()}`;

    document.getElementById('productName').selectedIndex = 0;
    document.getElementById('productPrice').value = '';
    document.getElementById('productQuantity').value = '';
}

function completeSale() {
    const amountPaid = parseFloat(document.getElementById('amountPaid').value) || 0;
    if (total <= 0) {
        alert('No items in cart');
        return;
    }
    if (amountPaid < total) {
        alert('Amount paid is less than the total amount');
        return;
    }

    const change = amountPaid - total;
    document.getElementById('change').innerText = ` ${change.toLocaleString()}`;

    alert(`Sale completed! Total: Rp ${total.toLocaleString()}, Change: Rp ${change.toLocaleString()}`);
}

function reset() {
    total = 0;
    document.getElementById('totalPrice').innerText = '0.00';
    document.getElementById('cartBody').innerHTML = '';
    document.getElementById('productName').selectedIndex = 0;
    document.getElementById('productPrice').value = '';
    document.getElementById('productQuantity').value = '';
    document.getElementById('amountPaid').value = '';
    document.getElementById('change').innerText = '0.00';
}
