import React from "react";
import {useSelector} from "react-redux";
import Spinner from 'react-bootstrap/Spinner'
import {SERVER_IMAGES} from "../utils/constants";
import {CATALOG} from "../router/url";
import {Link} from "react-router-dom";

function Banner () {
    const isLoading = useSelector((store) => store.app.isLoading);
    const catalogList = useSelector((store) => store.app.catalogList);
    const categoryList = useSelector((store) => store.app.categoryList);
    const fetchStatus = useSelector((store) => store.app.fetchStatus);


    function getRandomInteger(min=1, max=10) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let banerData = [];

    if (categoryList.length !== 0 && catalogList.length !== 0) {
        let banerDataTemp = [];
        for (let i=0; categoryList.length > i; i++){
            banerDataTemp = catalogList.filter((item) => item.category === categoryList[i].id);
            const randomtemp = getRandomInteger(0,banerDataTemp.length-1);
            banerData = banerData.concat(banerDataTemp[randomtemp]);
        }
    }

    banerData = banerData.map((item)=>{
        let temp =[];
        [temp] = categoryList.filter((item1) => item1.id === item.category);
        item = {
            ...item,
            categoryTitle: temp.title,
            categoryUrl: temp.url
        };
        return(item)
    });

    const random = getRandomInteger();

    if (!(catalogList.length !== 0 && categoryList.length !== 0)) {
        return (
        <section className="banner bgwhite p-t-40 p-b-40">
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                        {/*<!-- block1 -->*/}
                        <div
                            className="block1 hov-img-zoom pos-relative m-b-30"
                        >
                                <div style={{width:"370px", height:"479px"}}>
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

                            <div className="block1-wrapbtn w-size2">
                                {/*<!-- Button -->*/}
                                <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    Loading...
                                </a>
                            </div>
                        </div>

                        {/*<!-- block1 -->*/}
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <div style={{width:"370px", height:"479px"}}>
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

                            <div className="block1-wrapbtn w-size2">
                                {/*<!-- Button -->*/}
                                <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    Loading...
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                        {/*<!-- block1 -->*/}
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <div style={{width:"370px", height:"479px"}}>
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

                            <div className="block1-wrapbtn w-size2">
                                {/*<!-- Button -->*/}
                                <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    Loading...
                                </a>
                            </div>
                        </div>

                        {/*<!-- block1 -->*/}
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <div style={{width:"370px", height:"479px"}}>
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

                            <div className="block1-wrapbtn w-size2">
                                {/*<!-- Button -->*/}
                                <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    Loading...
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                        {/*<!-- block1 -->*/}
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <div style={{width:"370px", height:"479px"}}>
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

                            <div className="block1-wrapbtn w-size2">
                                {/*<!-- Button -->*/}
                                <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    Loading...
                                </a>
                            </div>
                        </div>

                        {/*<!-- block2 -->*/}
                        <div className="block2 wrap-pic-w pos-relative m-b-30">
                            <img src="images/icons/bg-01.jpg" alt="IMG"/>

                            <div className="block2-content sizefull ab-t-l flex-col-c-m">
                                <h4 className="m-text4 t-center w-size3 p-b-8">
                                    Sign up & get 20% off
                                </h4>

                                <p className="t-center w-size4">
                                    Be the frist to know about the latest fashion news and get exclu-sive offers
                                </p>

                                <div className="w-size2 p-t-25">
                                    {/*<!-- Button -->*/}
                                    <a href="#" className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                                        Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    } else {
        return (
        <section className="banner bgwhite p-t-40 p-b-40">
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                        {/*<!-- block1 -->*/}
                        <div
                            className="block1 hov-img-zoom pos-relative m-b-30"
                        >
                            <div style={{
                                width:"370px",
                                height:"479px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <img
                                    src={`${SERVER_IMAGES}${banerData[0].img_url}`}
                                    alt="IMG-BENNER"
                                />
                            </div>

                            <div className="block1-wrapbtn w-size2">
                                {/*<!-- Button -->*/}
                                <Link to={`${CATALOG}/${banerData[0].categoryUrl}`} className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    {banerData[0].categoryTitle}
                                </Link>
                            </div>
                        </div>

                        {/*<!-- block1 -->*/}
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <div style={{
                                width:"370px",
                                height:"339px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <img
                                    src={`${SERVER_IMAGES}${banerData[1].img_url}`}
                                    alt="IMG-BENNER"
                                />
                            </div>

                            <div className="block1-wrapbtn w-size2">
                                {/*<!-- Button -->*/}
                                <Link to={`${CATALOG}/${banerData[1].categoryUrl}`} className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    {banerData[1].categoryTitle}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                        {/*<!-- block1 -->*/}
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <div style={{
                                width:"370px",
                                height:"339px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <img
                                    src={`${SERVER_IMAGES}${banerData[2].img_url}`}
                                    alt="IMG-BENNER"
                                />
                            </div>

                            <div className="block1-wrapbtn w-size2">
                                {/*<!-- Button -->*/}
                                <Link to={`${CATALOG}/${banerData[2].categoryUrl}`} className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    {banerData[2].categoryTitle}
                                </Link>
                            </div>
                        </div>

                        {/*<!-- block1 -->*/}
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <div style={{
                                width:"370px",
                                height:"479px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <img
                                    src={`${SERVER_IMAGES}${banerData[3].img_url}`}
                                    alt="IMG-BENNER"
                                />
                            </div>

                            <div className="block1-wrapbtn w-size2">
                                {/*<!-- Button -->*/}
                                <Link to={`${CATALOG}/${banerData[3].categoryUrl}`} className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    {banerData[3].categoryTitle}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                        {/*<!-- block1 -->*/}
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <div style={{
                                width:"370px",
                                height:"479px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <img
                                    src={`${SERVER_IMAGES}${banerData[4].img_url}`}
                                    alt="IMG-BENNER"
                                />
                            </div>

                            <div className="block1-wrapbtn w-size2">
                                {/*<!-- Button -->*/}
                                <Link to={`${CATALOG}/${banerData[4].categoryUrl}`} className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    {banerData[4].categoryTitle}
                                </Link>
                            </div>
                        </div>

                        {/*<!-- block2 -->*/}
                        <div className="block2 wrap-pic-w pos-relative m-b-30">
                            <img src="images/icons/bg-01.jpg" alt="IMG"/>

                            <div className="block2-content sizefull ab-t-l flex-col-c-m">
                                <h4 className="m-text4 t-center w-size3 p-b-8">
                                    Подпишитесь <br />скидка 20%
                                </h4>

                                <p className="t-center w-size4">
                                    Будьте первыми, кто узнает о последних новостях мебельного рынка
                                    и получит эксклюзивные предложения
                                </p>

                                <div className="w-size2 p-t-25">
                                    {/*<!-- Button -->*/}
                                    <a href="#" className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                                        подписаться
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default React.memo(Banner);