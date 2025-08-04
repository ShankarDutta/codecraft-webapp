"use client";
import { usePathname } from "next/navigation";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
	const pathname = usePathname();
	return pathname !== "/codeeditor" ? (
		<footer className="bg-gradient-to-r from-[#00093c] to-[#2d0b00] py-6 text-white">
			<div className="mx-auto max-w-7xl px-6">
				<div className="hidden lg:block">
					<DesktopFooter />
				</div>
				<div className="block lg:hidden">
					<MobileFooter />
				</div>

				{/* Copyright */}
				<div className="mt-6 border-t-2 border-white pt-4 text-center">
					Copyright © 2025 CodeCraft All rights reserved
				</div>
			</div>
		</footer>
	) : null;
};

export default Footer;
