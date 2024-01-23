import GroceryShimmerCard from "./GroceryShimmerCard";

const GroceryShimmer = () => {
  return (
    <div className="lg:px-12 lg:my-10 md:px-12 px-6 my-3 md:my-5 flex justify-center items-center flex-row md:gap-8 gap-2 lg:gap-8 w-10/12 mx-auto pt-3">
      <GroceryShimmerCard />
      <GroceryShimmerCard />
      <GroceryShimmerCard />
      <GroceryShimmerCard />
      <GroceryShimmerCard />
      <GroceryShimmerCard />
      
    </div>
  );
};
export default GroceryShimmer;
