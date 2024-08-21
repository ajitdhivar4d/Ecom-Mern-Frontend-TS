export const server = import.meta.env.VITE_SERVER as string;

export const BASE_URL = `${server}`;

export const USERS_URL = `${server}/api/users`;

export const CATEGORY_URL = `${server}/api/categories`;

export const PRODUCT_URL = `${server}/api/products`;

export const UPLOAD_URL = `${server}/api/upload`;

export const ORDERS_URL = `${server}/api/orders`;

export const PAYPAL_URL = `${server}/api/config/paypal`;
