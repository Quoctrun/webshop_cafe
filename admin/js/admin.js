// Mock data with detailed attributes
const products = [
    { id: 1, name: 'Caffee Đen Đá', price: '20.000', img: 'img/cfden.png', category: 'caffee' },
    { id: 2, name: 'Caffee Socola-Trắng', price: '25.000', img: 'img/cf-whiteSocola.png', category: 'caffee' },
    { id: 3, name: 'Cappuccino', price: '30.000', img: 'img/Cappuccino.png', category: 'caffee' },
    { id: 4, name: 'Cold Brew Cam Úc', price: '50.000', img: 'img/Cold Brew Cam Úc.png', category: 'caffee' },
    { id: 5, name: 'Cold Brew Hạnh Nhân', price: '50.000', img: 'img/Cold Brew Sữa Hạnh Nhân.png', category: 'caffee' },
    { id: 6, name: 'Cold Brew Dâu Tây', price: '70.000', img: 'img/Cold Brew Dâu Tây.png', category: 'caffee' },
    { id: 7, name: 'Cold Brew Macchiato', price: '70.000', img: 'img/Cold Brew Macchiato.png', category: 'caffee' },
    { id: 8, name: 'Coffee Jelly', price: '50.000', img: 'img/Coffee Jelly.png', category: 'caffee' },
    { id: 9, name: 'Dalgona Coffee', price: '65.000', img: 'img/Dalgona Coffee.png', category: 'caffee' },
    { id: 10, name: 'Boozy Whipped Coffee', price: '65.000', img: 'img/Boozy Whipped Coffee.png', category: 'caffee' },
    { id: 11, name: 'Matcha Espresso', price: '70.000', img: 'img/Matcha Espresso.png', category: 'tra' },
    { id: 12, name: 'Trà Đá Mận (Maesil)', price: '70.000', img: 'img/Trà Đá Mận (Maesil).png', category: 'tra' },
    { id: 13, name: 'Trà Hoa Oải Hương', price: '50.000', img: 'img/Trà Hoa Oải Hương.png', category: 'tra' },
    { id: 14, name: 'Trà Chanh Giây', price: '30.000', img: 'img/Trà Chanh Giây.png', category: 'tra' },
    { id: 15, name: 'Trà Earl Grey', price: '45.000', img: 'img/Trà Earl Grey.png', category: 'tra' },
    { id: 16, name: 'Chocolate Mousse', price: '75.000', img: 'img/Chocolate Mousse.png', category: 'banh' },
    { id: 17, name: 'Croissant Kem Dâu', price: '80.000', img: 'img/Croissant Kem Dâu.png', category: 'banh' },
    { id: 18, name: 'Matcha Tiramisu', price: '50.000', img: 'img/Matcha Tiramisu.png', category: 'banh' },
    { id: 19, name: 'Rose Panna Cotta', price: '50.000', img: 'img/Rose Panna Cotta.png', category: 'banh' },
    { id: 20, name: 'Vanilla Dream Crepes', price: '85.000', img: 'img/Vanilla Dream Crepes.png', category: 'banh' }
];


