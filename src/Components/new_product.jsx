import React from "react";
import ElementNewProduct from "./Element_new_product";

function NewProduct () {

        return (
            <section className="container">
                <div className="container">
                    <div className="sec-title p-b-60">
                        <h3 className="m-text5 t-center">
                            Мы рекомендуем
                        </h3>
                    </div>

                    {/*<!-- Slide2 -->*/}
                    <div>
                        <div className="row">

                            <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">

                                {/* <!-- Block2 -->*/}
                                <ElementNewProduct />
                            </div>

                            <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                                {/*<!-- Block2 -->*/}
                                <ElementNewProduct />
                            </div>

                            <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                                {/*<!-- Block2 -->*/}
                                <ElementNewProduct />
                            </div>

                            <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                                {/*<!-- Block2 -->*/}
                                <ElementNewProduct />
                            </div>

                            <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                                {/*<!-- Block2 -->*/}
                                <ElementNewProduct />
                            </div>

                            <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                                {/*<!-- Block2 -->*/}
                                <ElementNewProduct />
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        )
}

export default React.memo(NewProduct);