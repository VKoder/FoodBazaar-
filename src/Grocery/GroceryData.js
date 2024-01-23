import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CORS_API } from "../Utils/constants";
import { GROCERY_INFO_API } from "../Utils/constants";
import { CARD_IMG_URL } from "../Utils/constants";
import GroceryShimmerData from "./GroceryShimmerData";

const GroceryData = () => {
  const { id } = useParams();
  const [groceryInfo, setgroceryInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      CORS_API + GROCERY_INFO_API + id + "?storeId=1383574"
    );
    const json = await data.json();
    setgroceryInfo(json?.data);
    console.log(json?.data);
  };

  if (groceryInfo === null) {
    return <GroceryShimmerData />;
  }

  const { disclaimer, long_description } = groceryInfo?.variations?.[0]?.meta;
  const { brand, product_name_without_brand } = groceryInfo;
  const { images, sku_quantity_with_combo } = groceryInfo?.variations?.[0];
  const { store_price, offer_price } = groceryInfo?.variations?.[0]?.price;
  const { product_description } =
    groceryInfo?.variations?.[0]?.price?.offer_applied;

  return (
    <div>
      <div className="fixed text-left rounded-b-lg shadow-lg top-0 w-full z-20 bg-white lg:px-36 px-6 md:px-20 lg:py-5 md:py-4 py-2">
        <Link to={"/grocery"}>
          <span className="lg:text-2xl md:text-xl text-lg cursor-pointer hover:text-orange-400 lg:pr-3 pr-2 md:pr-3 text-gray-800">
            <i class="ri-arrow-left-line"></i>
          </span>
        </Link>
        <span className="lg:text-xl md:text-xl text-lg font-bold  text-gray-800">
          {product_name_without_brand}
        </span>
      </div>
      <div className="lg:mx-36 md:mx-10 mx-0 bg-gray-200 lg:mt-24 md:mt-[82px] mt-12 px-2 py-2 rounded-lg my-4 relative ">
        {product_description && (
          <div className="absolute z-10 top-5 left-5 ">
            <img
              className="w-12 rounded-md"
              src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_64,h_108/instamart-assets/offer_tag.png"
            ></img>
            <div className="absolute top-4 left-2 flex justify-center gap-0 flex-col">
              <span className="text-white text-[16px] font-extrabold">
                {product_description.slice(0, 3)}
              </span>
              <span className="text-white text-[16px] font-extrabold">
                {product_description.slice(3, 7)}
              </span>
            </div>
          </div>
        )}
        <div className="flex bg-white rounded-xl mb-2 justify-center items-center overflow-hidden flex-col py-4 p-2">
          <div className="rounded-md lg:w-[500px] md:w-[500px] w-[300px] relative overflow-hidden">
            <img
              className="w-full lg:h-[560px] md:h-[560px] h-[350px]"
              src={CARD_IMG_URL + images[0]}
            ></img>
          </div>
          <div className="flex justify-center lg:px-4 px-2 md:px-4 flex-col items-start w-full pt-2">
            <span className="text-left lg:text-base  md:text-base text-sm font-light text-gray-500">
              {brand}
            </span>
            <span className="font-bold lg:text-lg md:text-lg text-base  text-slate-700">
              {product_name_without_brand.length > 25
                ? `${product_name_without_brand.slice(0, 25)}..`
                : product_name_without_brand}
            </span>
            <span className="lg:text-base text-sm md:text-base font-light  text-gray-500 py-2">
              {sku_quantity_with_combo}
            </span>
          </div>
          <div className="flex justify-between px-4 items-center flex-row w-full">
            <div className="flex justify-center items-start flex-col">
              <span className="lg:text-[13px] text-xs md:text-[13px] font-light line-through text-gray-500">
                <span className="lg:text-[13px] text-xs md:text-[13px]">₹</span>
                {store_price}
              </span>
              <span className="lg:text-base text-sm md:text-base font-bold text-gray-700">
                <span className="lg:text-sm text-xs md:text-sm">₹</span>
                {offer_price}
              </span>
            </div>
            <div>
              <button className="lg:text-base text-sm md:text-base font-extrabold text-green-600  border rounded-lg lg:px-10 px-5 md:px-10 lg:py-3 py-1 md:py-3 shadow-md">
                ADD
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl flex justify-center items-start flex-col lg:px-4 px-2 md:px-4 py-4 md:py-8 lg:py-8">
          {long_description && (
            <div className="border-b lg:py-6 py-3 md:py-6 flex justify-center items-start flex-col">
              <span className="lg:text-base text-sm md:text-base text-gray-600 font-light pb-2">
                Product Information
              </span>
              <span className="text-sm text-gray-400 font-thin">
                {long_description}
              </span>
            </div>
          )}
          <div className=" lg:py-6 py-3 md:py-6  flex justify-center items-start flex-col">
            <span className="lg:text-base text-sm md:text-base text-gray-600 font-light pb-2">
              Important Information
            </span>
            <span className="text-sm text-gray-400 font-thin">
              {disclaimer}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GroceryData;