const orders = [
    {
        id: 1,
        products: [
            { id: 1, quantity: 2 },  // Caffee Đen Đá
            { id: 3, quantity: 1 },  // Cappuccino
            { id: 16, quantity: 1 }  // Chocolate Mousse
        ],
        customerName: 'John Doe',
        customerPhone: '1234567890',
        deliveryMethod: 'standard',
        paymentMethod: 'credit-card',
        promoCode: 'WELCOME10',
        orderDate: '2024-08-01',
        totalMoney: '140.000',
        status: 'Pending'
    },
    {
        id: 2,
        products: [
            { id: 5, quantity: 2 },  // Cold Brew Dâu Tây
            { id: 12, quantity: 1 }, // Trà Đá Mận (Maesil)
            { id: 18, quantity: 1 }  // Matcha Tiramisu
        ],
        customerName: 'Jane Doe',
        customerPhone: '0987654321',
        deliveryMethod: 'express',
        paymentMethod: 'paypal',
        promoCode: '',
        orderDate: '2024-08-02',
        totalMoney: '220.000',
        status: 'Shipped'
    },
    {
        id: 3,
        products: [
            { id: 7, quantity: 1 },  // Cold Brew Macchiato
            { id: 9, quantity: 2 },  // Dalgona Coffee
            { id: 20, quantity: 2 }  // Vanilla Dream Crepes
        ],
        customerName: 'Michael Smith',
        customerPhone: '1122334455',
        deliveryMethod: 'standard',
        paymentMethod: 'credit-card',
        promoCode: 'SUMMER20',
        orderDate: '2024-08-03',
        totalMoney: '340.000',
        status: 'Delivered'
    },
    {
        id: 4,
        products: [
            { id: 11, quantity: 2 }, // Matcha Espresso
            { id: 14, quantity: 3 }  // Trà Chanh Giây
        ],
        customerName: 'Emily Johnson',
        customerPhone: '5566778899',
        deliveryMethod: 'standard',
        paymentMethod: 'credit-card',
        promoCode: '',
        orderDate: '2024-08-04',
        totalMoney: '245.000',
        status: 'Pending'
    },
    {
        id: 5,
        products: [
            { id: 2, quantity: 3 },  // Caffee Socola-Trắng
            { id: 16, quantity: 2 }  // Chocolate Mousse
        ],
        customerName: 'Sarah Brown',
        customerPhone: '6677889900',
        deliveryMethod: 'express',
        paymentMethod: 'paypal',
        promoCode: 'AUTUMN15',
        orderDate: '2024-08-05',
        totalMoney: '265.000',
        status: 'Cancelled'
    },
    {
        id: 6,
        products: [
            { id: 4, quantity: 1 },  // Cold Brew Cam Úc
            { id: 13, quantity: 2 }, // Trà Hoa Oải Hương
            { id: 19, quantity: 1 }  // Rose Panna Cotta
        ],
        customerName: 'Daniel Lee',
        customerPhone: '3344556677',
        deliveryMethod: 'express',
        paymentMethod: 'credit-card',
        promoCode: '',
        orderDate: '2024-08-06',
        totalMoney: '245.000',
        status: 'Shipped'
    },
    {
        id: 7,
        products: [
            { id: 6, quantity: 3 },  // Cold Brew Hạnh Nhân
            { id: 15, quantity: 2 }  // Trà Earl Grey
        ],
        customerName: 'Laura Wilson',
        customerPhone: '7788990011',
        deliveryMethod: 'standard',
        paymentMethod: 'paypal',
        promoCode: '',
        orderDate: '2024-08-07',
        totalMoney: '290.000',
        status: 'Delivered'
    },
    {
        id: 8,
        products: [
            { id: 10, quantity: 1 }, // Boozy Whipped Coffee
            { id: 17, quantity: 1 }, // Croissant Kem Dâu
            { id: 20, quantity: 1 }  // Vanilla Dream Crepes
        ],
        customerName: 'Olivia Martinez',
        customerPhone: '8899001122',
        deliveryMethod: 'standard',
        paymentMethod: 'credit-card',
        promoCode: '',
        orderDate: '2024-08-08',
        totalMoney: '220.000',
        status: 'Pending'
    },
    {
        id: 9,
        products: [
            { id: 8, quantity: 1 },  // Coffee Jelly
            { id: 12, quantity: 1 }, // Trà Đá Mận (Maesil)
            { id: 15, quantity: 1 }  // Trà Earl Grey
        ],
        customerName: 'James Taylor',
        customerPhone: '9900112233',
        deliveryMethod: 'express',
        paymentMethod: 'paypal',
        promoCode: 'WINTER25',
        orderDate: '2024-08-09',
        totalMoney: '155.000',
        status: 'Shipped'
    },
    {
        id: 10,
        products: [
            { id: 3, quantity: 2 },  // Cappuccino
            { id: 4, quantity: 1 },  // Cold Brew Cam Úc
            { id: 18, quantity: 1 }  // Matcha Tiramisu
        ],
        customerName: 'Sophia Anderson',
        customerPhone: '2233445566',
        deliveryMethod: 'standard',
        paymentMethod: 'credit-card',
        promoCode: 'SPRING10',
        orderDate: '2024-08-10',
        totalMoney: '180.000',
        status: 'Delivered'
    }
];




