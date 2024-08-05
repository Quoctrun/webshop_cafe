document.addEventListener("DOMContentLoaded", function() {
    const itemsPerPage = 10;
    const productItems = document.querySelectorAll(".product-item");
    let currentPage = 1;
    let totalPages = Math.ceil(productItems.length / itemsPerPage);

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        productItems.forEach((item, index) => {
            item.style.display = (index >= start && index < end) ? "block" : "none";
        });

        updatePageNumbers();
    }

    function updatePageNumbers() {
        const pageNumbers = document.querySelector(".page-numbers");
        pageNumbers.innerHTML = `Page ${currentPage} of ${totalPages}`;
    }

    window.changePage = function(delta) {
        currentPage += delta;
        if (currentPage < 1) currentPage = 1;
        if (currentPage > totalPages) currentPage = totalPages;
        showPage(currentPage);
    };

    showPage(currentPage);
});
