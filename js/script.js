document.addEventListener('DOMContentLoaded', (event) => {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');
    const icon = document.getElementById('icon-group');
    const noice = document.querySelector('.noice');
    const sub3Menu = document.querySelector('.sub3-menu');
    const allicon = document.getElementById('bx');
    const notifications = document.querySelector('.envelope-items');
    const checkReadButton = document.querySelector('.checkread-button');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const messages = JSON.parse(localStorage.getItem('messages')) || [
            { id: 1, title: 'Chào mừng bạn mới', content: 'Chúng tôi xin chào mừng bạn đến với cửa hàng cà phê của chúng tôi! Hy vọng bạn sẽ có những trải nghiệm tuyệt vời với các sản phẩm và dịch vụ của chúng tôi. Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với chúng tôi!', read: false, date: '2024-07-24' },
            { id: 2, title: 'Bảo trì hệ thống webshop', content: 'Chúng tôi thông báo rằng hệ thống webshop của chúng tôi sẽ được bảo trì từ ngày 27/07/2024 đến ngày 28/07/2024. Trong thời gian này, trang web có thể không hoạt động ổn định. Chúng tôi xin lỗi vì sự bất tiện này và cảm ơn sự thông cảm của bạn!', read: false, date: '2024-07-25' },
            { id: 3, title: 'Sản phẩm mới "Boozy Whipped Coffee"', content: 'Chúng tôi rất vui được giới thiệu sản phẩm mới của chúng tôi – "Boozy Whipped Coffee"! Đây là một loại cà phê đặc biệt với hương vị độc đáo, kết hợp giữa cà phê espresso đậm đà và lớp kem whipped nhẹ nhàng, hoàn hảo cho những ai yêu thích sự mới lạ và sáng tạo trong thức uống của mình. Hãy đến thử ngay hôm nay!', read: false, date: '2024-07-26' }
        ];
    
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
    
            total += parseCurrency(item.price) * item.quantity;
        });
    
        document.querySelector('.cart sub').textContent = cart.length;
        document.querySelector('.cart-total').textContent = `Tổng tiền: ${formatCurrency(total)}`;
    
        cartElement.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.currentTarget.getAttribute('data-product-id');
                removeFromCart(productId);
            });
        });
    
        function parseCurrency(value) {
            return parseFloat(value.replace(/\./g, '').replace('đ', ''));
        }
    
        function formatCurrency(value) {
            return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        }
    }

    function removeFromCart(productId) {
        const productIndex = cart.findIndex(item => item.id === productId);

        if (productIndex > -1) {
            cart.splice(productIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    updateCartDisplay();

    const navState = localStorage.getItem('navState');
    if (navState === 'active') {
        nav.classList.add('active');
        icon.classList.add('active');
    }

    if (allicon) {
        allicon.addEventListener('click', (e) => {
            e.preventDefault();
        });
    }

    if (bar) {
        bar.addEventListener('click', (e) => {
            e.preventDefault();
            nav.classList.add('active');
            icon.classList.add('active');
            localStorage.setItem('navState', 'active');
        });
    }

    if (close) {
        close.addEventListener('click', (e) => {
            e.preventDefault();
            nav.classList.remove('active');
            icon.classList.remove('active');
            localStorage.setItem('navState', 'inactive');
        });
    }

    function handleNotificationClick(notificationId) {
        const message = messages.find(msg => msg.id === notificationId);
        if (message) {
            message.read = true;
            localStorage.setItem('messages', JSON.stringify(messages));
            updateNotifications();
            window.location.href = `notification-detail.html?id=${notificationId}`;
        }
    }

    function updateNotificationCount() {
        const unreadCount = messages.filter(message => !message.read).length;
        document.querySelector('.noice sub').textContent = unreadCount;
    }


    function updateNotifications() {
        const notificationList = document.querySelector('.envelope-item');
        notificationList.innerHTML = '';

        // Sắp xếp thông báo theo ngày gửi (mới nhất trước)
        const sortedMessages = messages.sort((a, b) => new Date(b.date) - new Date(a.date));

        sortedMessages.forEach(message => {
            const notificationItem = document.createElement('div');
            notificationItem.className = 'ev-item';
            
            // Cắt ngắn nội dung thông báo
            const shortContent = message.content.length > 50 ? message.content.substring(0, 50) + '...' : message.content;

            notificationItem.innerHTML = `
                <div class="title">${message.title}</div>
                <div class="content">${shortContent}</div>
            `;
            notificationItem.setAttribute('data-id', message.id); // Thêm thuộc tính data-id
            
            // Thay đổi lớp CSS nếu thông báo đã đọc
            if (message.read) {
                notificationItem.classList.add('read');
            }

            notificationList.appendChild(notificationItem);
        });

        updateNotificationCount();
    }

    // Xử lý sự kiện nhấp vào mục thông báo
    notifications.addEventListener('click', (e) => {
        const target = e.target.closest('.ev-item');
        if (target) {
            e.preventDefault();
            const notificationId = parseInt(target.getAttribute('data-id'), 10);
            sessionStorage.setItem('returnPage', window.location.href); // Lưu URL hiện tại
            sessionStorage.setItem('scrollTop', window.scrollY); // Lưu vị trí cuộn của trang
            handleNotificationClick(notificationId);
        }
    });
    
    // Xử lý sự kiện nhấn nút "Đọc tất cả"
    checkReadButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Đánh dấu tất cả thông báo là đã đọc
        messages.forEach(message => {
            message.read = true;
        });

        localStorage.setItem('messages', JSON.stringify(messages));
        updateNotifications();
    });

    window.addEventListener('load', () => {
        const scrollTop = sessionStorage.getItem('scrollTop');
        console.log(`ScrollTop: ${scrollTop}`); // Kiểm tra giá trị trong console
        if (scrollTop !== null) {
            window.scrollTo(0, parseInt(scrollTop, 10));
            sessionStorage.removeItem('scrollTop');
        }
    });

    updateNotifications();

    function updateCheckoutForm() {
        const checkoutForm = document.querySelector('.detail-products');
        checkoutForm.innerHTML = '';
    
        cart.forEach(item => {
            const formItem = document.createElement('div');
            formItem.className = 'checkout-item';
            formItem.innerHTML = `
                <div class="detail-citem">
                    <img src="${item.img}" alt="${item.name}">
                    <p>${item.name}<br>${formatCurrency(parseCurrency(item.price))} x ${item.quantity}</p>
                </div>
            `;
            checkoutForm.appendChild(formItem);
        });
    
        const totalAmount = cart.reduce((total, item) => total + parseCurrency(item.price) * item.quantity, 0);
        document.getElementById('total-mn').textContent = formatCurrency(totalAmount);
    
        function parseCurrency(value) {
            return parseFloat(value.replace(/\./g, '').replace('đ', ''));
        }
    
        function formatCurrency(value) {
            return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        }
    }
    
    if (document.querySelector('.detail-products')) {
        updateCheckoutForm();
    }   
    
    const applyPromoButton = document.getElementById('apply-promo');
    const totalElement = document.getElementById('total-mn');
    const noiceSaleMethod = document.getElementById('noice-sale-method');
    let originalTotalAmount = parseCurrency(totalElement.textContent);

    applyPromoButton.addEventListener('click', () => {
        const promoCode = document.getElementById('promo-code').value;
        applyPromoCode(promoCode);
    });

    function applyPromoCode(code) {
        let totalAmount = originalTotalAmount; // Use the original total amount

        const { discountPercent, maxDiscount, minOrderAmount } = getDiscountAmount(code);

        if (totalAmount < minOrderAmount) {
            noiceSaleMethod.innerHTML = '<p>Đơn hàng của bạn không đủ điều kiện để áp dụng mã khuyến mãi.</p>';
            totalElement.textContent = formatCurrency(originalTotalAmount); // Reset total amount to original
            return;
        }

        let discount = totalAmount * (discountPercent / 100);
        if (discount > maxDiscount) {
            discount = maxDiscount;
        }

        if (discount > 0) {
            totalAmount -= discount;
            totalElement.textContent = formatCurrency(totalAmount);
            noiceSaleMethod.innerHTML = `<p>Mã khuyến mãi đã được áp dụng. Bạn đã được giảm ${formatCurrency(discount)}.</p>`;
        } else {
            noiceSaleMethod.innerHTML = '<p>Mã khuyến mãi không hợp lệ.</p>';
            totalElement.textContent = formatCurrency(originalTotalAmount); // Reset total amount to original
        }
    }

    function parseCurrency(value) {
        return parseFloat(value.replace(/\./g, '').replace('đ', ''));
    }

    function formatCurrency(value) {
        return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    function getDiscountAmount(code) {
        const validCodes = {
            'SUMMER2024': { discountPercent: 10, maxDiscount: 100000, minOrderAmount: 500000 }, // Example values
            'WELCOME': { discountPercent: 15, maxDiscount: 15000, minOrderAmount: 30000 }
        };
        return validCodes[code] || { discountPercent: 0, maxDiscount: 0, minOrderAmount: Infinity };
    }

    function resetTotalAmount() {
        const promoCode = document.getElementById('promo-code').value;
        if (!promoCode) {
            totalElement.textContent = formatCurrency(originalTotalAmount);
            noiceSaleMethod.innerHTML = ''; // Clear the message
        }
    }

    document.getElementById('promo-code').addEventListener('input', resetTotalAmount);

    const dateSendElement = document.getElementById('date-send');
    if (dateSendElement) {
        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);
        dateSendElement.textContent = `Ngày lập đơn hàng: ${formattedDate}`;
    }

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    document.getElementById('logout').addEventListener('click', () => {
        //all active
    });
});
