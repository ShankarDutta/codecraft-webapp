import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../shadcnui/button";

const Hero = () => {
	return (
		<>
			<div className="grid grid-cols-1 place-content-center place-items-center gap-5 lg:h-[80dvh] lg:grid-cols-2 lg:gap-10">
				{/* logo for mobile screen  */}
				<Image
					src={"/logo.svg"}
					height={200}
					width={200}
					priority
					className="motion-opacity-in-0 motion-translate-y-in-50 block h-auto w-[250] py-6 lg:hidden"
					alt=" logo"
				/>

				{/* text section  */}
				<div className="motion-opacity-in-0 motion-translate-y-in-50 order-2 grid gap-5 text-center lg:order-1 lg:text-left">
					<h1 className="text-3xl font-bold lg:text-5xl">
						The best place to build, test, and discover front-end
						code.
					</h1>
					<p className="text-lg text-black/75 dark:text-white/75">
						CodeCraft is a social development environment for
						front-end designers and developers. Build and deploy a
						website, show off your work, build test cases to learn
						and debug, and find inspiration.
					</p>

					{/* started btn  */}
					<Link href={"/codeeditor"}>
						<Button className="h-auto w-auto bg-blue-500 text-lg font-normal text-white hover:cursor-pointer hover:bg-blue-600">
							Start Coding <MoveRight className="pt-0.5" />
						</Button>
					</Link>
				</div>

				{/* hero img for all devices  */}
				<Image
					src={"/Home/heroimg.svg"}
					height={700}
					width={700}
					priority
					className="motion-opacity-in-0 motion-translate-y-in-50 motion-preset-oscillate-sm motion-duration-4000 order-1 h-auto w-[400] lg:order-2 lg:w-auto"
					alt="hero-side-image"
				/>
			</div>
		</>
	);
};

export default Hero;
