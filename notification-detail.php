<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi tiết thông báo</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .notification-container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .notification-container h1 {
            margin-top: 0;
        }
        .notification-container p {
            line-height: 1.6;
        }
        .back-button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
        }
        .back-button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="notification-container">
        <h1 id="notification-title">Tiêu đề thông báo</h1>
        <div class="contents">
            <p id="notification-content">Nội dung thông báo...</p>
        </div>
        <a href="#" id="back-button" class="back-button">Trở về</a>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Lấy ID thông báo từ URL
            const urlParams = new URLSearchParams(window.location.search);
            const notificationId = parseInt(urlParams.get('id'), 10);

            // Lấy danh sách thông báo từ localStorage
            const messages = JSON.parse(localStorage.getItem('messages')) || [];

            // Tìm thông báo theo ID
            const message = messages.find(msg => msg.id === notificationId);

            // Hiển thị tiêu đề và nội dung thông báo
            if (message) {
                document.getElementById('notification-title').textContent = message.title;
                document.getElementById('notification-content').textContent = message.content;
            } else {
                document.getElementById('notification-title').textContent = 'Thông báo không tìm thấy';
                document.getElementById('notification-content').textContent = 'Thông báo này không còn tồn tại.';
            }

            // Xử lý nút quay lại
            const backButton = document.getElementById('back-button');
            const returnPage = sessionStorage.getItem('returnPage') || 'index.php'; // Mặc định quay về index.php nếu không có returnPage
            const scrollTop = sessionStorage.getItem('scrollTop') || 0; // Mặc định về vị trí cuộn 0 nếu không có scrollTop

            backButton.href = returnPage; // Đặt href của nút quay lại

            // Khi quay lại trang, khôi phục vị trí cuộn
            backButton.addEventListener('click', () => {
                sessionStorage.setItem('scrollTop', scrollTop); // Lưu lại vị trí cuộn trước khi rời trang
            });
        });

        // Khi quay lại trang, khôi phục vị trí cuộn
        window.addEventListener('load', () => {
            const scrollTop = sessionStorage.getItem('scrollTop') || 0;
            window.scrollTo(0, parseInt(scrollTop, 10)); // Khôi phục vị trí cuộn
        });
    </script>
</body>
</html>
