import { CARD_IMG_URL } from "../Utils/constants";
import veg from "../Images/veg.webp";
import non_veg from "../Images/non-veg.webp";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux Store/cartSlice";

const ItemCategory = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = (items) => {
    dispatch(addItem(items));
  };

  return item.map((items) => (
    <div
      key={items?.card?.info?.id}
      className="w-full flex justify-between items-start bg-white lg:py-8 lg:px-4 md:py-8 md:px-4  py-4 px-2 my-1 border-2 border-dotted"
    >
      <div className="lg:w-[65%] md:w-[65%] w-[70%]">
        <span>
          {items?.card?.info?.itemAttribute?.vegClassifier == "NONVEG" ? (
            <img
              className="lg:w-3 md:w-3 w-3"
              src={non_veg}
              alt="Non Veg"
            ></img>
          ) : (
            <img className="lg:w-5 md:w-5 w-4" src={veg} alt="Veg"></img>
          )}
        </span>
        {items?.card?.info?.ribbon?.text && (
          <span className="text-orange-400 font-semibold text-xs">
            {" "}
            <i className="ri-star-fill pr-1 text-xs"></i>
            {items?.card?.info?.ribbon?.text}
          </span>
        )}

        <h3 className="lg:text-base md:text-base text-sm font-bold text-slate-900 pt-2">
          {items.card.info.name}
        </h3>
        <p className="font-semibold text-slate-800 pb-2 price">
          <span className="text-base">₹ </span>
          <span className="text-sm">
            {items.card.info.defaultPrice / 100 ||
              items.card.info.price / 100.0}
          </span>
          <span
            className="ml-3 justify-center items-center py-0.5 px-1"
            style={{
              backgroundColor:
                items?.card?.info?.offerTags?.[0]?.backgroundColor,
              color: items?.card?.info?.offerTags?.[0]?.textColor,
              borderLeft: `2px solid ${items?.card?.info?.offerTags?.[0]?.textColor}`,
            }}
          >
            <span
              style={{ fontSize: "10px" }}
              className="font-bold text-xs px-1 "
            >
              {items?.card?.info?.offerTags?.[0]?.title}
            </span>
            <span
              style={{ fontSize: "10px" }}
              className="font-extralight text-xs"
            >
              {items?.card?.info?.offerTags?.[0]?.subTitle}
            </span>
          </span>
        </p>
        <p
          style={{ wordSpacing: 1.5 }}
          className="lg:text-[14px] md:text-[14px] text-[9px] tracking-wide text-gray-400 "
        >
          {items.card.info.description}
        </p>
      </div>
      <div className="flex flex-col justify-center gap-1 items-center">
        {items.card.info.imageId ? (
          <img
            className="lg:w-[150px] lg:h-[100px] md:w-[150px] md:h-[100px] w-[100px] h-[70px] rounded-xl shadow-lg"
            style={{ color: "black" }}
            src={CARD_IMG_URL + items.card.info.imageId}
          ></img>
        ) : (
          <div className="lg:w-40 lg:h-32 md:w-40 md:h-32 w-24 h-16 bg-slate-200 rounded-lg stroke animate relative">
            <span className="lg:text-sm text-[10px] md:text-sm lg:font-semibold font-semibold md:font-semibold text-gray-500 absolute lg:top-10 lg:left-12 md:top-10 top-4 left-7 md:left-12 ">
              No Image Available
            </span>
          </div>
        )}
        <button
          className="rounded-xl bg-slate-900 text-white font-semibold lg:px-7 text-sm lg:text-base lg:py-[6px] md:px-7 md:py-[6px] px-4 py-[3px]"
          onClick={() => handleAddItem(items)}
        >
          Add
        </button>
      </div>
    </div>
  ));
};
export default ItemCategory;
