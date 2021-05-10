import React from "react";
import {Link} from "react-router-dom";
import {CATALOG} from "../router/url";
import baner_1 from "../Components/img/baner_1.jpg"
import baner_2 from "../Components/img/baner_2.jpg"

function Banner2 () {
    return (
        <section className="banner2 bg5 p-t-55 p-b-55">
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
                        <div className="hov-img-zoom pos-relative">
                            <img src={baner_1} alt="IMG-BANNER"/>

                            <div className="ab-t-l sizefull flex-col-c-m p-l-15 p-r-15">
							<span className="m-text9 p-t-45 fs-20-sm">
								Мебель
							</span>

                                <h3 className="l-text1 fs-35-sm">
                                    Обзор
                                </h3>

                                <Link to={CATALOG} className="s-text4 hov2 p-t-20">
                                    Смотреть Каталог
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
                        <div className="bgwhite hov-img-zoom pos-relative p-b-20per-ssm">
                            <img src={baner_2} alt="IMG-BANNER"/>

                            <div className="ab-t-l sizefull flex-col-c-b p-l-15 p-r-15 p-b-20">
                                <div
                                    className="t-center"
                                    style={{background:"#454545", opacity: "0.8", color: "black", padding:"10px 25px"}}
                                >
                                    <a href="#"
                                       className="dis-block s-text3 p-b-5"
                                       style={{color: "white"}}
                                    >
                                        Диван МЕЧТА
                                    </a>

                                    <span
                                        className="block2-oldprice m-text7 p-r-5"
                                        style={{color: "white"}}
                                    >
									$29.50
                      </span>

                                    <span className="block2-newprice m-text8">
									$15.90
                      </span>
                                </div>

                                <div className="flex-c-m p-t-44 p-t-30-xl">
                                    <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
									<span className="m-text10 p-b-1 days">
										69
									</span>

                                        <span className="s-text5">
										days
                        </span>
                                    </div>

                                    <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
									<span className="m-text10 p-b-1 hours">
										04
									</span>

                                        <span className="s-text5">
										hrs
									</span>
                                    </div>

                                    <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
									<span className="m-text10 p-b-1 minutes">
										32
									</span>

                                        <span className="s-text5">
										mins
                        </span>
                                    </div>

                                    <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
									<span className="m-text10 p-b-1 seconds">
										05
									</span>

                                        <span className="s-text5">
										secs
									</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Banner2);