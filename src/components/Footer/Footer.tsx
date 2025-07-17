import Image from "next/image";
import DesktopFooter from "./DesktopFooter";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="rounded-t-2xl md:bg-slate-400/30 dark:md:bg-fuchsia-400/10">
			<div className="mx-auto hidden max-w-7xl items-center justify-center px-6 py-6 md:flex md:justify-between">
				<div className="">
					<DesktopFooter />
				</div>
				<Link
					href={"/"}
					className="lg:place-items-end">
					<Image
						src={"/logo.svg"}
						height={140}
						width={140}
						className="h-auto w-[150]"
						alt=" logo"
					/>
					<div className="">©2025 CodeCraft</div>
				</Link>
			</div>
			{/* mobile footer  */}
			<div className="mx-auto max-w-7xl border-t-3 border-black/45 px-6 py-4 text-center dark:border-white/45">
				Copyright © 2025 CodeCraft All rights reserved
			</div>
		</footer>
	);
};

export default Footer;
