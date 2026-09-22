"use client";

import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { dojos } from "@/lib/dojos";
import DojoCard from "@/components/dojo-card";

export default function DojoList() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={32}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="pb-10 [--swiper-navigation-color:#0000fe] [--swiper-navigation-size:20px] [--swiper-pagination-color:#0000fe] [--swiper-pagination-bullet-inactive-color:#d4d4d4] [--swiper-pagination-bullet-inactive-opacity:1]"
    >
      {dojos.map((dojo) => (
        <SwiperSlide key={`${dojo.name}-${dojo.branch_off}`}>
          <DojoCard dojo={dojo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
