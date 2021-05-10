import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {activePagination} from "../../store/action_creatores";

function PaginationPage(props) {
    const {number_page} = props;
    const dispatch = useDispatch();
    const activePaginationData = useSelector((store) => store.app.activePagination);

    function changeclassPagination (number_page, data) {
        let res = '';
        number_page === data ? res = 'active-pagination' : res = '';
        return res;
    }

    const activeClass = changeclassPagination(number_page, activePaginationData);

    function handleButtonClickPagination () {
        dispatch(activePagination(number_page))
    }

    return (
            <a href="#"
               className={`item-pagination flex-c-m trans-0-4 ${activeClass}`}
               onClick={handleButtonClickPagination}
            >
                {number_page}
            </a>
            // <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
    );
}

export default React.memo(PaginationPage);