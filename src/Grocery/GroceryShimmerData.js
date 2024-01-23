const GroceryShimmerData = () => {
     return (
        <div className="lg:mx-36 md:mx-10 mx-2 px-2 py-2 rounded-lg my-4">
            <div className="flex justify-center items-center flex-col ">
                <div className="h-96 w-11/12 stroke animate rounded-lg"></div>
                <div className="flex justify-start items-start gap-3 pt-3 flex-col  w-11/12">
                    <span className="h-6 rounded-lg w-6/12 stroke animate"></span>
                    <span className="h-5 rounded-lg w-4/12 stroke animate"></span>
                    <span className="h-4 rounded-lg w-9/12 stroke animate"></span>
                </div>
            </div>

        </div>
     )
}
export default GroceryShimmerData;