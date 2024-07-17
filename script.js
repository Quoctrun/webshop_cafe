document.addEventListener('DOMContentLoaded', (event) => {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');
    const icon = document.getElementById('icon-group');

    if (bar) {
        bar.addEventListener('click', (e) => {
            e.preventDefault(); // Ngăn không cho trang tự động trở về đầu trang
            nav.classList.add('active');
            icon.classList.add('active');
        });
    }

    if (close) {
        close.addEventListener('click', (e) => {
            e.preventDefault(); // Ngăn không cho trang tự động trở về đầu trang
            nav.classList.remove('active');
            icon.classList.remove('active');
        });
    }
});
