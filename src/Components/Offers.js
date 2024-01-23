import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerUI from "../Shimmers/ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { CORS_API } from "../Utils/constants";
import { REST_API } from "../Utils/constants";
import CuisinesCards from "./CuisinesCards";
import SomethingWrong from "../Utils/SomethingWrong";
import LoadingScreen from "../Utils/LoadingScreen";

// HERO COMPONENT
const Offers = () => {
  const [restaurantList, setrestaurantList] = useState(null);
  const [filteredRestList, setfilteredRestList] = useState(null);
  const [bestcuisines, setbestcuisines] = useState(null);
  const [bestrest, setbestrest] = useState(null);
  const [searchTxt, setsearchTxt] = useState("");
  const [filter, setfilter] = useState(false);

  const OnlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CORS_API + REST_API);
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

  const filterToggle = () => {
    setfilter(!filter);
  };

  if (OnlineStatus === false) {
    return <h2>Your Offline</h2>;
  }

  if (restaurantList === null) {
    return <LoadingScreen />;
  }

  if (filteredRestList === undefined) {
    return <SomethingWrong />;
  }

  const filterBtnCss =
    "bg-transparent border-2 shadow-md border-solid border-zinc-300 px-2 text-xs lg:text-base lg:px-3.5 py-1 lg:py-1.5 rounded-2xl lg:rounded-3xl mr-2 lg:mr-4";
  const linksCss =
    "lg:text-[10px] md:text-[10px] text-[8px] text-gray-400 font-bold pr-1";

  return (
    <div className="flex justify-between items-center  flex-col lg:px-16 lg:my-10 md:px-16 px-6 my-8 md:my-10 w-full ">
      <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_156,w_1000/rng/md/carousel/production/54e91b82d0c8111e14fe786bcf28ff1c"></img>
      <div className="flex lg:mt-4 mt-2 md:mt-4 justify-evenly lg:gap-5 gap-2 md:gap-3 items-center flex-row">
        <img
          className="lg:w-52 md:w-40 sm:w-32 w-20"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/mbcjw5tiuemimw1pfjli"
        ></img>
        <img
          className="lg:w-52 md:w-40 sm:w-32 w-20"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/ngjatt8hwriaytmugmqz"
        ></img>
        <img
          className="lg:w-52 md:w-40 sm:w-32 w-20"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/dzm1eo2punmiqd1idyzn"
        ></img>
      </div>
      <div className="lg:w-full lg:px-12 md:w-full md:px-12 w-full  text-left mx-auto lg:pt-5 md:pt-4 pt-2">
        <Link to={"/"}>
          <span className={linksCss}>Home</span>
        </Link>
        <span className={linksCss}>/</span>
        <span className="lg:text-[10px] md:text-[10px] text-[8px] text-gray-700 font-bold pr-1">
          Offfers
        </span>
      </div>
      <span
        className="w-full text-left lg:pb-6 lg:px-12 md:pb-6 md:px-12 mt-4 font-black lg:text-2xl md:text-2xl text-xl tracking-tight "
        style={{ wordSpacing: 3.5 }}
      >
        Restaurants with online food delivery in Pune
      </span>
      <div className="w-full heroupper flex justify-between items-center lg:px-16 md:px-16 lg:my-1 md:my-2 my-4">
        <div className="heroleft flex justify-between items-center">
          <button
            className="bg-transparent border-2 sm:hidden shadow-md border-solid border-zinc-300 px-2 text-xs lg:text-base lg:px-3.5 py-1 lg:py-1.5 rounded-2xl lg:rounded-3xl mr-2 lg:mr-4"
            onClick={filterToggle}
          >
            <i class="ri-equalizer-fill"></i>
          </button>
          {filter && (
            <div className="absolute top-40 rounded-lg bg-white shadow-sm border-l-2 py-3 px-2 z-10 border-orange-400">
              <div className="flex justify-start items-start flex-col">
                <span>Pizza</span>
                <span>Dominos</span>
              </div>
            </div>
          )}

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
          {/* bg-transparent border-2 shadow-md border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4 md:px-3 md:py-1 md:mr-3 md:text-xs lg:px-3.5 lg:py-1.5 lg:mr-4 lg:text-sm */}
          <button
            className="bg-transparent border-2 hidden sm:flex shadow-md border-solid border-zinc-300 px-2 text-xs lg:text-base lg:px-3.5 py-1 lg:py-1.5 rounded-2xl lg:rounded-3xl mr-2 lg:mr-4"
            onClick={() => {
              const deliveryTime = restaurantList.map(
                (re) => re.info.sla.deliveryTime
              );

              const sortDeliveryTime = deliveryTime.sort((a, b) => a - b);
              const hi = restaurantList.map((rest) => rest.info.sla);
              const del = hi.filter((del) => del.deliveryTime);

              console.log(del);
            }}
          >
            Less than Rs.300
          </button>
        </div>

        <div className="hidden sm:flex">
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
    </div>
  );
};
export default Offers;
