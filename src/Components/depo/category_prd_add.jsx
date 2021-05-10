import React from 'react';
import {useSelector} from "react-redux";

function CategoryPrdAdd(props) {
    const {id, title} = props;
    // const colorList = useSelector((store) => store.app.colorList);

    // let colorTitle = colorList.filter((item) => item.id === colorData);

    return (
            <option value={+id}>{title}</option>
        // <select className="custom-select" name="color">
        //     <option>{colorList[0].title}</option>
        // </select>
    );
}

export default React.memo(CategoryPrdAdd);