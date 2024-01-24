import { useState, useEffect } from "react";
import { CORS_API } from "../Utils/constants";
import GroceryCompo from "./GroceryCompo";
import GroceryShimmer from "./GroceryShimmer";

const GroceryMid4 = () => {
  const [groceryList, setgroceryList] = useState(null);
  const [groceryTitle, setgroceryTitle] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
        "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fapi%2Finstamart%2Fhome%3FpageNo%3D2%26layoutId%3D3173%26storeId%3D1383574%26clientId%3DINSTAMART-APP"
    );
    const json = await data.json();
    console.log(json)
    setgroceryList(json?.data?.widgets?.[2]?.data);
    setgroceryTitle(json?.data?.widgets?.[2]?.widgetInfo);
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
export default GroceryMid4;
