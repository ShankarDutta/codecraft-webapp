import ContactForm from "@/components/ContactForm/ConatactForm";
import Image from "next/image";

const page = () => {
	return (
		<>
			<div className="absolute top-0 left-[-85] z-[-10] h-[40%] w-[40%] bg-yellow-300 blur-[250px] dark:bg-blue-400"></div>
			<div className="mt-10 mb-10 grid grid-cols-1 place-items-center gap-14 lg:mt-0 lg:mb-0 lg:h-[95dvh] lg:grid-cols-2 lg:gap-20">
				{/* cols 1  */}
				<div className="grid w-full place-items-center gap-5 lg:place-items-start">
					<div className="grid gap-3 text-center font-semibold lg:text-start">
						<div className="text-2xl font-bold text-blue-500 dark:text-violet-400">
							CONTACT US
						</div>
						<div className="text-xl lg:text-5xl">
							Lets Build Something
							<span className="text-blue-400 dark:text-violet-400">
								Awesome!
							</span>
						</div>
						<div className="text-black/65 dark:text-white/65">
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
					<div className="pb-4 text-center text-3xl font-bold text-blue-500 lg:text-start dark:text-violet-400">
						Get in touch (Support)
					</div>
					<div className="">
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
