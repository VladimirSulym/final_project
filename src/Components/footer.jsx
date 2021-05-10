import React from "react";
import dayjs from "dayjs";
import FooterCategory from "./footer/footer_category";
import {useSelector} from "react-redux";
import {NAV} from "../router/url";
import {Link} from "react-router-dom";

function Footer () {
    const categoryList = useSelector((store) => store.app.categoryList);

    function renderNavItem (item) {
        return (
            <li className="p-b-9" key={item.url}>
                <Link className="s-text7" to={item.url}>{item.title}</Link>
            </li>
        )

    }

    return (
        <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
            <div className="flex-w p-b-90">
                <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
                    <h4 className="s-text12 p-b-30">
                        СВЯЗАТЬСЯ
                    </h4>

                    <div>
                        <p className="s-text7 w-size27">
                            Остались вопросы? <br/>
                            Приходите к нам в магазин на 8-м этаже,<br/>
                            379 Hudson St, New York, NY 10018 или <br/>
                            позвоните нам по телефону (+1) 96716 6879
                        </p>

                        <div className="flex-m p-t-30">
                            <a href="#" className="fs-18 color1 p-r-20 fa fa-facebook"></a>
                            <a href="#" className="fs-18 color1 p-r-20 fa fa-instagram"></a>
                            <a href="#" className="fs-18 color1 p-r-20 fa fa-pinterest-p"></a>
                            <a href="#" className="fs-18 color1 p-r-20 fa fa-snapchat-ghost"></a>
                            <a href="#" className="fs-18 color1 p-r-20 fa fa-youtube-play"></a>
                        </div>
                    </div>
                </div>

                <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
                    <h4 className="s-text12 p-b-30">
                        Категории
                    </h4>

                    <ul>
                        {categoryList.map((item) => {
                            return (<FooterCategory
                                    title = {item.title}
                                    url = {item.url}
                                    id = {item.id}
                                />
                            )})}
                    </ul>
                </div>

                <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
                    <h4 className="s-text12 p-b-30">
                        Ссылки
                    </h4>

                    <ul>
                        {
                            NAV.map(renderNavItem)
                        }
                    </ul>
                </div>

                <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
                    <h4 className="s-text12 p-b-30">
                        Помощь
                    </h4>

                    <ul>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Track Order
                            </a>
                        </li>

                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Returns
                            </a>
                        </li>

                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Shipping
                            </a>
                        </li>

                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                FAQs
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
                    <h4 className="s-text12 p-b-30">
                        РАССЫЛКА
                    </h4>

                    <form>
                        <div className="effect1 w-size9">
                            <input className="s-text7 bg6 w-full p-b-5" type="text" name="email"
                                   placeholder="email@example.com"/>
                            <span className="effect1-line"></span>
                        </div>

                        <div className="w-size2 p-t-20">
                            {/*<!-- Button -->*/}
                            <button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                                Подписаться
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="t-center p-l-15 p-r-15">
                <div className="t-center s-text8 p-t-20">
                    Copyright ©
                    &nbsp;{dayjs().format('YYYY')}&nbsp;
                    All rights reserved. | This template is made with <i className="fa fa-heart-o" aria-hidden="true"/> by
                    <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer);