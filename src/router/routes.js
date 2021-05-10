import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import * as URL from './url';

// импортируем страницы - это просто ваши компоненты, которые должны быть отрисованы для какого-то урла
import RootPage from "../pages/root";
import About from "../pages/about";
import Blog from "../pages/blog";
import Cart from "../pages/cart";
import Depo from "../pages/depo";
import Catalog from "../pages/catalog";
import Contact from "../pages/contact";
import PrdInfo from "../pages/prd_info";
import PrdAdd from "../pages/prd_add";

// import MovieListPage from "../pages/movies";
// import ViewOneMoviePage from '../pages/view_one';

export default (

        <Switch> { /* Компонент-матрешка, работает аналогично switch-case в JavaScript, только в качестве значения для сравнения использует URL из браузера  */ }
            <Route exact path={ URL.ROOT } component={ RootPage } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
            <Route exact path={ URL.ABOUT } component={ About } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
            <Route exact path={ URL.BLOG } component={ Blog } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
            <Route exact path={ URL.DEPO } component={ Depo } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
            <Route exact path={ URL.CART } component={ Cart } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
            <Route exact path={ URL.CATALOG } component={ Catalog } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
            <Route exact path={ URL.CONTACT } component={ Contact } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
            <Route exact path={ URL.VIEW_ONE } component={ PrdInfo } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
            <Route exact path={ URL.PRD_INFO } component={ PrdInfo } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
            <Route exact path={ URL.PRD_ADD } component={ PrdAdd } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
            <Route exact path={ URL.CATALOG_CATEGORY } component={ Catalog } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}

            {/*<Route exact path={ URL.MOVIES } component={ MovieListPage } />*/}
            {/*<Route exact path={ URL.VIEW_ONE_MOVIE } component={ ViewOneMoviePage } />*/}

        </Switch>
);