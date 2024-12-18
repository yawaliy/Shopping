// Select all cart items
const cartItems = document.querySelectorAll('.cart-item');

// Function to update total price
function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.dataset.price);
        const quantity = parseInt(item.querySelector('.quantity-input').value);
        total += price * quantity;
    });
    document.getElementById('total-price').textContent = $${total};
}

// Add event listeners to each cart item
cartItems.forEach(item => {
    const incrementButton = item.querySelector('.btn-increment');
    const decrementButton = item.querySelector('.btn-decrement');
    const deleteButton = item.querySelector('.btn-delete');
    const likeButton = item.querySelector('.btn-like');
    const quantityInput = item.querySelector('.quantity-input');

    // Increment quantity
    incrementButton.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateTotalPrice();
    });

    // Decrement quantity
    decrementButton.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            updateTotalPrice();
        }
    });

    // Delete item
    deleteButton.addEventListener('click', () => {
        item.remove();
        updateTotalPrice();
    });

    // Like item
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('liked');
    });

    // Adjust price when quantity input changes
    quantityInput.addEventListener('change', () => {
        if (quantityInput.value < 1) {
            quantityInput.value = 1;
        }
        updateTotalPrice();
    });
});

// Initialize total price
updateTotalPrice();