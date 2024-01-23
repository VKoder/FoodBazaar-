import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const MenuFooter = () => {
  const spanCsss = "font-bold text-sm";
  const linkCss =
    "text-gray-600 flex  justify-center items-center flex-col  hover:text-orange-300";

  return (
    <div className="w-full flex justify-evenly items-center fixed bottom-0 z-10 flex-row bg-white lg:hidden py-1 px-2 shadow-lg lg:shadow-xl">
      <Link to={"/"}>
        <div className={linkCss}>
          <i className="ri-home-4-line text-xl font-bold"></i>
          <span className={spanCsss}>Home</span>
        </div>
      </Link>

      <Link to={"/offers"}>
        <div className={linkCss}>
          <i class="ri-gift-line text-xl font-bold  "></i>
          <span className={spanCsss}>Offers</span>
        </div>
      </Link>

      <Link to={"/contact"}>
        <div className={linkCss}>
          <i class="ri-customer-service-line text-xl font-bold  "></i>
          <span className={spanCsss}>Contact</span>
        </div>
      </Link>

      <Link to={"/cart"}>
        <div className={linkCss}>
          <i class="ri-shopping-cart-2-line text-xl  font-bold  "></i>
          <span className={spanCsss}>Cart</span>
        </div>
      </Link>
    </div>
  );
};
export default MenuFooter;
