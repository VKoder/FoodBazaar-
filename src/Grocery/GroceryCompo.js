import { Link } from "react-router-dom";
import GroceryCard from "./GroceryCard";

const GroceryCompo = ({ groceryList, groceryTitle }) => {
  return (
    <div className="slider lg:px-16 lg:my-5 md:px-16 md:my-3 w-full lg:pt-3 md:pt-3">
      <div className="flex justify-between items-center flex-row">
        <div className="flex justify-start items-start flex-col">
          <span className="lg:text-xl text-base sm:text-lg md:text-xl font-extrabold px-2 text-gray-950">
            {groceryTitle?.title}
          </span>
          {groceryTitle?.subtitle && (
            <span className="lg:text-base text-xs md:text-sm pt-1 font-extralight px-2 text-gray-500">
              {groceryTitle?.subtitle}
            </span>
          )}
        </div>
        {groceryTitle && (
          <Link to={"/groceryCollection/" + groceryList?.collectionId}>
            <span className="lg:text-sm text-xs md:text-sm font-bold text-orange-600 cursor-pointer">
              See All
            </span>
          </Link>
        )}
      </div>
      <div className="slider__content mt-4">
        {groceryList?.map((grocery) => (
          <Link to={"/groceryInfo/" + grocery.product_id}>
            <GroceryCard key={grocery.product_id} groceryData={grocery} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default GroceryCompo;
