import React from "react";
import {NAV, ROOT, CART} from "../router/url";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";

function WrapHeader (props) {
    // const quanCart = (useSelector((store) => store.app.cart)).length;
    // const quan = useSelector((store) => store.app.count);
    const quanCart = useSelector((store) => store.app.quan);

    function renderNavItem (item) {
        return (
            <li className={
                window.location.pathname === item.url ? 'sale-noti' : ''
            } key={item.url}>
                <Link to={item.url}>{item.title}</Link>
            </li>
        )

    }

    return (
        <div className="wrap_header">
            {/*<!-- Logo -->*/}
            <Link to={ROOT} className="logo">
                <img src="images/icons/logo.png" alt="IMG-LOGO"/>
            </Link>

            {/*<!-- Menu -->*/}
            <div className="wrap_menu">
                <nav className="menu">
                    <ul className="main_menu">
                        {
                            NAV.map(renderNavItem)
                        }
                    </ul>
                </nav>
            </div>

            {/*<!-- Header Icon -->*/}
            <div className="header-icons">
                <a href="#" className="header-wrapicon1 dis-block">
                    <img src="./images/icons/icon-header-01.png" className="header-icon1" alt="ICON"/>
                </a>

                <span className="linedivide1"></span>

                <div className="header-wrapicon2">
                    <Link to={CART}>
                    <img src="./images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown"
                         alt="ICON"/>
                    <span className="header-icons-noti">{quanCart}</span>
                    </Link>

                    {/*<!-- Header cart noti -->*/}
                    <div className="header-cart header-dropdown">
                        <ul className="header-cart-wrapitem">
                            <li className="header-cart-item">
                                <div className="header-cart-item-img">
                                    <img src="./images/item-cart-01.jpg" alt="IMG"/>
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
                                    <img src="./images/item-cart-02.jpg" alt="IMG"/>
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
                                    <img src="./images/item-cart-03.jpg" alt="IMG"/>
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
        </div>
    )
}

export default withRouter(React.memo(WrapHeader));