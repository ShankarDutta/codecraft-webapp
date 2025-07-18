"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import ThemeChangerBtn from "../Theme/ThemeChangerBtn";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import CodeEditorNav from "./CodeEditorNav";
const NavBar = () => {
	const pathname = usePathname();
	return (
		<header className="sticky top-0 z-10 bg-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-lg dark:bg-white/4">
			{pathname !== "/codeeditor" ? (
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
					<Link
						href="/"
						className="hidden lg:block">
						<Image
							src="/logo.svg"
							height={200}
							width={200}
							alt="logo"
							className="h-[50px] w-[100px]"
							priority
						/>
					</Link>

					{/* Desktop Nav */}
					<div className="hidden items-center gap-6 text-lg lg:flex">
						<DesktopNav />
					</div>

					{/* mobile Nav */}
					<div className="flex items-center lg:hidden">
						<MobileNav />
					</div>

					<div className="flex items-center gap-4">
						{/* Git icon  */}
						<Link href={"/"}>
							<FaGithub size={24} />
						</Link>

						{/* Dark Mode btn  */}
						<ThemeChangerBtn />
					</div>
				</div>
			) : (
				<CodeEditorNav />
			)}
		</header>
	);
};

export default NavBar;
