document.addEventListener('DOMContentLoaded', (event) => {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');
    const icon = document.getElementById('icon-group');
    const iconall = document.getElementById('bx');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartDisplay() {
        const cartElement = document.querySelector('.cart-item');
        cartElement.innerHTML = '';
        let total = 0;
    
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cc-item';
            cartItem.innerHTML = `
            <div class="contain-citem">
                <img src="${item.img}" alt="${item.name}">
                <p>${item.name}<br>${formatCurrency(parseCurrency(item.price))} x ${item.quantity}</p>
            </div>
            <button class="remove-from-cart" data-product-id="${item.id}"><i class='bx bxs-message-square-x'></i></button>
            `;
            cartElement.appendChild(cartItem);
    
            // Cập nhật tổng tiền
            total += parseCurrency(item.price) * item.quantity;
        });
    
        // Cập nhật số lượng giỏ hàng và tổng tiền
        document.querySelector('.cart sub').textContent = cart.length;
        document.querySelector('.cart-total').textContent = `Tổng tiền: ${formatCurrency(total)}`;
    
        // Thêm sự kiện xóa sản phẩm khỏi giỏ hàng
        cartElement.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.currentTarget.getAttribute('data-product-id');
                removeFromCart(productId);
            });
        });
    
    
        // Hàm chuyển đổi giá từ chuỗi sang số thực
        function parseCurrency(value) {
            return parseFloat(value.replace(/\./g, '').replace('đ', ''));
        }
    
        // Hàm định dạng số với dấu phân cách hàng nghìn
        function formatCurrency(value) {
            return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        }
    
        // Cập nhật số lượng giỏ hàng và tổng tiền
        document.querySelector('.cart sub').textContent = cart.length;
        document.querySelector('.cart-total').textContent = `Tổng tiền: ${formatCurrency(total)}`;
    
        // Thêm sự kiện xóa sản phẩm khỏi giỏ hàng
        cartElement.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.currentTarget.getAttribute('data-product-id');
                removeFromCart(productId);
            });
        });
    }

    function removeFromCart(productId) {
        const productIndex = cart.findIndex(item => item.id === productId);

        if (productIndex > -1) {
            cart.splice(productIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
    // Hiển thị giỏ hàng khi trang được tải
    updateCartDisplay();

    // Xử lý mở và đóng menu điều hướng
    const navState = localStorage.getItem('navState');
    if (navState === 'active') {
        nav.classList.add('active');
        icon.classList.add('active');
    }

    if (iconall) {
        iconall.addEventListener('click', (e) => {
            e.preventDefault();
        });
    }

    if (bar) {
        bar.addEventListener('click', (e) => {
            e.preventDefault(); // Ngăn không cho trang tự động trở về đầu trang
            nav.classList.add('active');
            icon.classList.add('active');
            localStorage.setItem('navState', 'active');
        });
    }

    if (close) {
        close.addEventListener('click', (e) => {
            e.preventDefault(); // Ngăn không cho trang tự động trở về đầu trang
            nav.classList.remove('active');
            icon.classList.remove('active');
            localStorage.setItem('navState', 'inactive');
        });
    }
});
