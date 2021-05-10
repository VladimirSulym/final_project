import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import TitlePage from "../Components/catalog/title_page";
import Element from "../Components/catalog/element";
import CategoryFilter from "../Components/catalog/filter/category";
import BrandFilter from "../Components/catalog/filter/brand";
import PriceFilter from "../Components/catalog/filter/price";
import ColorFilter from "../Components/catalog/filter/color";
import SearchProducts from "../Components/catalog/filter/search";
import {
    activePagination,
    fetchFilterData,
    filterBrand,
    filterColor,
    filterPrice,
    sortPrice, updateCart,
} from "../store/action_creatores";
import {CATALOG} from "../router/url";
import {Link} from "react-router-dom";
import PaginationPage from "../Components/catalog/paginationPage";


function Catalog(props) {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(fetchFilterData())},[])

    const catalogList = useSelector((store) => store.app.catalogList);
    const categoryList = useSelector((store) => store.app.categoryList);
    const brandList = useSelector((store) => store.app.brandList);
    const colorList = useSelector((store) => store.app.colorList);
    const filterColorID = useSelector((store) => store.app.filter.color);
    const filterBrandID = useSelector((store) => store.app.filter.brand);
    const priceRange = useSelector((store) => store.app.priceRange[0]);
    console.log("priceRange 1111 --->>",priceRange)

    const rangeData = useSelector((store) => store.app.filter.price);

    const sortPriceDate = useSelector((store) => store.app.sort);
    const activePaginationData = useSelector((store) => store.app.activePagination);

    // console.log('filterCategory -> ',filterCategory);
    // console.log('props ->', props);
    // console.log("rangeData --",rangeData);

    function filterPrdCategory () {
        let cat = null;
        categoryList.forEach((item) => {
            if (item.url === props.match.params.categoryName)
            {cat=item.id}
        });
        return (cat);
    }
    const catID = filterPrdCategory();

    let finalCatalog = catalogList;

    if (props.match.params.categoryName) {
        finalCatalog = finalCatalog.filter((item) => item.category === catID);
    }

    if (filterColorID) {
        finalCatalog = finalCatalog.filter((item) => item.colors === filterColorID);
    }

    if (filterBrandID) {
        finalCatalog = finalCatalog.filter((item) => item.brand === filterBrandID);
    }

    if (rangeData) {
        finalCatalog = finalCatalog.filter((item) => (item.price >= rangeData[0] && item.price <= rangeData[1]));
    }
    // let priceMin = 0;
    // let priceMax = 1000;
    //
    // if (priceRange){
    //     priceMin = +priceRange.priceMin;
    //     priceMax = +priceRange.priceMax
    //     console.log("OBNOVILLL")
    // }

    function handleClickRessetColor (e) {
        dispatch(filterColor(e.target.getAttribute('')))
    }

    function handleClickRessetBrand (e) {
        dispatch(filterBrand(e.target.getAttribute('')))
    }

    function handleClickRessetPrice () {
        dispatch(filterPrice([+priceRange.priceMin, +priceRange.priceMax]))
    }

    function onChangeHandler (e) {
        dispatch(sortPrice(e.target.value));
    }

    if (sortPriceDate === "min2max"){
            finalCatalog.sort((a, b) => a.price - b.price)
        } else if (sortPriceDate === "max2min"){
            finalCatalog.sort((a, b) => b.price - a.price)
            } else finalCatalog.sort((a, b) => a.id - b.id)

    function builPaginationData () {
        let res = [];
        const index = finalCatalog.length / 12;
        console.log('index =>',index);
        for (let i=0; i<index; i++){
            res.push(i+1);
        }
        return res;
    }

    const paginationData = builPaginationData();

    console.log('paginationData =>',paginationData);

    const finalCatalogTotalRes = finalCatalog.length

    if (paginationData.length > 1) {
        console.log('paginationData.length =>', paginationData.length);
        console.log('activePaginationData =>', activePaginationData);
        console.log('finalCatalog Before Slice =>',finalCatalog);
        finalCatalog = finalCatalog.slice(((activePaginationData-1)*12),((activePaginationData-1)*12)+12);
        console.log('finalCatalog.Slice =>',finalCatalog);
    }

    useEffect(()=>{dispatch(activePagination(1))
        return (()=>{dispatch(activePagination(1))})
    },[]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        {/*<!-- Title Page -->*/}
        <TitlePage />

    {/* !--Content page-- */}
    <section className="bgwhite p-t-55 p-b-65">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
                    <div className="leftbar p-r-20 p-r-0-sm">
                        {/* <!--  -->*/}
                        <h4 className="m-text14 p-b-7">
                            Категории
                        </h4>
                        <ul className="p-b-54">
                            {categoryList.map((item) => {
                                return (<CategoryFilter
                            title = {item.title}
                            url = {item.url}
                            id = {item.id}
                            />
                            )})}
                            <li className="p-t-4">
                            <Link to={CATALOG}>
                                <button
                                    className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
                                >
                                    все категории
                                </button>
                            </Link>
                            </li>
                        </ul>


                        <h4 className="m-text14 p-b-7">
                            Бренды
                        </h4>

                        <ul className="p-b-54">
                            {brandList.map((item) => {
                                return (<BrandFilter
                            title = {item.title}
                            id = {item.id}
                            />)}
                            )}
                            <li className="p-t-4">
                                    <button
                                        className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
                                        onClick={handleClickRessetBrand}
                                    >
                                        все категории
                                    </button>
                            </li>
                        </ul>


                        {/*<!--  -->*/}
                        <div className="filter-price p-t-22 p-b-50 bo3">

                            <div className="m-text15 p-b-17">
                                Цена
                            </div>
                                <PriceFilter
                                // priceMin = {+priceMin}
                                // priceMax = {+priceMax}
                                />
                            <div className="flex-sb-m flex-w p-t-16">
                                <div className="w-size11">
                                    {/*<!-- Button -->*/}
                                    <button
                                        className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
                                        onClick={handleClickRessetPrice}
                                    >
                                        resset
                                    </button>
                                </div>

                                <div className="s-text3 p-t-10 p-b-10">
                                    Диапазон: $<span id="value-lower">{rangeData[0]}</span> - $<span id="value-upper">{rangeData[1]}</span>
                                </div>
                            </div>
                        </div>

                        <div className="filter-color p-t-22 p-b-50 bo3">
                            <div className="m-text15 p-b-12">
                                Цвет
                            </div>

                            <ul className="flex-w">
                                {
                                    colorList.map((item) =>
                                        <ColorFilter
                                        id = {item.id}
                                        color = {item.color}
                                        />
                                    )
                                }
                            </ul>
                            <div className="w-size11">
                                {/*<!-- Button -->*/}
                                <button
                                    className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
                                    onClick={handleClickRessetColor}
                                >
                                    resset
                                </button>
                            </div>
                        </div>


                        {/*<SearchProducts/>*/}


                    </div>
                </div>

                <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                    {/*<!--  -->*/}
                    <div className="flex-sb-m flex-w p-b-35">
                        <div className="flex-w">
                            <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                                <select className="custom-select" name="sorting" onChange={onChangeHandler}>
                                    <option selected="select" value="def">Цена по умолчанию</option>
                                    <option value="min2max">Цена с мин до макс</option>
                                    <option value="max2min">Цена с макс до мин</option>
                                </select>
                            </div>
                        </div>

                        <span className="s-text8 p-t-5 p-b-5">
							Отражаются {((activePaginationData-1)*12)+1}–
                            {(((activePaginationData-1)*12)+12)>finalCatalogTotalRes ? finalCatalogTotalRes : (((activePaginationData-1)*12)+12)} из {finalCatalogTotalRes} результатов
						</span>
                    </div>

                    {/*<!-- Product -->*/}
                    <div className="row">

                        {finalCatalog.map((item) =>
                            <Element
                            title = {item.title}
                            id = {item.id}
                            price = {item.price}
                            img_url = {item.img_url}
                            />
                        )}

                    </div>

                    {/* <!-- Pagination -->*/}

                    <div className="pagination flex-m flex-w p-t-26">

                        { paginationData.length > 1 ?
                            paginationData.map((item) =>
                                <PaginationPage
                                number_page = {item}
                                />
                            ) : ''
                        }

                    </div>

                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default React.memo(Catalog);