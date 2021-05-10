import React from "react";

{/*<!-- Header Mobile -->*/}
<div className="wrap_header_mobile">
    {/*<!-- Logo moblie -->*/}
    <a href="index.html" className="logo-mobile">
        <img src="images/icons/logo.png" alt="IMG-LOGO" />
    </a>

    {/*<!-- Button show menu -->*/}
    <div className="btn-show-menu">
        {/*<!-- Header Icon mobile -->*/}
        <div className="header-icons-mobile">
            <a href="#" className="header-wrapicon1 dis-block">
                <img src="./images/icons/icon-header-01.png" className="header-icon1" alt="ICON"/>
            </a>

            <span className="linedivide2"></span>

            <div className="header-wrapicon2">
                <img src="./images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
                <span className="header-icons-noti">0</span>

                {/*<!-- Header cart noti -->*/}
                <div className="header-cart header-dropdown">
                    <ul className="header-cart-wrapitem">
                        <li className="header-cart-item">
                            <div className="header-cart-item-img">
                                <img src="images/item-cart-01.jpg" alt="IMG" />
                            </div>

                            <div className="header-cart-item-txt">
                                <a href="#" className="header-cart-item-name">
                                    White Shirt With Pleat Detail Back
                                </a>

                                <span className="header-cart-item-info">
											1 x $19.00
                          </span>
                            </div>
                        </li>

                        <li className="header-cart-item">
                            <div className="header-cart-item-img">
                                <img src="images/item-cart-02.jpg" alt="IMG"/>
                            </div>

                            <div className="header-cart-item-txt">
                                <a href="#" className="header-cart-item-name">
                                    Converse All Star Hi Black Canvas
                                </a>

                                <span className="header-cart-item-info">
											1 x $39.00
                          </span>
                            </div>
                        </li>

                        <li className="header-cart-item">
                            <div className="header-cart-item-img">
                                <img src="images/item-cart-03.jpg" alt="IMG"/>
                            </div>

                            <div className="header-cart-item-txt">
                                <a href="#" className="header-cart-item-name">
                                    Nixon Porter Leather Watch In Tan
                                </a>

                                <span className="header-cart-item-info">
											1 x $17.00
										</span>
                            </div>
                        </li>
                    </ul>

                    <div className="header-cart-total">
                        Total: $75.00
                    </div>

                    <div className="header-cart-buttons">
                        <div className="header-cart-wrapbtn">
                            {/*<!-- Button -->*/}
                            <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                View Cart
                            </a>
                        </div>

                        <div className="header-cart-wrapbtn">
                            {/*<!-- Button -->*/}
                            <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                Check Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
        </div>
    </div>
</div>

{/*<!-- Menu Mobile -->*/}
<div className="wrap-side-menu">
    <nav className="side-menu">
        <ul className="main-menu">
            <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
						<span className="topbar-child1">
							Free shipping for standard order over $100
						</span>
            </li>

            <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                <div className="topbar-child2-mobile">
							<span className="topbar-email">
								fashe@example.com
							</span>

                    <div className="topbar-language rs1-select2">
                        <select className="selection-1" name="time">
                            <option>USD</option>
                            <option>EUR</option>
                        </select>
                    </div>
                </div>
            </li>

            <li className="item-topbar-mobile p-l-10">
                <div className="topbar-social-mobile">
                    <a href="#" className="topbar-social-item fa fa-facebook"></a>
                    <a href="#" className="topbar-social-item fa fa-instagram"></a>
                    <a href="#" className="topbar-social-item fa fa-pinterest-p"></a>
                    <a href="#" className="topbar-social-item fa fa-snapchat-ghost"></a>
                    <a href="#" className="topbar-social-item fa fa-youtube-play"></a>
                </div>
            </li>

            <li className="item-menu-mobile">
                <a href="index.html">Home</a>
                <ul className="sub-menu">
                    <li><a href="index.html">Homepage V1</a></li>
                    <li><a href="home-02.html">Homepage V2</a></li>
                    <li><a href="home-03.html">Homepage V3</a></li>
                </ul>
                <i className="arrow-main-menu fa fa-angle-right" aria-hidden="true"/>
            </li>

            <li className="item-menu-mobile">
                <a href="product.html">Shop</a>
            </li>

            <li className="item-menu-mobile">
                <a href="product.html">Sale</a>
            </li>

            <li className="item-menu-mobile">
                <a href="cart.html">Features</a>
            </li>

            <li className="item-menu-mobile">
                <a href="blog.html">Blog</a>
            </li>

            <li className="item-menu-mobile">
                <a href="about.html">About</a>
            </li>

            <li className="item-menu-mobile">
                <a href="contact.html">Contact</a>
            </li>
        </ul>
    </nav>
