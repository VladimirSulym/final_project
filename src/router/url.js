export const ROOT = '/';
export const CATALOG = '/catalog';
export const CART = '/cart';
export const DEPO = '/depo';
export const BLOG = '/blog';
export const VIEW_ONE = `${CATALOG}/info`;
export const ABOUT = '/about';
export const CONTACT = '/contact';
export const CATALOG_CATEGORY = `${CATALOG}/:categoryName`;
export const PRD_INFO = `${VIEW_ONE}/:id`;
export const PRD_ADD = `${DEPO}/add`;

export const NAV = [
    {
        title: 'Главная',
        url: ROOT
    },
    {
        title: 'Каталог',
        url: CATALOG,
        // children: {
        //     title: 'Посмотреть товар',
        //     url: VIEW_ONE
        // }
    },
    {
        title: 'Корзина',
        url: CART
    },
    {
        title: 'Склад',
        url: DEPO
    },
    // {
    //     title: 'Блог',
    //     url: BLOG
    // },
    {
        title: 'О нас',
        url: ABOUT
    },
    {
        title: 'Контакты',
        url: CONTACT
    }
];
