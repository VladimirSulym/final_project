import React from "react";
import slider_1 from './img/slider_1.jpg'

function Slide1 () {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#f2f2f2',
            widht: '100%'
        }}>
            <img src={slider_1} alt="IMG-BENNER"/>
        </div>
    )
}

export default React.memo(Slide1);