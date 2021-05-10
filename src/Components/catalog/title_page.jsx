import React from 'react';
import slider_1 from './img/slider_1.jpg'
import PropTypes from 'prop-types';


function TitlePage (props) {
    return (
        <section
            className="bg-title-page p-t-50 p-b-40 flex-col-c-m"
            style={{backgroundImage: `url(${slider_1})`}}
        >
            <h2 className="l-text2 t-center">
                Диваны
            </h2>
            <p className="m-text13 t-center">
                Новые поступления диванов Коллекции 2021
            </p>
        </section>
    );
}

export default React.memo(TitlePage);


