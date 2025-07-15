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
			{/* back-ground gradient  */}
			<div className="motion-scale-in-0 absolute top-60 left-[65%] z-[-10] h-[30%] w-[10%] rounded-full bg-gradient-to-r from-[#3dbeff] from-0% to-[#ff43fc] to-50% blur-[100px]"></div>
			<Hero />
			<section className="py-12">
				<h1 className="py-4 text-center text-2xl font-bold">
					Loved by hundreds of teams, including:
				</h1>
				<Slider />
			</section>
		</>
	);
};

export default page;
