import {
  MdOutlineDashboard,
  MdOutlineSubscriptions,
  MdOutlinePayment,
} from "react-icons/md";
import { FaList, FaCartPlus, FaRegListAlt, FaTools } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { HomeIcon, PersonIcon, SettingsIcon } from "./components/Icons/Icons";
import Home from "./pages/App/Home/components/Home";
import Dashboard from "./pages/App/Dashboard/index";
import Product from "./pages/App/Products/components/Product";
import Order from "./pages/App/Orders/components/Order";
import Profile from "./pages/App/Profile/components/Profile";
import Setting from "./pages/App/Settings/components/Setting";
import User from "./pages/App/Users/components/User";
import Payments from "./pages/App/Payments/index.js";
import Notification from "./pages/App/Notifications/components/Notification";
import Subscription from "./pages/App/Subscriptions/components/Subscription";
import AccessManagement from "./pages/App/AccessManagement/components/Access";
import AddProduct from "./pages/App/Products/components/AddProduct.js";
import EditProduct from "./pages/App/Products/components/EditProduct.js";
import ProductDetails from "./pages/App/Products/components/ProductDetails.js";
import Cart from "./pages/App/Products/components/Cart.js";
var appRoutes = [
  {
    id: "app0",
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdOutlineDashboard />,
    component: Dashboard,
    layout: "/app",
    access: true,
  },
  {
    id: "app1",
    path: "/home",
    name: "Home",
    icon: <HomeIcon />,
    component: Home,
    layout: "/app",
    access: true,
  },
  {
    id: "app2",
    path: "/products",
    name: "Products",
    icon: <FaCartPlus color="inherit" />,
    component: Product,
    layout: "/app",
    access: true,
  },
  {
    id: "app3",
    path: "/orders",
    name: "Order",
    icon: <FaRegListAlt color="inherit" />,
    component: Order,
    layout: "/app",
    access: true,
  },
  {
    id: "app4",
    path: "/profile",
    name: "Profile",
    icon: <PersonIcon color="inherit" />,
    component: Profile,
    layout: "/app",
    access: true,
  },
  {
    id: "app5",
    path: "/settings",
    name: "Settings",
    icon: <SettingsIcon color="inherit" />,
    component: Setting,
    layout: "/app",
  },
  {
    id: "app6",
    path: "/users",
    name: "Users",
    icon: <FaList color="inherit" />,
    component: User,
    layout: "/app",
  },
  {
    id: "app7",
    path: "/payments",
    name: "Payments",
    icon: <MdOutlinePayment />,
    component: Payments,
    layout: "/app",
  },
  {
    id: "app8",
    path: "/notifications",
    name: "Notification",
    icon: <FiBell />,
    component: Notification,
    layout: "/app",
  },
  {
    id: "app9",
    path: "/subscriptions",
    name: "Subscriptions",
    icon: <MdOutlineSubscriptions />,
    component: Subscription,
    layout: "/app",
  },
  {
    id: "app10",
    path: "/access",
    name: "Access",
    icon: <FaTools />,
    component: AccessManagement,
    layout: "/app",
  },
  {
    id: "app11",
    path: "/newproduct",
    name: "New Product",
    icon: <FaTools />,
    component: AddProduct,
    layout: "/app",
  },
  {
    id: "app11",
    path: "/editproduct",
    name: "Edit Product",
    icon: <FaTools />,
    component: EditProduct,
    layout: "/app",
  },
  {
    id: "app12",
    path: "/productdetails",
    name: "Product Details",
    icon: <FaTools />,
    component: ProductDetails,
    layout: "/app",
  },
  {
    id: "app13",
    path: "/cart",
    name: "Cart",
    icon: <FaTools />,
    component: Cart,
    layout: "/app",
  },
];
export default appRoutes;
