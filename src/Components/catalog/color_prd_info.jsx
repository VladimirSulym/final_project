import React from 'react';
import {useSelector} from "react-redux";

function ColorPrdInfo(props) {
    const {colorData} = props;
    const colorList = useSelector((store) => store.app.colorList);

    let colorTitle = colorList.filter((item) => item.id === colorData);

    return (
        <select className="custom-select" name="color">
            <option>{colorTitle[0].title}</option>
        </select>
    );
}

export default React.memo(ColorPrdInfo);