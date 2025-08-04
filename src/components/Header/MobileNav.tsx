"use client";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/shadcnui/sheet";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const MobileNav = () => {
	// trck the mobile nav condition or position
	const [open, setopen] = useState(false);
	// trck the current route
	const pathname = usePathname();

	useEffect(() => {
		setopen(false);
	}, [pathname]);

	return (
		<Sheet
			open={open}
			onOpenChange={setopen}>
			<SheetTrigger
				className="hover:cursor-pointer"
				asChild>
				<FaBars size={24} />
			</SheetTrigger>
			<SheetDescription></SheetDescription>
			<SheetContent className="bg-white/30 backdrop-blur-md">
				<SheetHeader className="border-b-3">
					<SheetTitle className="">
						<Link
							href={"/"}
							className="">
							<Image
								src={"/logo.svg"}
								height={200}
								width={200}
								alt="logo"
								className="h-[50px] w-[100px]"
							/>
						</Link>
					</SheetTitle>
				</SheetHeader>

				<div className="font-primary flex flex-col items-center justify-center gap-4 font-semibold">
					<Link
						href={"/"}
						className="hover:text-blue-500 dark:hover:text-fuchsia-500">
						Home
					</Link>
					<Link
						href={"/codeeditor"}
						className="hover:text-blue-500 dark:hover:text-fuchsia-500">
						Code editor
					</Link>

					<Link
						href={"/contact"}
						className="hover:text-blue-500 dark:hover:text-fuchsia-500">
						Contact
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
