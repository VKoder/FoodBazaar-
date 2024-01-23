import { CARD_IMG_URL } from "../Utils/constants";

const GroceryCard = (props) => {
  const { groceryData } = props;
  const { brand, product_name_without_brand } = groceryData;
  const { images, sku_quantity_with_combo } = groceryData?.variations?.[0];
  const { store_price, offer_price } = groceryData?.variations?.[0]?.price;
  const { product_description } =
    groceryData?.variations?.[0]?.price?.offer_applied;

  return (
    <div className="flex justify-center items-center flex-col w-[160px] p-2">
      <div className="border-spacing-1 border rounded-md w-full relative overflow-hidden">
        <img className="w-full h-[130px]" src={CARD_IMG_URL + images[0]}></img>
        {product_description && (
          <div className="absolute top-[-24] left-[-2] ">
            <img
              className="w-8"
              src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_64,h_108/instamart-assets/offer_tag.png"
            ></img>
            <div className="absolute top-6 left-2 flex justify-center gap-0 flex-col">
              <span className="text-white text-[9px] font-extrabold">
                {product_description.slice(0, 3)}
              </span>
              <span className="text-white text-[9px] font-extrabold">
                {product_description.slice(3, 7)}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center flex-col items-start w-full pt-2">
        <span className="text-left text-xs font-light text-gray-500">
          {brand}
        </span>
        <span className="font-bold text-sm  text-slate-700">
          {product_name_without_brand.length > 25
            ? `${product_name_without_brand.slice(0, 25)}..`
            : product_name_without_brand}
        </span>
        <span className="text-xs font-light  text-gray-500 py-2">
          {sku_quantity_with_combo}
        </span>
      </div>
      <div className="flex justify-between items-center flex-row w-full">
        <div className="flex justify-center items-start flex-col">
          <span className="text-[10px] font-light line-through text-gray-500">
            <span className="text-[10px]">₹</span>
            {store_price}
          </span>
          <span className="text-sm font-bold text-gray-700">
            <span className="text-sm">₹</span>
            {offer_price}
          </span>
        </div>
        <div>
          <button className="text-sm font-extrabold text-green-600  border rounded-lg px-6 py-2">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};
export default GroceryCard;
