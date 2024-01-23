import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import MidCarousal from "./Components/MidCarousal";
import ItemsMenu from "./Components/ItemsMenu";
import userContext from "./Utils/userContext";
import { Provider } from "react-redux";
import appStore from "./Redux Store/appStore";
import Offers from "./Components/Offers";
import Footer from "./Components/Footer";
import MenuFooter from "./Components/MenuFooter";
import Cart from "./Components/Cart";
import GroceryCollection from "./Grocery/GroceryCollection";
import GroceryShop from "./Grocery/GroceryShop";
import LoadingScreen from "./Utils/LoadingScreen";
import GroceryData from "./Grocery/GroceryData";


const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));
const Grocery = lazy(() => import("./Grocery/Grocery"));


const AppLayout = () => (
  <Provider store={appStore}>
    <userContext.Provider value={{ loggedInUser: "Akshay Saini" }}>
      <div className="app h-full w-full overflow-hidden">
        <Header />
        <Outlet />
        <MenuFooter />
        <Footer />
      </div>
    </userContext.Provider>
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            {/* <TopCarousal /> */}
            <MidCarousal />
            <Hero />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          //Suspence is used to make react wait till our component is loading or mounting it takes fallback prop to display something eg: shimmer ui
          <Suspense fallback={<LoadingScreen />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "ItemsMenu/:id",
        element: <ItemsMenu />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/groceryCollection/:id",
        element: <GroceryCollection />,
      },

      {
        path: "/groceryshop/:id",
        element: <GroceryShop />,
      },
    ],
  },
  
  {
    path: "/groceryInfo/:id",
    element: <GroceryData/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