</div>

{/*/!*<!-- Slide1 -->*!/*/}
<section className="slide1">
    <div className="wrap-slick1">
        <div className="slick1">
            <div className="item-slick1 item1-slick1" style={{backgroundImage: './images/master-slide-02.jpg'}}>
                <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
						<span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15"
                              data-appear="fadeInDown">
							Women Collection 2018
						</span>

                    <h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="fadeInUp">
                        New arrivals
                    </h2>

                    <div className="wrap-btn-slide1 w-size1 animated visible-false" data-appear="zoomIn">
                        {/*<!-- Button -->*/}
                        <a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>

            <div className="item-slick1 item2-slick1" style= {{backgroundImage: './images/master-slide-03.jpg'}}>
                <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
						<span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15"
                              data-appear="rollIn">
							Women Collection 2018
						</span>

                    <h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37"
                        data-appear="lightSpeedIn">
                        New arrivals
                    </h2>

                    <div className="wrap-btn-slide1 w-size1 animated visible-false" data-appear="slideInUp">
                        {/*<!-- Button -->*/}
                        <a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>

            <div className="item-slick1 item3-slick1" style={{backgroundImage: './images/master-slide-04.jpg'}}>
                <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
						<span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15"
                              data-appear="rotateInDownLeft">
							Women Collection 2018
						</span>

                    <h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37"
                        data-appear="rotateInUpRight">
                        New arrivals
                    </h2>

                    <div className="wrap-btn-slide1 w-size1 animated visible-false" data-appear="rotateIn">
                        {/*<!-- Button -->*/}
                        <a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

{/*<!-- Instagram -->*/}
<section className="instagram p-t-20">
    <div className="sec-title p-b-52 p-l-15 p-r-15">
        <h3 className="m-text5 t-center">
            @ follow us on Instagram
        </h3>
    </div>

    <div className="flex-w">
        {/*!-- Block4 -->*/}
        <div className="block4 wrap-pic-w">
            <img src="images/gallery-03.jpg" alt="IMG-INSTAGRAM"/>

            <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
					<span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
						<i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true"/>
						<span className="p-t-2">39</span>
					</span>

                <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                    <p className="s-text10 m-b-15 h-size1 of-hidden">
                        Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in
                        tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                    </p>

                    <span className="s-text9">
							Photo by @nancyward
						</span>
                </div>
            </a>
        </div>

        {/*<!-- Block4 -->*/}
        <div className="block4 wrap-pic-w">
            <img src="images/gallery-07.jpg" alt="IMG-INSTAGRAM"/>

            <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
					<span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
						<i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true" />
						<span className="p-t-2">39</span>
					</span>

                <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                    <p className="s-text10 m-b-15 h-size1 of-hidden">
                        Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in
                        tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                    </p>

                    <span className="s-text9">
							Photo by @nancyward
						</span>
                </div>
            </a>
        </div>

        {/*<!-- Block4 -->*/}
        <div className="block4 wrap-pic-w">
            <img src="images/gallery-09.jpg" alt="IMG-INSTAGRAM"/>

            <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
					<span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
						<i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true"/>
						<span className="p-t-2">39</span>
					</span>

                <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                    <p className="s-text10 m-b-15 h-size1 of-hidden">
                        Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in
                        tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                    </p>

                    <span className="s-text9">
							Photo by @nancyward
						</span>
                </div>
            </a>
        </div>

        {/*<!-- Block4 -->*/}
        <div className="block4 wrap-pic-w">
            <img src="images/gallery-13.jpg" alt="IMG-INSTAGRAM"/>

            <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
					<span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
						<i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true"/>
						<span className="p-t-2">39</span>
					</span>

                <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                    <p className="s-text10 m-b-15 h-size1 of-hidden">
                        Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in
                        tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                    </p>

                    <span className="s-text9">
							Photo by @nancyward
						</span>
                </div>
            </a>
        </div>

        {/*<!-- Block4 -->*/}
        <div className="block4 wrap-pic-w">
            <img src="images/gallery-15.jpg" alt="IMG-INSTAGRAM"/>

            <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
					<span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
						<i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true"/>
						<span className="p-t-2">39</span>
					</span>

                <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                    <p className="s-text10 m-b-15 h-size1 of-hidden">
                        Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in
                        tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                    </p>

                    <span className="s-text9">
							Photo by @nancyward
						</span>
                </div>
            </a>
        </div>
    </div>
</section>


