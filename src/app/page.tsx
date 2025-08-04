import FaqSec from "@/components/Home/FaqSec";
import FeedBackSec from "@/components/Home/FeedBackSec";
import Hero from "@/components/Home/Hero";
import Slider from "@/components/Home/Slider";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Home || CodeCarft : Online Code Editor ",
	description:
		"CodeCraft is a modern online code editor built with Next.js, React, and Tailwind CSS. Write, edit, and preview HTML, CSS, and JavaScript in real time. Ideal for developers, students, and creators building fast, responsive web projects in the browser",
};

const page = () => {
	return (
		<section className="mx-auto max-w-7xl overflow-hidden px-6">
			<div className="motion-scale-in-0 absolute top-60 left-[65%] z-[-10] h-[30%] w-[10%] rounded-full bg-gradient-to-r from-[#3dbeff] from-0% to-[#ff43fc] to-50% blur-[100px]"></div>
			{/* back-ground gradient  */}
			<Hero />

			{/* infinty logo slide  */}
			<section
				className="py-20"
				data-aos="fade-up">
				<h1
					className="font-primary py-4 text-center text-2xl font-bold"
					data-aos="fade-up">
					Loved by hundreds of teams, including
				</h1>
				<Slider />
			</section>

			{/* Common qustion asked section  */}
			<section className="pb-20">
				<FaqSec />
			</section>

			{/* contact with us section  */}
			<section
				className="mb-20 items-center rounded-md bg-slate-500/35 px-8 py-12 text-center backdrop-blur-md md:flex md:justify-between md:text-start"
				data-aos="zoom-in">
				<FeedBackSec />
			</section>
		</section>
	);
};

export default page;
