import loading from "../Images/loading.gif";

const LoadingScreen = () => {
  return (
    <div className="w-12/12 mx-auto  flex justify-center flex-col items-center h-screen">
      <img className="lg:w-40 md:w-36 w-28 mx-auto" src={loading}></img>
      <span className="lg:text-lg pt-2 text-gray-600 font-semibold text-base  md:text-lg">
        Loading...
      </span>
    </div>
  );
};
export default LoadingScreen;
