import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SERVER_IMAGES} from "../utils/constants";
import ColorPrdInfo from "../Components/catalog/color_prd_info";
import {Link, withRouter} from "react-router-dom";
import {CATALOG, ROOT} from "../router/url";
import {updateCart, updateCount, updateQuanCart} from "../store/action_creatores";

function PrdInfo(props) {
    console.log("PROPS ===>>>", props);
    const dispatch = useDispatch();

    const catalogList = useSelector((store) => store.app.catalogList);
    const categoryList = useSelector((store) => store.app.categoryList);
    const brandList = useSelector((store) => store.app.brandList);

    let cart = useSelector((store) => store.app.cart);
    console.log('cart 1111- >', cart)

    const finalElement = catalogList.filter((item) => item.id === props.match.params.id);
    const category = categoryList.filter((item) => item.id === finalElement[0].category);
    const brand = brandList.filter((item) => item.id === finalElement[0].brand);

    let quant = useSelector((store) => store.app.count);

    function handleClicBattonPlus() {
        quant++;
        dispatch(updateCount(quant))
    }
    function handleClicBattonMinus() {
        quant > 0 ? quant-- : quant=0;
        dispatch(updateCount(quant))
    }

    function handleAddCart() {
        const newPos = {
            id: finalElement[0].id,
            quant,
            price: finalElement[0].price,
            total: quant*finalElement[0].price,
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
        console.log('newPos - >', newPos);
        console.log('cart222 - >', cart);
    }

    useEffect(()=>{dispatch(updateCount(0))
        return (()=>{dispatch(updateCount(0))})
    },[]);

    useEffect(()=>{dispatch(updateCart(cart))
        return (()=>{dispatch(updateCart(cart))})
    },[]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        {/*<!-- breadcrumb -->*/}
        <div className="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm">
            <Link to={ROOT} className="s-text16">
                Главная
                <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"/>
            </Link>

            <Link to={CATALOG} className="s-text16">
                Каталог
                <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"/>
            </Link>

            <Link to={`${CATALOG}/${category[0].url}`} className="s-text16">
                {category[0].title}
                <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"/>
            </Link>

            <span className="s-text17" style={{textTransform: "capitalize"}}>
                {brand[0].title}
		</span>
        </div>

    {/*<!-- Product Detail -->*/}
    <div className="container bgwhite p-t-35 p-b-80">
        <div className="flex-w flex-sb">
            <div className="w-size13 p-t-30 respon5">
                <div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-dots"></div>

                    <div className="slick3">
                        <div className="item-slick3" data-thumb="images/thumb-item-01.jpg">
                            <div className="wrap-pic-w">
                                <img src={`${SERVER_IMAGES}${finalElement[0].img_url}`} alt={finalElement[0].title}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-size14 p-t-30 respon5">
                <h4 className="product-detail-name m-text16 p-b-13">
                    {finalElement[0].title}
                </h4>

                <span className="m-text17">
					${finalElement[0].price}
				</span>

                <p className="s-text8 p-t-10">
                    {finalElement[0].desc ? finalElement[0].desc : `Описание отсутствует` }<br/>
                    <div style={{textTransform: "uppercase"}}>
                    Производитель: {brand[0].title}
                    </div>
                </p>

                {/* <!--  -->*/}
                <div className="p-t-33 p-b-60">

                    <div className="flex-m flex-w">
                        <div className="s-text15 w-size15 t-center">
                            Цвет
                        </div>


                        <div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">

                            <ColorPrdInfo
                            colorData={finalElement[0].colors}
                            />
                        </div>
                    </div>

                    <div className="flex-r-m flex-w p-t-10">
                        <div className="w-size16 flex-m flex-w">
                            <div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                                <button
                                    className="btn-num-product-down color1 flex-c-m size7 bg8 eff2"
                                    onClick={handleClicBattonMinus}
                                >
                                    <i className="fs-12 fa fa-minus" aria-hidden="true"/>
                                </button>

                                <input className="size8 m-text18 t-center num-product" type="number" name="num-product"
                                       value={quant}/>

                                    <button
                                        className="btn-num-product-up color1 flex-c-m size7 bg8 eff2"
                                        onClick={handleClicBattonPlus}
                                    >
                                        <i className="fs-12 fa fa-plus" aria-hidden="true"/>
                                    </button>
                            </div>

                            <div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
                                {/*<!-- Button -->*/}
                                <button
                                    className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
                                    onClick={handleAddCart}
                                >
                                    в корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-b-45">
                    <span className="s-text8 m-r-35">ID продукта: {finalElement[0].id}</span>
                    <span className="s-text8">Категория: {category[0].title}</span>
                </div>

                {/*<!--  -->*/}
                <div className="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
                    <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                        Description
                        <i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"/>
                        <i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"/>
                    </h5>

                    <div className="dropdown-content dis-none p-t-15 p-b-23">
                        <p className="s-text8">
                            Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel
                            sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
                        </p>
                    </div>
                </div>

                <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
                    <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                        Additional information
                        <i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"/>
                        <i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"/>
                    </h5>

                    <div className="dropdown-content dis-none p-t-15 p-b-23">
                        <p className="s-text8">
                            Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel
                            sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
                        </p>
                    </div>
                </div>

                <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
                    <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                        Reviews (0)
                        <i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"/>
                        <i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"/>
                    </h5>

                    <div className="dropdown-content dis-none p-t-15 p-b-23">
                        <p className="s-text8">
                            Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel
                            sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </>
    );
}

export default withRouter(React.memo(PrdInfo));