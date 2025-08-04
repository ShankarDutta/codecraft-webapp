import ContactForm from "@/components/ContactForm/ConatactForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Conatct || CodeCarft : Online Code Editor ",
	description:
		"Get in touch with the CodeCraft team. Whether you have questions, feedback, or collaboration ideas, our contact page makes it easy to reach out. We're here to support developers and creators building with our online code editor.",
};
const page = () => {
	return (
		<section className="mx-auto max-w-7xl overflow-hidden px-6">
			<div className="absolute top-0 left-[-85] z-[-10] h-[40%] w-[40%] bg-yellow-300 blur-[250px] dark:bg-blue-400"></div>
			<div className="mt-10 mb-10 grid grid-cols-1 place-items-center gap-14 lg:mt-0 lg:mb-0 lg:h-[95dvh] lg:grid-cols-2 lg:gap-20">
				{/* cols 1  */}
				<div
					className="grid w-full place-items-center gap-5 lg:place-items-start"
					data-aos="fade-right">
					<div className="grid gap-3 text-center font-semibold lg:text-start">
						<div className="font-primary text-2xl font-bold text-blue-500 dark:text-violet-400">
							CONTACT US
						</div>
						<div className="font-secondary text-xl lg:text-5xl">
							Lets Build Something
							<span className="font-secondary px-2 text-blue-400 dark:text-violet-400">
								Awesome!
							</span>
						</div>
						<div className="font-secondary text-black/65 dark:text-white/65">
							Got a project that needs pixel-perfect design or
							bulletproof code? Drop us a line we reply within 24
							hours.
						</div>
					</div>
					<Image
						src="Contact/contact.svg"
						alt="Contact Us"
						width={500}
						height={500}
						priority
						className="h-auto w-[400]"
					/>
				</div>
				{/* cols 2 */}
				<div className="w-full lg:w-lg">
					<div
						className="font-primary pb-4 text-center text-3xl font-bold text-blue-500 lg:text-start dark:text-violet-400"
						data-aos="fade-left">
						Get in touch (Support)
					</div>
					<div className="">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
