"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const Slider = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					640: {
						slidesPerView: 3,
						spaceBetween: 15,
						centeredSlides: false,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
				}}
				modules={[Autoplay, FreeMode]}
				className="mySwiper">
				<SwiperSlide>
					<Image
						src={"/Home/C-Logo-1.svg"}
						height={200}
						width={200}
						alt="logo-1"
						className="mx-auto h-[100px] w-[160px]"
					/>
				</SwiperSlide>

				<SwiperSlide>
					<Image
						src={"/Home/C-Logo-2.svg"}
						height={200}
						width={200}
						alt="logo-2"
						className="mx-auto h-[100px] w-[160px]"
					/>
				</SwiperSlide>

				<SwiperSlide>
					<Image
						src={"/Home/C-Logo-3.svg"}
						height={500}
						width={500}
						alt="logo-3"
						className="mx-auto h-[100px] w-[160px]"
					/>
				</SwiperSlide>

				<SwiperSlide>
					<Image
						src={"/Home/C-Logo-4.svg"}
						height={200}
						width={200}
						alt="logo-4"
						className="mx-auto h-[100px] w-[160px]"
					/>
				</SwiperSlide>

				<SwiperSlide>
					<Image
						src={"/Home/C-Logo-5.svg"}
						height={200}
						width={200}
						alt="logo-5"
						className="mx-auto h-[100px] w-[160px]"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Slider;
