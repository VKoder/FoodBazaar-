import { useState, useEffect } from "react";
import { CORS_API } from "../Utils/constants";
import GroceryCompo from "./GroceryCompo";
import GroceryShimmer from "./GroceryShimmer";

const GroceryMid5 = () => {
  const [groceryList, setgroceryList] = useState(null);
  const [groceryTitle, setgroceryTitle] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      CORS_API +
        "https://www.swiggy.com/api/instamart/home?pageNo=2&layoutId=3173&storeId=1383574&clientId=INSTAMART-APP"
    );
    const json = await data.json();
    // console.log(json?.data?.widgets?.[0]?.data)
    setgroceryList(json?.data?.widgets?.[0]?.data);
    setgroceryTitle(json?.data?.widgets?.[0]?.widgetInfo);
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
export default GroceryMid5;
