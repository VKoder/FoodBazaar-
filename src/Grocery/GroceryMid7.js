import { useState, useEffect } from "react";
import { CORS_FOR_GROCERY } from "../Utils/constants";
import GroceryCompo from "./GroceryCompo";
import GroceryShimmer from "./GroceryShimmer";

const GroceryMid7 = () => {
  const [groceryList, setgroceryList] = useState(null);
  const [groceryTitle, setgroceryTitle] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      CORS_FOR_GROCERY +
        "https://www.swiggy.com/api/instamart/home?pageNo=2&layoutId=3173&storeId=1383574&clientId=INSTAMART-APP"
    );
    const json = await data.json();
    console.log(json?.data?.widgets)
    setgroceryList(json?.data?.widgets?.[5]?.data);
    setgroceryTitle(json?.data?.widgets?.[5]?.widgetInfo);
  };

  if (groceryList === null) {
    return <GroceryShimmer />;
  }

  if (groceryList === undefined) {
    return <GroceryShimmer />;
  }
  
  return (
    <GroceryCompo groceryList={groceryList} groceryTitle={groceryTitle} />
    )
};
export default GroceryMid7;
