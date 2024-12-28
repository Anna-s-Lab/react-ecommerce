import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/admin/Layout";
import AuthLayout from "./components/auth/Layout";
import ShoppingLayout from "./components/shopping/Layout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminOrders from "./pages/admin/Orders";
import AdminProducts from "./pages/admin/Products";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/not-found";
import ShoppingAccount from "./pages/shopping/Account";
import ShoppingCheckout from "./pages/shopping/Checkout";
import ShoppingHome from "./pages/shopping/Home";
import ShoppingProductList from "./pages/shopping/ProductList";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common components */}

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />{" "}
          <Route path="products" element={<AdminProducts />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingProductList />} />{" "}
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
