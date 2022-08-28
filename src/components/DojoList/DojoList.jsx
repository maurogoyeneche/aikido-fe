import React from "react";
import { dojos } from "../../mocks/dojos";
import DojoDetails from "../../screens/dojo/DojoDetails";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const DojoList = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {dojos.map((dojo) => (
        <SwiperSlide>
          <DojoDetails dojo={dojo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  // return dojos.map((dojo, index) => (
  //   <React.Fragment key={index + 1}>
  //     <h4 className="text-center">
  //       {dojo.name} {dojo.branch_off}
  //     </h4>
  //     <DojoDetails dojo={dojo} />
  //     <hr />
  //   </React.Fragment>
  // ));
};

export default DojoList;
