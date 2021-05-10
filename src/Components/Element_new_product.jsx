import React from 'react';
import Spinner from "react-bootstrap/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {SERVER_IMAGES} from "../utils/constants";
import {updateCart, updateQuanCart} from "../store/action_creatores";
import {Link} from "react-router-dom";
import {VIEW_ONE} from "../router/url";

function ElementNewProduct(props) {
    const isLoading = useSelector((store) => store.app.isLoading);
    const catalogList = useSelector((store) => store.app.catalogList);
    const fetchStatus = useSelector((store) => store.app.fetchStatus);
    const dispatch = useDispatch();
    let cart = useSelector((store) => store.app.cart);

    function getRandomInteger(min=1, max=10) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let elementData = {};

    if (catalogList.length !== 0) {
        const randomtemp = getRandomInteger(0,catalogList.length-1);
        elementData = catalogList[randomtemp];
        }

    function handleAddCart() {
        const newPos = {
            id: elementData.id,
            quant: 1,
            price: elementData.price,
            total: elementData.price
        };

        if ((cart.filter((item) => item.id === newPos.id)).length !== 0){
            cart.map((item) => {
                if (item.id === newPos.id) {
                    item.quant = item.quant+newPos.quant;
                    item.total = item.price*item.quant;
                }
            });} else cart.push(newPos);
        dispatch(updateCart(cart));
        dispatch(updateQuanCart(cart.length));
    }

    if (Object.keys(elementData).length === 0) {
        console.log("ПРОШЕЛ ТРУЕ");
    return (
        <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative">
                <div style={{width:"360px", height:"480px"}}>
                    <Spinner
                        animation="border"
                        variant="secondary"
                        style={{
                            display: "flex",
                            position: "absolute",
                            left:"47%",
                            top:"47%"
                        }}
                    >
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>

                <div className="block2-overlay trans-0-4">
                    <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                        <i className="icon-wishlist icon_heart_alt" aria-hidden="true"/>
                        <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"/>
                    </a>

                    <div className="block2-btn-addcart w-size1 trans-0-4">
                        {/* <!-- Button -->*/}
                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Loading...
                        </button>
                    </div>
                </div>
            </div>

            <div className="block2-txt p-t-20">
                <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                </a>

                <span className="block2-price m-text6 p-r-5">
                    </span>
            </div>
        </div>
    )} else {
        console.log("ПРОШЕЛ FALSE");
        return (
            <div className="block2">
                <div className="block2-img wrap-pic-w of-hidden pos-relative">
                    <div style={{
                        width:"360px",
                        height:"480px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                    <img src={`${SERVER_IMAGES}${elementData.img_url}`}/>
                    </div>

                    <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                            <i className="icon-wishlist icon_heart_alt" aria-hidden="true"/>
                            <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"/>
                        </a>

                        <div className="block2-btn-addcart w-size1 trans-0-4">
                            {/* <!-- Button -->*/}
                            <button
                                className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4"
                                onClick={handleAddCart}
                            >
                                В корзину
                            </button>
                        </div>
                    </div>
                </div>

                <div className="block2-txt p-t-20">
                    <Link to={`${VIEW_ONE}/${elementData.id}`} className="block2-name dis-block s-text3 p-b-5">
                        {elementData.title}
                    </Link>

                    <span className="block2-price m-text6 p-r-5">
									${elementData.price}
                    </span>
                </div>
            </div>
        )}
}

export default React.memo(ElementNewProduct);