<!DOCTYPE html>
<html lang="vn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Caffe Monster</title>
    <link rel="icon" type="image" href="img/logo-tap.png">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <!--header section-->
    <header class="header">
        <a href="#"><img src="img/logo.png" class="logo" alt="Caffe Monster Logo"></a>
        <div class="mobile"><a href="#" id="bar" aria-label="Open Navigation Menu"><i class='bx bx-menu'></i></a></div>
        <nav id="navbar" role="navigation">
            <ul>
                <li><a class="nav-index active" href="index.php">Trang chủ</a></li>
                <li>
                    <a class="nav-prd" href="product.php">Sản phẩm</a>
                    <ul class="sub-menu">
                        <li><a href="product.php?filter=nuoc" class="filter-link">Nước</a></li>
                        <li><a href="product.php?filter=banh" class="filter-link">Bánh</a></li>
                    </ul>
                </li>
                <li><a class="nav-sale" href="sale.php">Khuyến mãi</a></li>
                <a href="#" id="close" aria-label="Close Navigation Menu"><i class='bx bx-x'></i></a>
            </ul>
        </nav>        
        <div class="search-container">
            <input type="search" class="search-input" placeholder="Tìm kiếm..." aria-label="Search">
            <button class="search-button" aria-label="Search Button"><i class='bx bx-search'></i></button>
        </div>
        <div class="cart">
            <a href="#"><i id="bx" class='bx bx-cart'></i><sub>0</sub></a>
            <div class="cart-items">
                <div class="cart-item"></div>
                <div class="cart-summary">
                    <div class="cart-total">Tổng tiền: 0 VNĐ</div>
                    <a href="checkout.php" class="checkout-button" id="bx">Thanh toán</a>
                </div>                
            </div>
        </div>
        <div id="icon-group">
            <ul>
                <li>
                    <a class="noice" href="#" id="bx"><i class='bx bxs-envelope'></i><sub>0</sub></a>
                    <div class="envelope-items">
                        <div class="envelope-item"></div>
                        <div class="envelope-summary">
                            <a href="#" class="checkread-button" id="markAllRead bx">Đọc tất cả</a>
                        </div>                
                    </div>
                </li>
                <li><a class="user" href="sign_up.php"><i class='bx bx-user'></i></a></li>
            </ul>
        </div>
    </header>
    <!--main section-->
    <main class="main">
        <section class="main-header">
            <div class="img-main-head">
                <img src="img/gioithieu01.jpg" alt="image Header">
                <div class="background-main-img"></div>
            </div>
            <div class="text-containt-header">
                <div class="logo-main-header"><img src="img/logo.png"></div>
                <div class="ct-text-main-hd">
                    <div class="title-main-header"><h1>COFFEE MONSTER</h1></div>
                    <div class="contain-main-header">
                        <h2>Nơi trải nghiệm, và sự hài lòng của bạn</h2>
                    </div>
                    <div class="contain-main-header">
                        <h2>được chúng tôi đặt lên hàng đầu</h2>
                    </div> 
                    <a class="h-main-button" href="product.php"><button>SHOPING NOW</button></a>                  
                </div>
            </div>
        </section>

        <section class="main-main">
            <div class="containt-first">
                <img class="img-mm-first" src="img/img.jpg">
                <div class="text-mm-first">
                    <b class="title-mm-first">Hạt cà phê - Khởi nguồn của đam mê</b>
                    <p class="cnt-mm-first">Chúng tôi bắt đầu từ những hạt cà phê nguyên chất, được tuyển chọn kỹ lưỡng từ những vùng đất trù phú nhất. Qua quá trình chế biến công phu và tỉ mỉ, những hạt cà phê ấy trở thành những ly cà phê thơm ngon và đậm đà, mang đến cho bạn những khoảnh khắc thưởng thức tuyệt vời. Không chỉ đơn thuần là hương vị của cà phê, mà đó còn là niềm đam mê chúng tôi dồn vào từng sản phẩm hoàn hảo. Hãy cùng chúng tôi khám phá hành trình từ hạt cà phê đến ly cà phê, và cùng chia sẻ niềm đam mê với chúng tôi. Chúng tôi tin rằng, mỗi giọt cà phê sẽ mang lại cho bạn niềm vui và sự hài lòng.</p>
                </div>
            </div>

            <div class="containt-last">
                <div class="text-mm-last">
                    <b class="title-mm-last">Đội ngũ nhân viên tận tâm và nhiệt huyết</b>
                    <p class="cnt-mm-last">Tại Coffee Monster, chúng tôi luôn tự hào về đội ngũ nhân viên nhiệt tình và tận tâm của mình. Nhân viên của chúng tôi không chỉ đơn thuần là những người pha chế cà phê mà còn là những người mang trong mình tình yêu và niềm đam mê mãnh liệt với cà phê. Chúng tôi luôn sẵn sàng chia sẻ niềm đam mê này với khách hàng, từ khâu chọn lựa hạt cà phê nguyên chất cho đến quy trình chế biến tỉ mỉ để tạo ra những ly cà phê tuyệt hảo. Nhân viên tại Coffee Monster không chỉ đem đến cho khách hàng những sản phẩm chất lượng cao mà còn mang đến những trải nghiệm thú vị khi thưởng thức cà phê. Chúng tôi luôn cố gắng không ngừng để khách hàng có thể cảm nhận được tình yêu và niềm đam mê dành cho cà phê qua mỗi ly cà phê mà chúng tôi phục vụ. Với tinh thần nhiệt huyết và tận tâm, đội ngũ nhân viên của Coffee Monster đã góp phần xây dựng nên một thương hiệu cà phê độc đáo và đáng nhớ. Chúng tôi luôn mong muốn chia sẻ với khách hàng hành trình từ hạt cà phê đến tách cà phê, và cùng họ trải nghiệm niềm đam mê chung với cà phê.</p>
                </div>
                <img class="img-mm-last" src="img/nhansu.jpg">
            </div>
        </section>
    </main>
    <!--footer section-->
    <footer class="footer">
        <div class="inf-cfshop">
            <div class="ft-adress">
                <div class="ad-map">
                    <div class="ad-tl" style="min-width: 80px; margin-top: 0; margin-bottom: auto;"><b>Địa chỉ:</b></div>
                    <div class="ad-ct">70 Đ. Tô Ký, Tân Chánh Hiệp, Quận 12, Hồ Chí Minh</div>
                </div>
                <div class="map-ft" style="padding-bottom: 20px;"><a href="https://maps.app.goo.gl/jsNYvsDtjdViF1XcA" target="_blank" style="color: wheat;">Xem bản đồ</a></div>
                <div class="if-hotline">
                    <div class="hl-ft"><b>Hotline:</b></div>
                    <div class="nb-hl">0354464053</div>
                </div>
            </div>
            <div class="ft-dr-ite">
                <div class="ft-email-inf">
                    <div class="ft-email-inf-tl"><b>Email: </b></div>
                    <div class="ft-email-inf-ct"><a href="mailto:dcao9049@gmail.com" target="_blank">dcao9049@gmail.com</a></div>
                </div>
                <div class="ft-icon">
                    <a href="https://www.facebook.com/profile.php?id=100070397753672&mibextid=ZbWKwL" target="_blank"><i class='bx bxl-facebook-circle'></i></a>
                    <a href="https://www.instagram.com/trunganhlt?igsh=MWR4azFjcWMzZ2g2dg==" target="_blank"><i class='bx bxl-instagram-alt'></i></a>
                    <a href="https://www.tiktok.com/@quc.trung7365?_t=8nzILavzXsI&_r=1" target="_blank"><i class='bx bxl-tiktok'></i></a>
                </div>
            </div>
        </div>
        <div class="footer-end"><b>@2024 Coffee Monster | All rights reserved</b></div>
    </footer>
    <script type="text/javascript" src="js/script.js"></script>
</body>
</html>