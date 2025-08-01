import Image from "next/image";
import Link from "next/link";
import {
	FaFacebookF,
	FaInstagram,
	FaPhoneAlt,
	FaWhatsapp,
	FaYoutube,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";

const MobileFooter = () => {
	return (
		<section className="space-y-6">
			<div className="">
				<Link
					href={"/"}
					className="">
					<Image
						src={"/logo.svg"}
						height={140}
						width={140}
						className="h-auto w-[150px]"
						alt="logo"
					/>

					<p className="pt-4">
						CodeCraft is a social development environment for
						front-end designers and developers. Build and deploy a
						website, show off your work.
					</p>
				</Link>
			</div>

			{/* icons */}

			<div className="flex gap-2">
				<a
					href="https://www.facebook.com/profile.php?id=61577981354081e"
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-sm bg-blue-500 p-2 text-white dark:bg-fuchsia-500">
					<FaFacebookF />
				</a>
				<a
					href="https://www.instagram.com/subhamdutta.04?igsh=MTkzbmZnNnZjeGp2Zw==" // replace with your actual FB URL
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-sm bg-blue-500 p-2 text-white dark:bg-fuchsia-500">
					<FaInstagram />
				</a>
				<a
					href="https://www.youtube.com/@We_creation1719" // replace with your number
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-sm bg-blue-500 p-2 text-white dark:bg-fuchsia-500">
					<FaYoutube />
				</a>
				<a
					href="https://wa.me/8697320203" // replace with your number
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-sm bg-blue-500 p-2 text-white dark:bg-fuchsia-500">
					<FaWhatsapp />
				</a>
			</div>

			{/* Useful links  */}
			<div className="space-y-0.5">
				<div className="text-lg font-semibold">Useful Links</div>
				<div className="">
					<Link
						href={"/"}
						className="">
						Home
					</Link>
				</div>
				<div className="">
					<Link
						href={"/codeeditor"}
						className="">
						Code Editor
					</Link>
				</div>
				<div className="">
					<Link
						href={"/contact"}
						className="">
						Contact
					</Link>
				</div>
			</div>

			{/* contact  */}
			<div className="space-y-0.5">
				<div className="text-lg font-semibold">Conatct</div>
				<div className="flex items-center gap-1">
					<FaPhoneAlt /> +9123696586
				</div>

				<div className="flex items-center gap-2">
					<MdMail />
					shnkardutta1719@gmail.com
				</div>
			</div>
		</section>
	);
};

export default MobileFooter;
