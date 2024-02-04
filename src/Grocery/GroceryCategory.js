import { useState, useEffect } from "react";
import { CARD_IMG_URL } from "../Utils/constants";

const GroceryCategory = () => {
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

    setgroceryList(json?.data?.widgets?.[0]?.data);
    setgroceryTitle(json?.data?.widgets?.[1]?.widgetInfo?.title);
  };

  return (
    <div className="lg:mx-32 md:mx-28  border-b pb-8 mx-5">
      <span className="lg:text-xl text-base sm:text-lg  md:text-xl font-extrabold px-2 text-gray-950">
        {groceryTitle}
      </span>
      <div className="flex lg:justify-between justify-evenly sm:justify-between md:justify-between items-start  flex-row flex-wrap pt-6 gap-4 lg:gap-6 md:gap-4">
        {groceryList?.map((gros) => (
          <div
            className="flex justify-center items-center lg:w-[100px] md:w-[80px] gap-2 flex-col"
            key={gros?.imageId}
          >
            <img
              className="lg:w-24 md:w-24 w-20"
              src={CARD_IMG_URL + gros.imageId}
            ></img>
            {gros.imageId && (
              <div className="flex justify-center items-center ">
                <span className="text-xs text-center hidden lg:flex font-bold text-gray-700">
                  {gros.displayName.length > 25
                    ? `${gros.displayName.slice(0, 25)}...`
                    : gros.displayName}
                </span>
                <span className="text-xs text-center flex lg:hidden font-bold text-gray-700">
                  {gros.displayName.length > 10
                    ? `${gros.displayName.slice(0, 10)}...`
                    : gros.displayName}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default GroceryCategory;
