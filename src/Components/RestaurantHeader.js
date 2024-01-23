
import { CARD_IMG_URL } from "../Utils/constants";
import { CORS_API } from "../Utils/constants";
const RestaurantHeader = ({ restInfo }) => {
  //Destructing
  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    feeDetails,
    areaName,
    totalRatingsString,
  } = restInfo;
  const { slaString, lastMileTravelString } = restInfo.sla;
  return (
    <div>
      <div className="flex justify-between items-center flex-row  border-b-2 border-dotted lg:py-4 md:py-4 py-2">
        <div className="flex justify-between items-start flex-col ">
          <span className="lg:text-xl md:text-lg text-base font-extrabold text-gray-800 lg:pb-3 md:pb-3 pb-2" >{name}</span>
          <span className="text-xs font-semibold text-gray-400 pb-1">
            {cuisines.join(", ")}
          </span>
          <span className="text-xs font-semibold text-gray-400">
            {areaName}, {lastMileTravelString}
          </span>
          <div className="mt-4">
            {feeDetails?.message && (
              <span className="lg:pr-2 md:pr-2 pr-1 text-xs text-gray-500 font-semibold flex items-center flex-row gap-2">
                <img
                  className="lg:w-5 md:w-5 w-4 h-4"
                  src={CARD_IMG_URL + feeDetails?.icon}
                ></img>
                {feeDetails?.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center flex-col text-end lg:px-2 lg:py-2 md:px-2 md:py-2 px-1 py-1 rounded-md border border-gray-300">
          <span className="text-green-700 font-extrabold text-xs py-1 items-center flex justify-between gap-2">
            <i className="ri-star-fill text-xs"></i>
            {avgRating}
          </span>
          <span
            style={{  wordSpacing: 1 }}
            className="border-t tracking-tighter text-center lg:text-xs text-[9px] md:text-xs font-semibold text-gray-400  py-1 "
          >
            {totalRatingsString}
          </span>
        </div>
      </div>

      <div className="flex justify-start items-start lg:my-5 lg:gap-4 md:my-5 md:gap-4 my-2 gap-3">
        {slaString && (
          <span className="font-extrabold lg:text-base text-sm md:text-base">
            <i className="ri-time-fill lg:pr-2 lg:text-lg md:pr-2 md:text-lg pr-1 text-base"></i>
            {slaString}
          </span>
        )}
        <span className="font-extrabold lg:text-base text-sm md:text-base">
          <i className="ri-cash-line lg:pr-2 lg:text-lg md:pr-2 md:text-lg pr-1 text-base"></i>
          {costForTwoMessage}
        </span>
      </div>
    </div>
  );
};
export default RestaurantHeader;
