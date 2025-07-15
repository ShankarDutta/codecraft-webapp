import FaqSec from "@/components/Home/FaqSec";
import FeedBackSec from "@/components/Home/FeedBackSec";
import Hero from "@/components/Home/Hero";
import Slider from "@/components/Home/Slider";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = () => {
	return (
		<>
			<div className="motion-scale-in-0 absolute top-60 left-[65%] z-[-10] h-[30%] w-[10%] rounded-full bg-gradient-to-r from-[#3dbeff] from-0% to-[#ff43fc] to-50% blur-[100px]"></div>
			{/* back-ground gradient  */}
			<Hero />

			{/* infinty logo slide  */}
			<section className="py-20">
				<h1 className="py-4 text-center text-2xl font-bold">
					Loved by hundreds of teams, including:
				</h1>
				<Slider />
			</section>

			{/* Common qustion asked section  */}
			<section className="pb-20">
				<FaqSec />
			</section>

			{/* contact with us section  */}
			<section className="mb-20 items-center rounded-md bg-slate-500/35 px-8 py-12 backdrop-blur-md md:flex md:justify-between">
				<FeedBackSec />
			</section>
		</>
	);
};

export default page;
