import { useEffect, useState } from "react";
import { CORS_FOR_GROCERY } from "../Utils/constants";
import GroceryCompo from "./GroceryCompo";
import GroceryShimmer from "./GroceryShimmer";

const GroceryMid = () => {
  const [groceryList, setgroceryList] = useState(null);
  const [groceryTitle, setgroceryTitle] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fapi%2Finstamart%2Fhome%3FpageNo%3D2%26layoutId%3D3173%26storeId%3D1383574%26clientId%3DINSTAMART-APP"
        // "https://www.swiggy.com/api/instamart/home?pageNo=1&layoutId=3173&storeId=1383574&clientId=INSTAMART-APP"
    );
    const json = await data.json();
    // console.log(json?.data?.widgets?.[4]?.data);
    setgroceryList(json?.data?.widgets?.[4]?.data);
    setgroceryTitle(json?.data?.widgets?.[4]?.widgetInfo);
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
export default GroceryMid;
