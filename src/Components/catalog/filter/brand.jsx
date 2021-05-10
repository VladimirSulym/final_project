import React from 'react';
import {useDispatch} from "react-redux";
import {filterBrand} from "../../../store/action_creatores";

function BrandFilter(props) {
    const {title, id} = props;
    const dispatch = useDispatch();

    function handleClickBrand (e) {
        dispatch(filterBrand(e.target.getAttribute('idBrand')))
    }
    return (
        <li
            className="p-t-4"
            key = {id}
        >
            <a
                onClick={handleClickBrand}
                style={{cursor: "pointer", textTransform: "capitalize"}}
                className="s-text13 active1"
                idBrand={id}
            >
                {title}
            </a>
        </li>
    );
}

export default React.memo(BrandFilter);