<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
    {/* <!-- Block2 -->*/}
    <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
            <img src="./images/item-02.jpg" alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true"/>
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"/>
                </a>

                <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/*<!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                Herschel supply co 25l
            </a>

            <span className="block2-price m-text6 p-r-5">
										$75.00
									</span>
        </div>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
    {/*<!-- Block2 -->*/}
    <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative">
            <img src="images/item-03.jpg" alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true"/>
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"/>
                </a>

                <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/* <!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                Denim jacket blue
            </a>

            <span className="block2-price m-text6 p-r-5">
										$92.50
									</span>
        </div>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
    {/*<!-- Block2 -->*/}
    <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative">
            <img src="./images/item-05.jpg" alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true"/>
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"/>
                </a>

                <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/*<!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                Coach slim easton black
            </a>

            <span className="block2-price m-text6 p-r-5">
										$165.90
									</span>
        </div>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
    {/*<!-- Block2 -->*/}
    <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
            <img src="./images/item-07.jpg" alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true"/>
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"/>
                </a>

                <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/* <!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                Frayed denim shorts
            </a>

            <span className="block2-oldprice m-text7 p-r-5">
										$29.50
									</span>

            <span className="block2-newprice m-text8 p-r-5">
										$15.90
									</span>
        </div>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
    {/* <!-- Block2 -->*/}
    <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
            <img src="images/item-01.jpg" alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true"/>
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"/>
                </a>

                <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/* <!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                Herschel supply co 25l
            </a>

            <span className="block2-price m-text6 p-r-5">
										$75.00
									</span>
        </div>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
    {/*<!-- Block2 -->*/}
    <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative">
            <img src="./images/item-14.jpg" alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true"/>
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"/>
                </a>

                <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/* <!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                Denim jacket blue
            </a>

            <span className="block2-price m-text6 p-r-5">
										$92.50
									</span>
        </div>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
    {/*<!-- Block2 -->*/}
    <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
            <img src="images/item-06.jpg" alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                </a>

                <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/*<!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                Herschel supply co 25l
            </a>

            <span className="block2-price m-text6 p-r-5">
										$75.00
									</span>
        </div>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
    {/*<!-- Block2 -->*/}
    <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative">
            <img src="images/item-08.jpg" alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                </a>

                <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/*<!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                Denim jacket blue
            </a>

            <span className="block2-price m-text6 p-r-5">
										$92.50
									</span>
        </div>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
    {/*<!-- Block2 -->*/}
    <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative">
            <img src="images/item-10.jpg" alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                </a>

                <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/* <!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                Coach slim easton black
            </a>

            <span className="block2-price m-text6 p-r-5">
										$165.90
									</span>
        </div>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
    {/* <!-- Block2 -->*/}
    <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
            <img src="images/item-11.jpg" alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                </a>

                <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/* <!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                Frayed denim shorts
            </a>

            <span className="block2-oldprice m-text7 p-r-5">
										$29.50
									</span>

            <span className="block2-newprice m-text8 p-r-5">
										$15.90
									</span>
        </div>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
    {/* <!-- Block2 -->*/}
    <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
            <img src="images/item-12.jpg" alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                </a>

                <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/* <!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                Herschel supply co 25l
            </a>

            <span className="block2-price m-text6 p-r-5">
										$75.00
									</span>
        </div>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
    {/* <!-- Block2 -->*/}
    <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative">
            <img src="images/item-15.jpg" alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                </a>

                <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/* <!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                Denim jacket blue
            </a>

            <span className="block2-price m-text6 p-r-5">
										$92.50
									</span>
        </div>
    </div>
</div>

<li className="m-r-10">
    <input className="checkbox-color-filter"
           id="color-filter2"
           type="checkbox"
           name="color-filter2"
    />
    <label className="color-filter color-filter2" htmlFor="color-filter2" />
</li>

<li className="m-r-10">
    <input className="checkbox-color-filter"
           id="color-filter3"
           type="checkbox"
           name="color-filter3"
    />
    <label className="color-filter color-filter3" htmlFor="color-filter3" />
</li>

<li className="m-r-10">
    <input className="checkbox-color-filter"
           id="color-filter4"
           type="checkbox"
           name="color-filter4"
    />
    <label className="color-filter color-filter4" htmlFor="color-filter4" />
</li>

<li className="m-r-10">
    <input className="checkbox-color-filter"
           id="color-filter5"
           type="checkbox"
           name="color-filter5"
    />
    <label className="color-filter color-filter5" htmlFor="color-filter5" />
</li>

<li className="m-r-10">
    <input className="checkbox-color-filter"
           id="color-filter6"
           type="checkbox"
           name="color-filter6"
    />
    <label className="color-filter color-filter6" htmlFor="color-filter6" />
</li>

<li className="m-r-10">
    <input className="checkbox-color-filter"
           id="color-filter7"
           type="checkbox"
           name="color-filter7"
    />
    <label className="color-filter color-filter7" htmlFor="color-filter7" />
</li>