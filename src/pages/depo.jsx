import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import banner1 from "../Components/cart/img/baner1.jpg";
import RowInDepo from "../Components/depo/row_in_depo";
import {PRD_ADD, VIEW_ONE} from "../router/url";
import {Link} from "react-router-dom";
import CategoryPrdAdd from "../Components/depo/category_prd_add";
import BrandPrdAdd from "../Components/depo/brand_prd_add";
import ColorPrdAdd from "../Components/depo/color_prd_add";

function Depo(props) {
    const isLoading = useSelector((store) => store.app.isLoading);
    const catalogList = useSelector((store) => store.app.catalogList);
    const categoryList = useSelector((store) => store.app.categoryList);
    const brandList = useSelector((store) => store.app.brandList);
    const colorList = useSelector((store) => store.app.colorList);
    const fetchStatus = useSelector((store) => store.app.fetchStatus);
    const dispatch = useDispatch();
    let cart = useSelector((store) => store.app.cart);
    let quantInt = useSelector((store) => store.app.count);
    console.log('catalogList =>', catalogList)

    // let dataCart = cart;
    let dataDepo = Object.assign([], catalogList).reverse();
    console.log('catalogList REVERS =>', dataDepo)

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
                    Склад
                </h2>
            </section>



            {/*}<!-- Cart -->*/}
            <section className="depo bgwhite p-t-70 p-b-100">
                <div className="container">
                    <div style={{display: "flex", flexDirection: "row"}}>
                    {/*<!-- ADD -->*/}

                    <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
                        <h4 className="product-detail-name m-text16 p-b-13">
                            Добавить товар
                        </h4>
                        <form
                            id="dataUpload"
                            method="POST"
                            action="//192.168.1.4/?controller=upload&action=catalog"
                            encType="multipart/form-data">
                        </form>
                            Название: <br/>
                            <input form="dataUpload" style={{backgroundColor:"#EEE", width:"100%"}} type="text" name="title" /><br />
                            img: <br/>
                            <input form="dataUpload" style={{backgroundColor:"#EEE", width:"100%"}} type="text" name="img" /><br />
                            Производитель: <br/>
                                <select form="dataUpload" className="custom-select" name="brand">
                                    {
                                        brandList.map((item) =>
                                            <BrandPrdAdd
                                                id = {item.id}
                                                title = {item.title}
                                            />
                                        )
                                    }
                                </select>
                            Цвет: <br/>
                            <select form="dataUpload" className="custom-select" name="colors">
                                {
                                    colorList.map((item) =>
                                        <ColorPrdAdd
                                            id = {item.id}
                                            title = {item.title}
                                        />
                                    )
                                }
                            </select>
                            Категория: <br />
                            <select form="dataUpload" className="custom-select" name="category">
                                {
                                    categoryList.map((item) =>
                                        <CategoryPrdAdd
                                            id = {item.id}
                                            title = {item.title}
                                        />
                                    )
                                }
                            </select>
                            Цена: <br />
                            <input form="dataUpload" style={{backgroundColor:"#EEE", width:"100%"}} type="text" name="price" /><br />
                            Кол-во на складе: <br />
                            <input form="dataUpload" style={{backgroundColor:"#EEE", width:"100%"}} type="text" name="available"/><br />
                            Загрузка картинки: <br/>
                            <div className="size15 trans-0-4">
                                <input
                                    form="dataUpload"
                                    type="file" name="img" />
                            </div>
                            <div className="size15 trans-0-4">
                                <input
                                    form="dataUpload"
                                    className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
                                    style={{backgroundColor:"green"}}
                                    type="submit"
                                    name="submitAdd"
                                    value={'Добавить товар'}/>
                            </div>


                    </div>
                        <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
                            <h4 className="product-detail-name m-text16 p-b-13">
                                Удалить товар
                            </h4>
                            <form method="GET" action="//192.168.1.4/">
                                ID: <br/>
                                <input type="hidden" name="controller" value="delete" />
                                <input type="hidden" name="action" value="catalog" />
                                <input style={{backgroundColor:"#EEE", width:"250px"}} type="text" name="id" /><br />
                                <br />
                                <div className="size15 trans-0-4">
                                    <input
                                        className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
                                        style={{backgroundColor:"red"}}
                                        type="submit"
                                        name="submitAdd"
                                        value={'Удалить товар'}/>
                                </div>
                            </form>
                        </div>



                    <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
                        <h4 className="product-detail-name m-text16 p-b-13">
                            Изменить товар
                        </h4>
                        <form id="dataChange"
                              method="POST"
                              action="//192.168.1.4/?controller=change&action=catalog"
                              encType="multipart/form-data"/>
                            ID: <br/>
                            <input form="dataChange" style={{backgroundColor:"#EEE", width:"100%"}} type="text" name="id" /><br />
                            Название: <br/>
                            <input form="dataChange" style={{backgroundColor:"#EEE", width:"100%"}} type="text" name="title" /><br />
                            img: <br/>
                            <input form="dataChange" style={{backgroundColor:"#EEE", width:"100%"}} type="text" name="img" /><br />
                        Производитель: <br/>
                        <select form="dataChange" className="custom-select" name="brand">
                            {
                                brandList.map((item) =>
                                    <BrandPrdAdd
                                        id = {item.id}
                                        title = {item.title}
                                    />
                                )
                            }
                        </select>
                        Цвет: <br/>
                        <select form="dataChange" className="custom-select" name="colors">
                            {
                                colorList.map((item) =>
                                    <ColorPrdAdd
                                        id = {item.id}
                                        title = {item.title}
                                    />
                                )
                            }
                        </select>
                        Категория: <br />
                        <select form="dataChange" className="custom-select" name="category">
                            {
                                categoryList.map((item) =>
                                    <CategoryPrdAdd
                                        id = {item.id}
                                        title = {item.title}
                                    />
                                )
                            }
                        </select>
                            Цена: <br />
                            <input form="dataChange" style={{backgroundColor:"#EEE", width:"100%"}} type="text" name="price" /><br />
                            Кол-во на складе: <br />
                            <input form="dataChange" style={{backgroundColor:"#EEE", width:"100%"}} type="text" name="available"/><br />
                            Загрузка картинки: <br/>
                            <div className="size15 trans-0-4">
                            <input
                                form="dataChange"
                                type="file" name="img" />
                            </div>
                            <div className="size15 trans-0-4">
                            <input
                                form="dataChange"
                                className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
                                style={{backgroundColor:"blue"}}
                                type="submit"
                                name="submitAdd"
                                value={'Изменить товар'}/>
                            </div>
                    </div>

                    </div>

                    {/*<!-- Cart item -->*/}
                    <div className="container-table-depo pos-relative">
                        <div className="wrap-table-shopping-depo bgwhite">
                            <table className="table-shopping-depo">
                                <tr className="table-head">
                                    <th className="column-1">id</th>
                                    <th className="column-2">Фото</th>
                                    <th className="column-3">Название</th>
                                    <th className="column-4">Цена</th>
                                    <th className="column-5">Колл-во</th>
                                    <th className="column-6">Цвет</th>
                                    <th className="column-7">Категория</th>
                                </tr>

                                {dataDepo.map((item) =>{
                                    return (
                                        <RowInDepo
                                            id = {item.id}
                                            url ={item.img_url}
                                            title = {item.title}
                                            price = {item.price}
                                            available = {item.available}
                                            colors = {item.colors}
                                            category = {categoryList.filter((i) => i.id === item.category)}
                                        />
                                    )
                                })
                                }
                            </table>
                        </div>
                    </div>

                    {/*/!*<!-- Total -->*!/*/}
                    {/*<div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">*/}
                    {/*    <h5 className="m-text20 p-b-24">*/}
                    {/*        Cart Totals*/}
                    {/*    </h5>*/}

                    {/*    /!*<!--  -->*!/*/}
                    {/*    <div className="flex-w flex-sb-m p-t-26 p-b-30">*/}
					{/*<span className="m-text22 w-size19 w-full-sm">*/}
					{/*	Total:*/}
					{/*</span>*/}

                    {/*        <span className="m-text21 w-size20 w-full-sm">*/}
					{/*	${carTotal()}*/}
					{/*</span>*/}
                    {/*    </div>*/}

                    {/*    <div className="size15 trans-0-4">*/}
                    {/*        /!*<!-- Button -->*!/*/}
                    {/*        <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">*/}
                    {/*            Оплатить*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>
        </>
    );
}

export default React.memo(Depo);