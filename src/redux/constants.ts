const rawServer = import.meta.env.VITE_SERVER;

let server: string;

if (isValidServerUrl(rawServer)) {
  server = rawServer;
} else {
  // Handle the invalid server URL scenario
  // You can throw an error, use a default value, or log a warning
  console.error("Invalid server URL provided. Using default server URL.");
  server = "https://ecom-mern-backend-ts.onrender.com";
}

export const BASE_URL = `${server}`;

export const USERS_URL = `${server}/api/users`;

export const CATEGORY_URL = `${server}/api/categories`;

export const PRODUCT_URL = `${server}/api/products`;

export const UPLOAD_URL = `${server}/api/upload`;

export const ORDERS_URL = `${server}/api/orders`;

export const PAYPAL_URL = `${server}/api/config/paypal`;

function isValidServerUrl(value: any): value is string {
  return typeof value === "string" && value.trim() !== "";
}
