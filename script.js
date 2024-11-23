let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartCount();
    alert(`${productName} telah ditambahkan ke keranjang`);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function viewCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - Rp ${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPrice.textContent = total;
    
    cartModal.style.display = 'flex';
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}
