import { useEffect, useState } from "react";

//Finalize the Contract what is the input and whats the output
const useOnlineStatus = () => {
  const [OnlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return OnlineStatus;
};
export default useOnlineStatus;
