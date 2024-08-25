import { ORDERS_URL } from "../constants";
import api from "./api";

// Interface representing an item in the order
interface Item {
  _id: string; // Unique identifier for the item
  name: string; // Name of the item
  qty: number; // Quantity of the item
  image: string; // URL of the item's image
  price: number; // Price of the item
  product?: string; // Optional reference to the product ID
}

// Interface for shipping address details
interface ShippingAddress {
  address: string; // Street address
  city: string; // City
  postalCode: string; // Postal or ZIP code
  country: string; // Country
}

// Interface representing an order
interface Order {
  _id: string; // Unique identifier for the order
  user: string; // Reference to the user ID
  orderItems: Item[]; // List of items in the order
  shippingAddress: ShippingAddress; // Shipping address for the order
  paymentMethod: string; // Payment method used for the order
  itemsPrice: number; // Total price of the items
  taxPrice: number; // Tax applied to the order
  shippingPrice: number; // Shipping cost
  totalPrice: number; // Total price of the order
  isPaid: boolean; // Indicates whether the order has been paid
  isDelivered: boolean; // Indicates whether the order has been delivered
  deliveredAt?: string; // Optional delivery date
}

// API response interface for creating an order
interface CreateOrderApiResponse {
  success: boolean; // Indicates if the request was successful
  order?: Order; // Optional order object returned on success
  message: string; // Message providing details about the response
}

// API response interface for fetching order details by ID
interface GetOrderDetailsApiResponse {
  success: boolean; // Indicates if the request was successful
  order?: Order; // Optional order object returned on success
  message: string; // Message providing details about the response
}

// API response interface for fetching the logged-in user's orders
interface GetMyOrdersApiResponse {
  success: boolean; // Indicates if the request was successful
  orders?: Order[]; // Optional list of orders returned on success
  message: string; // Message providing details about the response
}

// API response interface for fetching all orders (admin view)
interface GetAllOrdersApiResponse {
  success: boolean; // Indicates if the request was successful
  orders?: Order[]; // Optional list of orders returned on success
  message: string; // Message providing details about the response
}

// API response interface for marking an order as delivered
interface DeliverOrderApiResponse {
  success: boolean; // Indicates if the request was successful
  order?: Order; // Optional updated order object returned on success
  message: string; // Message providing details about the response
}

// API response interface for fetching the total number of orders
interface GetTotalOrdersApiResponse {
  success: boolean; // Indicates if the request was successful
  totalOrders?: number; // Optional total number of orders
  message: string; // Message providing details about the response
}

// API response interface for fetching the total sales amount
interface GetTotalSalesApiResponse {
  success: boolean; // Indicates if the request was successful
  totalSales?: number; // Optional total sales amount
  message: string; // Message providing details about the response
}

// API response interface for fetching total sales by date
interface GetTotalSalesByDateApiResponse {
  success: boolean; // Indicates if the request was successful
  salesByDate?: number; // Optional sales amount by date
  message: string; // Message providing details about the response
}

// Request interface for creating a new order
interface CreateOrderRequest {
  orderItems: Item[]; // List of items in the order
  shippingAddress: ShippingAddress; // Shipping address details
  paymentMethod: string; // Payment method used
  itemsPrice: number; // Total price of the items
  shippingPrice: number; // Shipping cost
  taxPrice: number; // Tax applied to the order
  totalPrice: number; // Total price of the order
}

// API slice for order-related endpoints
export const orderApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new order
    createOrder: builder.mutation<CreateOrderApiResponse, CreateOrderRequest>({
      query: (order) => ({
        url: ORDERS_URL, // Endpoint URL for creating an order
        method: "POST", // HTTP method for the request
        body: order, // Request body containing order details
      }),
    }),

    // Query for fetching order details by ID
    getOrderDetails: builder.query<GetOrderDetailsApiResponse, string>({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`, // Endpoint URL with order ID
      }),
    }),

    // Query for fetching the logged-in user's orders
    getMyOrders: builder.query<GetMyOrdersApiResponse, void>({
      query: () => ({
        url: `${ORDERS_URL}/mine`, // Endpoint URL for fetching user's orders
      }),
      keepUnusedDataFor: 5, // Cache time for unused data
    }),

    // Query for fetching all orders (admin view)
    getOrders: builder.query<GetAllOrdersApiResponse, void>({
      query: () => ({
        url: ORDERS_URL, // Endpoint URL for fetching all orders
      }),
    }),

    // Mutation for marking an order as delivered
    deliverOrder: builder.mutation<DeliverOrderApiResponse, string>({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}/deliver`, // Endpoint URL with order ID for delivery
        method: "PUT", // HTTP method for the request
      }),
    }),

    // Query for fetching total number of orders
    getTotalOrders: builder.query<GetTotalOrdersApiResponse, void>({
      query: () => `${ORDERS_URL}/total-orders`, // Endpoint URL for total orders count
    }),

    // Query for fetching total sales amount
    getTotalSales: builder.query<GetTotalSalesApiResponse, void>({
      query: () => `${ORDERS_URL}/total-sales`, // Endpoint URL for total sales amount
    }),

    // Query for fetching total sales by date
    getTotalSalesByDate: builder.query<GetTotalSalesByDateApiResponse, void>({
      query: () => `${ORDERS_URL}/total-sales-by-date`, // Endpoint URL for sales by date
    }),
  }),
});

// Export hooks for using the queries and mutations in components
export const {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useDeliverOrderMutation,
  useGetTotalOrdersQuery,
  useGetTotalSalesQuery,
  useGetTotalSalesByDateQuery,
} = orderApiSlice;
