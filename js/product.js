document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Lấy giá trị bộ lọc từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const filterFromUrl = urlParams.get('filter');
    
    // Xử lý sự kiện nhấp vào bộ lọc
    document.querySelectorAll('.filter-option').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Cập nhật trạng thái của các liên kết bộ lọc
            document.querySelectorAll('.filter-option').forEach(el => el.classList.remove('active'));
            e.currentTarget.classList.add('active');

            // Lấy loại sản phẩm được chọn
            const filter = e.currentTarget.getAttribute('data-filter');

            // Hiển thị hoặc ẩn các sản phẩm dựa trên loại
            document.querySelectorAll('.product-item').forEach(item => {
                const category = item.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    item.style.display = '';
                } else if (filter === 'nuoc' && category !== 'banh') {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Nếu có bộ lọc từ URL, kích hoạt nó
    if (filterFromUrl) {
        const filterLink = document.querySelector(`.filter-option[data-filter="${filterFromUrl}"]`);
        if (filterLink) {
            filterLink.click();
        }
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.currentTarget.getAttribute('data-product-id');
            const productName = e.currentTarget.getAttribute('data-product-name');
            const productPrice = e.currentTarget.getAttribute('data-product-price');
            const productImg = e.currentTarget.getAttribute('data-product-img');
            const quantityElement = document.querySelector(`.product-quantity[data-product-id="${productId}"]`);
            const quantity = parseInt(quantityElement.value);
            addToCart(productId, productName, productPrice, productImg, quantity);
        });
    });

    function addToCart(productId, productName, productPrice, productImg, quantity) {
        const productIndex = cart.findIndex(item => item.id === productId);

        if (productIndex > -1) {
            cart[productIndex].quantity += quantity;
        } else {
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                img: productImg,
                quantity: quantity
            };
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

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
    }
    
    // Hàm chuyển đổi giá từ chuỗi sang số thực
    function parseCurrency(value) {
        return parseFloat(value.replace(/\./g, '').replace('đ', ''));
    }
    
    // Hàm định dạng số với dấu phân cách hàng nghìn
    function formatCurrency(value) {
        return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    function removeFromCart(productId) {
        const productIndex = cart.findIndex(item => item.id === productId);

        if (productIndex > -1) {
            cart.splice(productIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
});
