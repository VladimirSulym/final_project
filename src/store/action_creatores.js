import * as ACT from './action';
import {API_SERVER} from "../utils/constants";

export function updateCatalogList(payload) {
    return {
        type: ACT.UPDATE_LIST,
        payload,
    };
}
export function fetchFailed() {
    return {
        type: ACT.FETCH_FAILED,
    };
}
export function fetchSuccess() {
    return {
        type: ACT.FETCH_SUCCESS,
    };
}
export function updateLoading(payload) {
    return {
        type: ACT.UPDATE_LOADING,
        payload,
    };
}
export function updateColor(payload) {
    return {
        type: ACT.UPDATE_COLOR,
        payload,
    };
}
export function updateCategory(payload) {
    return {
        type: ACT.UPDATE_CATEGORY,
        payload,
    };
}
export function updateBrand(payload) {
    return {
        type: ACT.UPDATE_BRAND,
        payload,
    };
}
export function updatePrice(payload) {
    return {
        type: ACT.UPDATE_PRICE,
        payload,
    };
}
export function filterCategory(payload) {
    return {
        type: ACT.FILTER_CATEGORY,
        payload,
    };
}
export function filterBrand(payload) {
    return {
        type: ACT.FILTER_BRAND,
        payload,
    };
}
export function filterPrice(payload) {
    return {
        type: ACT.FILTER_PRICE,
        payload,
    };
}
export function filterColor(payload) {
    return {
        type: ACT.FILTER_COLOR,
        payload,
    };
}
export function updateCount(payload) {
    return {
        type: ACT.RESET_COUNT,
        payload,
    };
}
export function updateCart(payload) {
    return {
        type: ACT.UPDATE_CART,
        payload,
    };
}
export function updateQuanCart(payload) {
    return {
        type: ACT.UPDATE_QUANCART,
        payload,
    };
}
export function sortPrice(payload) {
    return {
        type: ACT.SORT_PRICE,
        payload,
    };
}
export function activePagination(payload) {
    return {
        type: ACT.ACTIVE_PAGINATION,
        payload,
    };
}

export function fetchData () {
    return (dispatcher) => {
        dispatcher(updateLoading(true));
        const data = fetch (`${API_SERVER}?controller=get&action=catalog`);

        data.then(response => {
            return response.json();
        }).then(localData => {
            dispatcher(updateCatalogList(localData));
            dispatcher(fetchSuccess());
            console.log('Response Data => ', localData);
        }).catch((e) => {
            dispatcher(fetchFailed());
            console.log('САБОТАЖ: ошибка загрузки данных -> ', e);
        }).finally(() => {
            dispatcher(updateLoading(false));
        });
    }
}

export function fetchFilterData () {
    return (dispatcher) => {
        dispatcher(updateLoading(true));
        const categoryData = fetch (`${API_SERVER}?controller=get&action=category`);
        const colorData = fetch (`${API_SERVER}?controller=get&action=color`);
        const brandData = fetch (`${API_SERVER}?controller=get&action=brand`);
        const priceData = fetch (`${API_SERVER}?controller=get&action=pricerange`);

        const allResponse = Promise.all([
            categoryData,
            colorData,
            brandData,
            priceData,
        ]);

        allResponse.then(
            (responseArr) => {
                return Promise.all([
                    responseArr[0].json(),
                    responseArr[1].json(),
                    responseArr[2].json(),
                    responseArr[3].json(),
                ]);
            }
        ).then (
            (dataArr) => {
                dispatcher(updateColor(dataArr[1]));
                dispatcher(updateCategory(dataArr[0]));
                dispatcher(updatePrice(dataArr[3]));
                dispatcher(updateBrand(dataArr[2]));
            }
        ).catch(
            (error) => {
                console.log('ВНИМАНИЕ: ошибка загрузки двнных Фильтра', error);
            }
        ).finally(
            () => {
                dispatcher(updateLoading(false));
            }
        )
    }
}