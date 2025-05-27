import Homepage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import AdminLayout from "./adminroutes/layout/adminlayout"; // ✅ Capitalized
import SignlePage from "./routes/signlePage/signlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import Home from "./adminroutes/home/home";
import User from "./adminroutes/user/user";
import Users from "./adminroutes/users/users";
import Product from "./adminroutes/product/Product";
import Products from "./adminroutes/products/Products";
import Addshop from "./adminroutes/addshop/addshop";
import Avaliableshops from "./adminroutes/avaliableshops/avaliableshops";
import Client from "./adminroutes/clients/client";
import AddClient from "./adminroutes/clients/addClient";
import ClientRequest from "./adminroutes/clients/clientRequest";
import Message from "./adminroutes/messages/message";
import Adminprofile from "./adminroutes/adminProfile/adminprofile";
import InterestPage from "./routes/InterestPage/InterestPage";
import PaymentPage from "./routes/payment/paymentPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "list", element: <ListPage /> },
        { path: ":id", element: <SignlePage /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "interest", element: <InterestPage />},
        { path: "payment", element: <PaymentPage />},
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "user", element: <User /> },
        { path: "users", element: <Users /> },
        { path: "product", element: <Product /> },
        { path: "products", element: <Products /> },
        { path: "addshop", element: <Addshop />},
        { path: "avaliableshops", element: <Avaliableshops />},
        { path: "client", element: <Client />},
        { path: "addClient", element: <AddClient />},
        { path: "clientRequest", element: <ClientRequest />},
        { path: "message", element: <Message />},
        { path: "adminprofile", element: <Adminprofile />}
        
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
