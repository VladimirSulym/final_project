import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import RowInCart from "../Components/cart/row_in_cart";
import banner1 from "../Components/cart/img/baner1.jpg";

function Cart(props) {
    const isLoading = useSelector((store) => store.app.isLoading);
    const catalogList = useSelector((store) => store.app.catalogList);
    const fetchStatus = useSelector((store) => store.app.fetchStatus);
    const dispatch = useDispatch();
    let cart = useSelector((store) => store.app.cart);
    let quantInt = useSelector((store) => store.app.count);
    console.log('quantInt 1111111111 - >', quantInt)

    // let dataCart = cart;

    function assemblyCart () {
        let dataCartTemp = []
        catalogList.forEach((item) => {
            cart.forEach((item1) => {
                if (item.id === item1.id) {
                    item = {
                        ...item,
                        quant: item1.quant,
                        total: item.price*item1.quant
                    }
                    dataCartTemp = dataCartTemp.concat(item);
                }
            })
        })
        return dataCartTemp;
    }

    let dataCart = assemblyCart();

    function carTotal () {
        let sum = 0;
        dataCart.forEach((item) => {
            sum+=item.total;
        })
        return sum;
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {/*<!-- Title Page -->*/}
        <section className="bg-title-page p-t-40 p-b-50 flex-col-c-m"
                 style={{backgroundImage: `url(${banner1})`}}>
            <h2 className="l-text2 t-center">
                Корзина
            </h2>
        </section>

    {/*}<!-- Cart -->*/}
    <section className="cart bgwhite p-t-70 p-b-100">
        <div className="container">
            {/*<!-- Cart item -->*/}
            <div className="container-table-cart pos-relative">
                <div className="wrap-table-shopping-cart bgwhite">
                    <table className="table-shopping-cart">
                        <tr className="table-head">
                            <th className="column-1"></th>
                            <th className="column-2">Продукт</th>
                            <th className="column-3">Цена</th>
                            <th className="column-4 p-l-70">Колличество</th>
                            <th className="column-5">Сумма</th>
                            <th className="column-5">Удалить</th>
                        </tr>

                        {dataCart.map((item) =>{
                                return (
                                    <RowInCart
                                        id = {item.id}
                                        url ={item.img_url}
                                        title = {item.title}
                                        price = {item.price}
                                        total = {item.total}
                                        quant = {item.quant}
                                    />
                                )
                            })
                        }
                    </table>
                </div>
            </div>

            {/*<!-- Total -->*/}
            <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
                <h5 className="m-text20 p-b-24">
                    Cart Totals
                </h5>

                {/*<!--  -->*/}
                <div className="flex-w flex-sb-m p-t-26 p-b-30">
					<span className="m-text22 w-size19 w-full-sm">
						Total:
					</span>

                    <span className="m-text21 w-size20 w-full-sm">
						${carTotal()}
					</span>
                </div>

                <div className="size15 trans-0-4">
                    {/*<!-- Button -->*/}
                    <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                        Оплатить
                    </button>
                </div>
            </div>
        </div>
    </section>
            </>
    );
}

export default React.memo(Cart);