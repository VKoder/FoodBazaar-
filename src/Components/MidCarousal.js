import React, { useRef, useState, useEffect } from "react";
import { Carousal1 } from "./Carousal";
import { REST_API } from "../Utils/constants";
import { CORS_API } from "../Utils/constants";
import ShimmerMidCarousal from "../Shimmers/ShimmerMidCarousal";

const MidCarousal = () => {
  const [carausal1data, setcarausal1data] = useState(null);
  const [midcarousaltitle, setmidcarousaltitle] = useState(null);

  const sliderRef = useRef(null);

  const scrollHandler = (scrollOffset) => {
    const newScrollLeft = sliderRef.current.scrollLeft + scrollOffset;
    sliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CORS_API + REST_API);
    const json = await data.json();
    setcarausal1data(
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info ||
        json?.data?.cards[1]?.card?.card?.imageGridCards?.info
    );
    setmidcarousaltitle(
      json?.data?.cards[0]?.card?.card?.header?.title ||
        json?.data?.cards[1]?.card?.card?.header?.title
    );
  };

  if (carausal1data === null) {
    return <ShimmerMidCarousal />;
  }
  if (carausal1data === undefined) {
    return <ShimmerMidCarousal />;
  }

  return (
    carausal1data && (
      <div
        className="slider lg:px-16 lg:my-10 md:px-16 my-3 md:my-5 w-full pt-3"
        ref={sliderRef}
      >
        <div className="w-full lg:pb-2 md:pb-2 pb-2 pt-2">
          {carausal1data && (
            <span
              className="w-full text-left lg:pb-6  md:pb-6  mt-4 font-black lg:text-2xl md:text-2xl text-xl tracking-tight"
              style={{ wordSpacing: 3 }}
            >
              What's on your mind?
            </span>
          )}
        </div>

        <div className="slider__content md:pt-3  pt-2">
          {carausal1data?.map((rest) => (
            // <Link to={rest?.entityId} key={rest.id}>
            <Carousal1 key={rest?.id} restData={rest} />
            // </Link>
          ))}
        </div>
        <hr></hr>
      </div>
    )
  );
};

export default MidCarousal;
