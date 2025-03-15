<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PhotoStudio - Home</title>
    <link rel="icon" href="images/favicon.png" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="assets/animate.css">
    <link rel="stylesheet" href="assets/slick-theme.css" />
    <link rel="stylesheet" href="assets/slick.css" />
    <link rel="stylesheet" href="assets/magnific-popup.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://kit.fontawesome.com/ddf8df4c2f.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
</head>

<body>
    <header class="header">

        <div class="nav-bar">

            <div class="container">

                <div class="nav-flex d-flex justify-content-between align-items-center">
                    <div class="logo">
                        <a href="index.php"><img src="images/logo.png" class="img-fluid" alt="logo"></a>
                    </div>

                    <div class="menu">
                        <ul>

                            <li class="active"><a href="index.php">Home</a></li>
                            <li><a href="#portfolio">Portfolio</a>
                                <ul class="sub-menu">
                                    <li><a href="#gallery">Our Showcase</a></li>
                                    <li><a href="#gallery">Our Media</a></li>
                                    <li><a href="#gallery">Our Work</a></li>
                                    <li><a href="#gallery">Our Gallery</a></li>
                                </ul>
                            </li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#testimonial">Testimonials</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div class="menu-btn">
                        <a class="custom-btn text-white" href="#" data-bs-toggle="modal"
                            data-bs-target="#form-popup-box">Get In Touch</a>
                    </div>

                    <!-- nav-flex ends -->

                    <a class="mobile-menu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </a>

                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <div class="logo">
                                <a href="index.php"><img src="images/logo.png" class="img-fluid" alt="logo-nav" /></a>
                            </div>
                            <button type="button" class="close-sidebar" data-bs-dismiss="offcanvas"
                                aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <div class="offcanvas-body">

                            <div class="menu">
                                <ul>

                                    <li class="active"><a href="index.php">Home</a></li>
                                    <li><a href="#portfolio">Portfolio</a>
                                        <ul class="sub-menu">
                                            <li><a href="#gallery">Our Showcase</a></li>
                                            <li><a href="#gallery">Our Media</a></li>
                                            <li><a href="#gallery">Our Work</a></li>
                                            <li><a href="#gallery">Our Gallery</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#testimonial">Testimonials</a></li>
                                    <li><a href="#contact">Contact Us</a></li>
                                </ul>
                            </div>

                            <div class="menu-btn">
                                <a class="custom-btn text-white" href="#" data-bs-toggle="modal"
                                    data-bs-target="#form-popup-box">Get In Touch</a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>




    </header>

    <!-- header ends -->


    <div class="modal fade form-popup-box" id="form-popup-box" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Book Appointment</h2>
                    <button type="button" data-bs-dismiss="modal" aria-label="Close" class="close-popup"> <i
                            class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="modal-body">
                    <div class="form-popup">
                        <form action="#" method="post">
                            <input type="text" name="p-fname" id="p-fname" placeholder="Your Name*" class="popup-input">
                            <input type="email" name="p-email" id="p-email" placeholder="E-mail Address*"
                                class="popup-input">
                            <input type="tel" name="p-phone" id="p-phone" placeholder="Your Phone*" class="popup-input">
                            <select name="p-select" id="p-select" class="popup-select js-example-basic-single">
                                <option value="-1">--Select Services--</option>
                                <option value="Photoshoot">Photoshoot</option>
                                <option value="Videoshoot">Videoshoot</option>
                                <option value="Wedding Shoot">Wedding Shoot</option>
                                <option value="Event Shoot">Event Shoot</option>
                            </select>

                            <textarea name="p-message" id="p-message" class="popup-area"
                                placeholder="Your Message*"></textarea>
                            <input type="submit" value="Book Now" class="popup-submit">

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>