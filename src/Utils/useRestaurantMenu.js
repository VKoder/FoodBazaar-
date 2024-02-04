import { useState } from "react";
import { REST_MENU_API } from "../Utils/constants";
import { useEffect } from "react";

const useRestaurantMenu = (id) => {
  //UseState to hold and update data
  const [restInfo, setrestInfo] = useState(null);
  const [restMenu, setrestMenu] = useState(null);
  const [restOff, setrestOff] = useState(null);

  //useEffect() to fetch the API after component will load
  useEffect(() => {
    fetchData();
  }, []);

  //ASYNC (CB Func) to fetch the data
  const fetchData = async () => {
    const data = await fetch(REST_MENU_API + id);
    const json = await data.json();
    const Category =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (cat) =>
          cat?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) ||
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (cat) =>
          cat?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setrestMenu(Category);

    setrestInfo(
      json?.data?.cards[0]?.card?.card?.info ||
        json?.data?.cards[2]?.card?.card?.info
    );

    setrestOff(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
  };
  return { restInfo, restMenu, restOff };
};
export default useRestaurantMenu;
