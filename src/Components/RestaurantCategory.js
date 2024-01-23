import { useState } from "react";
import ItemCategory from "./ItemCategory";
const RestaurantCategory = ({ data }) => {
  const [showlist, setshowlist] = useState(true);

  function handleClick() {
    setshowlist(!showlist); // toggle functionality - after clicking on handle setshowlist opp of showlist
  }

  return (
    <div className="lg:my-4 md:my-4 my-3 shadow-md cursor-pointer transition-all">
      <div
        className="flex justify-between items-center lg:py-5 lg:px-4 md:py-5 md:px-4 py-3 px-2"
        onClick={handleClick}
      >
        <h1 className="font-extrabold lg:text-lg md:text-lg text-base">
          {data?.title} ({data?.itemCards.length})
        </h1>
        {showlist ? (
          <span>
            <i className="ri-arrow-up-s-line lg:text-2xl md:text-2xl text-base font-bold"></i>
          </span>
        ) : (
          <span>
            <i className="ri-arrow-down-s-line lg:text-2xl md:text-2xl text-base  font-bold"></i>
          </span>
        )}
      </div>

      {showlist && <ItemCategory item={data?.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
