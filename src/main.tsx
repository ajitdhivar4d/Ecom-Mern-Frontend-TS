// React and React-DOM imports
import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// Application imports
import App from "./App.tsx";
import "./styles/app.scss";

//
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";

// Lazy-loaded components
const Login = lazy(() => import("./pages/Auth/Login.tsx"));
const Register = lazy(() => import("./pages/Auth/Register.tsx"));
const Cart = lazy(() => import("./pages/Cart.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
const Favorites = lazy(() => import("./pages/Products/Favorites.tsx"));
const ProductDetails = lazy(
  () => import("./pages/Products/ProductDetails.tsx"),
);
const Shop = lazy(() => import("./pages/Shop.tsx"));
const UserOrder = lazy(() => import("./pages/User/UserOrder.tsx"));

const PrivateRoute = lazy(() => import("./components/PrivateRoute.tsx"));
const Order = lazy(() => import("./pages/Orders/Order.tsx"));
const PlaceOrder = lazy(() => import("./pages/Orders/PlaceOrder.tsx"));
const Shipping = lazy(() => import("./pages/Orders/Shipping.tsx"));
const Profile = lazy(() => import("./pages/User/Profile.tsx"));

const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard.tsx"));
const AdminRoute = lazy(() => import("./pages/Admin/AdminRoute.tsx"));
const AllProducts = lazy(() => import("./pages/Admin/AllProducts.tsx"));
const CategoryList = lazy(() => import("./pages/Admin/CategoryList.tsx"));
const OrderList = lazy(() => import("./pages/Admin/OrderList.tsx"));
const ProductList = lazy(() => import("./pages/Admin/ProductList.tsx"));
const ProductUpdate = lazy(() => import("./pages/Admin/ProductUpdate.tsx"));
const UserList = lazy(() => import("./pages/Admin/UserList.tsx"));

// Render the application
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route index element={<Home />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/user-orders" element={<UserOrder />} />

            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/placeorder" element={<PlaceOrder />} />
              <Route path="/order/:id" element={<Order />} />
            </Route>

            {/* Admin Routes */}
            <Route element={<AdminRoute userInfo isAdmin />}>
              <Route path="/admin/userlist" element={<UserList />} />
              <Route path="/admin/categorylist" element={<CategoryList />} />
              <Route path="/admin/productlist" element={<ProductList />} />
              <Route path="/admin/allproductslist" element={<AllProducts />} />
              <Route path="/admin/orderlist" element={<OrderList />} />
              <Route
                path="/admin/product/update/:_id"
                element={<ProductUpdate />}
              />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </Provider>,
);
