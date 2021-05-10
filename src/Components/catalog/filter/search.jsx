import React from 'react';

function SearchProducts(props) {
    return (
        <div className="search-product pos-relative bo4 of-hidden">
            <input className="s-text7 size6 p-l-23 p-r-50"
                   type="text"
                   name="search-product"
                   placeholder="Поиск продукта..."
            />

            <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                <i className="fs-12 fa fa-search" aria-hidden="true" />
            </button>
        </div>
    );
}

export default React.memo(SearchProducts);