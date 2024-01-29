import { useState, useEffect } from "react";
import { ITEM_API } from "../Utils/constants";
import { useParams } from "react-router-dom";
import ShimmerUI from "../Shimmers/ShimmerUI";
import { CARD_IMG_URL } from "../Utils/constants";
import SomethingWrong from "../Utils/SomethingWrong";

const ItemsMenu = () => {
  const [restaurantList, setrestaurantList] = useState(null);
  const [restaurantListName, setrestaurantListName] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(ITEM_API + id);
    const json = await data.json();
    setrestaurantList(json?.data?.cards);
    setrestaurantListName(json?.data?.cards[0]?.card.card);
    console.log(json?.data);
  };
  if (restaurantList === null) {
    return <ShimmerUI />;
  }

  if (restaurantList === undefined) {
    return <SomethingWrong />;
  }
  return (
    <div className="restraunt">
      <h1>{restaurantListName?.title}</h1>
      <h1>{restaurantListName?.description}</h1>
      <img
        className="rounded-3xl"
        src={CARD_IMG_URL + restaurantListName?.imageId}
      ></img>
    </div>
  );
};
export default ItemsMenu;
