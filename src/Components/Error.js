import { useRouteError } from "react-router-dom";
import error from "../Images/404.svg";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="bg-gray-600 w-12/12 h-screen error">
      <img className="w-8/12 mx-auto" src={error}></img>
    </div>
  );
};
export default Error;
