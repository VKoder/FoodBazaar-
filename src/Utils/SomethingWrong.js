import Offline from "../Images/props3.svg";
const SomethingWrong = () => {
  return (
    <div className="w-12/12 lg:py-10 py-6 md:py-10  mx-auto flex justify-center gap-2 flex-col items-center">
      <img className="lg:w-96 md:w-80 w-48" src={Offline}></img>
      <span className="lg:text-xl text-base md:text-xl text-gray-700 font-bold pt-8">
        Something Went Wrong!
      </span>
      <span className="lg:text-lg text-sm md:text-lg text-gray-600 font-semibold">
        Please Refresh..
      </span>
    </div>
  );
};
export default SomethingWrong;