// Functions to render products and orders
function renderProducts(filter = '') {
    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = '';
        const filteredProducts = filter ? products.filter(p => p.category === filter) : products;
        filteredProducts.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}đ</td>
                <td><img src="../${product.img}" alt="${product.name}" width="50"></td>
                <td>${product.category}</td>
                <td>
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="deleteProduct(${product.id})">Delete</button>
                </td>
            `;
            productList.appendChild(row);
        });
    }
}

function renderOrders() {
    const orderList = document.getElementById('order-list');
    if (orderList) {
        orderList.innerHTML = '';
        orders.forEach(order => {
            const productDetails = order.products.map(productItem => {
                const product = products.find(p => p.id === productItem.id);
                return `<div>${product.name} (x${productItem.quantity})</div>`;
            }).join('');

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${productDetails}</td> <!-- Updated to show detailed product info -->
                <td>${order.customerName}</td>
                <td>${order.orderDate}</td>
                <td>${order.totalMoney}đ</td>
                <td>${order.status}</td>
                <td>
                    <button onclick="viewOrderDetails(${order.id})">View Details</button>
                    <button onclick="updateOrderStatus(${order.id})">Update Status</button>
                </td>
            `;
            orderList.appendChild(row);
        });
    }
}


function addProduct() {
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    const name = prompt('Enter product name:');
    const price = prompt('Enter product price:');
    const img = prompt('Enter product image URL:');
    const category = prompt('Enter product category (e.g., caffe, banh, tra):');
    if (name && price && img && category) {
        products.push({ id, name, price, img, category });
        renderProducts(getFilterFromURL());
    } else {
        alert('Invalid input. Please try again.');
    }
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        const name = prompt('Enter new product name:', product.name);
        const price = prompt('Enter new product price:', product.price);
        const img = prompt('Enter new product image URL:', product.img);
        const category = prompt('Enter new product category:', product.category);
        if (name && price && img && category) {
            product.name = name;
            product.price = price;
            product.img = img;
            product.category = category;
            renderProducts(getFilterFromURL());
        } else {
            alert('Invalid input. Please try again.');
        }
    }
}


function deleteProduct(id) {
    const index = products.findIndex(p => p.id === id);
    if (index > -1) {
        products.splice(index, 1);
        renderProducts(getFilterFromURL());
    }
}

function viewOrderDetails(id) {
    const order = orders.find(o => o.id === id);
    if (order) {
        const productDetails = order.products.map(productItem => {
            const product = products.find(p => p.id === productItem.id);
            return `${product.name} (x${productItem.quantity})`;
        }).join('\n');

        alert(`Order ID: ${order.id}\nProducts:\n${productDetails}\nCustomer Name: ${order.customerName}\nPhone: ${order.customerPhone}\nDelivery Method: ${order.deliveryMethod}\nPayment Method: ${order.paymentMethod}\nPromo Code: ${order.promoCode}\nOrder Date: ${order.orderDate}\nTotal Money: ${order.totalMoney}đ\nStatus: ${order.status}`);
    }
}

function updateOrderStatus(id) {
    const order = orders.find(o => o.id === id);
    if (order) {
        const newStatus = prompt('Enter new status for the order (e.g., Pending, Shipped, Delivered):', order.status);
        if (newStatus) {
            order.status = newStatus;
            renderOrders();
        } else {
            alert('Invalid input. Please try again.');
        }
    }
}

function getFilterFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('filter') || '';
}

// Initial rendering
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-list')) {
        renderProducts(getFilterFromURL());
    }
    if (document.getElementById('order-list')) {
        renderOrders();
    }
});