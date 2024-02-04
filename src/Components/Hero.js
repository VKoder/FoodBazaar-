import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerUI from "../Shimmers/ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { REST_API } from "../Utils/constants";
import CuisinesCards from "./CuisinesCards";
import SomethingWrong from "../Utils/SomethingWrong";

// HERO COMPONENT
const Hero = () => {
  const [restaurantList, setrestaurantList] = useState(null);
  const [filteredRestList, setfilteredRestList] = useState(null);
  const [bestcuisines, setbestcuisines] = useState(null);
  const [bestrest, setbestrest] = useState(null);
  const [searchTxt, setsearchTxt] = useState("");
  const [filter, setfilter] = useState(false);

  //custom hook
  const OnlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_API);
    const json = await data.json();

    setrestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );

    setfilteredRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    setbestcuisines(json?.data?.cards[7]?.card?.card);
    setbestrest(json?.data?.cards[6]?.card?.card);
  };

  //for small devices
  const filterToggle = () => {
    setfilter(!filter);
  };

  if (OnlineStatus === false) {
    return <h1>Looks like you are Offline...</h1>;
  }

  if (restaurantList === null) {
    return <ShimmerUI />;
  }

  if (filteredRestList === undefined) {
    return <SomethingWrong />;
  }

  const filterBtnCss =
    "bg-transparent border-2 shadow-md border-solid border-zinc-300 px-1.5 text-xs lg:text-base lg:px-3.5 py-1 lg:py-1.5 rounded-2xl lg:rounded-3xl mr-1 lg:mr-4";

  return (
    <div className="flex justify-between items-center  flex-col lg:px-16 lg:my-10 md:px-16 px-6 my-2 md:my-5 w-full ">
      <span
        className="w-full  text-left lg:pb-6 lg:px-12 md:pb-6 md:px-12 mt-4 font-black lg:text-2xl md:text-2xl text-xl tracking-tight "
        style={{ wordSpacing: 3.5 }}
      >
        Restaurants with online food delivery in Pune
      </span>
      <div className="w-full heroupper flex justify-between items-center lg:px-16 md:px-16 lg:my-1 md:my-2 my-4">
        <div className="heroleft flex justify-between items-center">
          <button
            className="bg-transparent border-2 shadow-md border-solid border-zinc-300 px-2 text-xs lg:text-base lg:px-3.5 py-1 lg:py-1.5 rounded-2xl lg:rounded-3xl mr-2 lg:mr-4"
            onClick={filterToggle}
          >
            {filter ? (
              <i className="ri-equalizer-fill"></i>
            ) : (
              <i className="ri-search-line"></i>
            )}
          </button>
          {!filter && (
            <div>
              <button
                className={filterBtnCss}
                onClick={() => {
                  setfilteredRestList(restaurantList);
                }}
              >
                All
              </button>
              <button
                className={filterBtnCss}
                onClick={() => {
                  const TopRated = restaurantList.filter(
                    (rest) => rest.info.avgRating > 4.2
                  );
                  setfilteredRestList(TopRated);
                }}
              >
                Top Rated
              </button>
              <button
                className={filterBtnCss}
                onClick={() => {
                  const isVeg = restaurantList.filter(
                    (rest) => rest.info.veg === true
                  );
                  setfilteredRestList(isVeg);
                }}
              >
                Pure Veg
              </button>
              <button
                className={filterBtnCss}
                onClick={() => {
                  const lessthan = restaurantList.filter(
                    (rest) => rest.info.sla.deliveryTime < 25
                  );
                  setfilteredRestList(lessthan);
                }}
              >
                Fast Delivery
              </button>
            </div>
          )}
        </div>

        {filter && (
          <div className="">
            <input
              type="text"
              placeholder="Feeling Hungry?"
              className="lg:py-3 lg:pr-24 md:pr-10 lg:pl-5 rounded-3xl lg:text-sm py-1 pr-16 pl-2 text-xs border-2 border-gray-300  "
              value={searchTxt}
              onChange={(e) => {
                setsearchTxt(e.target.value);
              }}
            ></input>
            <button
              className="lg:py-3 lg:px-6 py-1 px-2 border-none rounded-3xl lg:text-base text-sm font-bold cursor-pointer bg-orange-400"
              onClick={() => {
                let filterSearch = restaurantList.filter((rest) =>
                  rest.info.name.toLowerCase().includes(searchTxt.toLowerCase())
                );
                setfilteredRestList(filterSearch);
              }}
            >
              Search
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center lg:justify-start items-center  flex-wrap gap-7 my-2 px-12 mt-12 ">
        {
          filteredRestList?.map((resItem) => (
            <Link to={"/restaurant/" + resItem.info.id} key={resItem.info.id}>
              {<Card resData={resItem} />}
            </Link>
          )) // Iteratedly store restraunt Obj into resData which is a parameter of card!
        }
      </div>

      <div className=" justify-between items-start flex-col my-5 px-12 w-12/12 border-t-2 pt-8 hidden lg:flex">
        <span
          className="w-full text-left  pb-8 font-black text-2xl tracking-tight"
          style={{ wordSpacing: 3.5 }}
        >
          {bestcuisines.title}
        </span>
        <div className="mt-3 flex justify-start items-start gap-4 flex-wrap flex-row">
          {" "}
          <CuisinesCards data={bestcuisines} />
        </div>
      </div>

      <div className=" justify-between items-start flex-col my-5 px-12 w-12/12 border-t-2 pt-8 hidden lg:flex">
        <span
          className="w-full text-left  pb-8 font-black text-2xl tracking-tight"
          style={{ wordSpacing: 3.5 }}
        >
          {bestrest.title}
        </span>
        <div className="mt-3 flex justify-start items-start gap-4 flex-wrap flex-row">
          {" "}
          <CuisinesCards data={bestrest} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
