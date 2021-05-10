import {combineReducers} from "redux";
import * as ACT from './action';

const initialStore = {
    catalogList: [],
    isLoading: false,
    fetchStatus: null,
    categoryList: [],
    colorList: [],
    brandList: [],
    priceRange: [{}],
    count: 0,
    filter: {
        category:'',
        brand:'',
        color: '',
        price:'',
    },
    cart: [],
    quan: 0,
    sort: '',
    activePagination: 1
};

function rootReducer(store = initialStore, action) {

    switch (action.type) {
        case ACT.ACTIVE_PAGINATION:
            return {
            ...store,
                activePagination: action.payload,
            }

        case ACT.SORT_PRICE:
            return {
            ...store,
                sort: action.payload,
            }

        case ACT.UPDATE_QUANCART:
            return {
            ...store,
                quan: action.payload,
            }

        case ACT.UPDATE_CART:
            return {
            ...store,
                cart: action.payload,
            }

        case ACT.RESET_COUNT:
            return {
            ...store,
                count: action.payload,
            }

        case ACT.UPDATE_LIST:
            return {
            ...store,
                catalogList: action.payload,
            }

        case ACT.UPDATE_LOADING:
            return {
            ...store,
                isLoading: action.payload,
            }

        case ACT.UPDATE_CATEGORY:
            return {
            ...store,
                categoryList: action.payload,
            }

        case ACT.UPDATE_COLOR:
            return {
            ...store,
                colorList: action.payload,
            }

        case ACT.UPDATE_BRAND:
            return {
            ...store,
                brandList: action.payload,
            }

        case ACT.UPDATE_PRICE:
            return {
                ...store,
                priceRange: action.payload,
            }

        case ACT.FILTER_CATEGORY:
            return {
                ...store,
                filter: {
                    ...store.filter,
                    category: action.payload
                }
            }

        case ACT.FILTER_BRAND:
            return {
                ...store,
                filter: {
                    ...store.filter,
                    brand: action.payload
                }
            }

        case ACT.FILTER_PRICE:
            return {
                ...store,
                filter: {
                    ...store.filter,
                    price: action.payload
                }
            }

        case ACT.FILTER_COLOR:
            return {
                ...store,
                filter: {
                    ...store.filter,
                    color: action.payload
                }
            }

        case ACT.FETCH_SUCCESS:
        case ACT.FETCH_FAILED:
            return {
            ...store,
                fetchStatus: action.payload,
            }
    }
    return store;
}

export default () => combineReducers({
    app: rootReducer,
})