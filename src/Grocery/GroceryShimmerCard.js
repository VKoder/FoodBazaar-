const GroceryShimmerCard = () => {
  return (
    <div className="flex justify-center items-center flex-col lg:w-40 w-24 md:w-40  p-2">
      <div className="border-spacing-1 stroke animate border rounded-lg lg:h-28 h-20 md:h-28 w-full relative overflow-hidden"></div>

      <div className="flex justify-center flex-col lg:gap-2 gap-1 md:gap-2 items-start w-full lg:pt-2 pt-1 md:pt-2">
        <span className="text-left stroke animate text-xs rounded-lg font-light lg:h-4 lg:w-20 h-3 w-16 md:h-4 md:w-20 "></span>
        <span className="font-bold stroke animate text-sm lg:h-3 md:h-3 h-2 rounded-lg lg:w-10 md:w-10 w-8 "></span>
        <span className="font-bold stroke animate text-sm lg:h-3 md:h-3 h-2 rounded-lg lg:w-14 md:w-14 w-10 "></span>
      </div>
    </div>
  );
};
export default GroceryShimmerCard;
