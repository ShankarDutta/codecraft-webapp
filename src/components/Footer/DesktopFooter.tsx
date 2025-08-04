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

const DesktopFooter = () => {
	return (
		<section className="grid grid-cols-3 place-items-center-safe">
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
				</Link>
				<p className="font-secondary pt-4">
					CodeCraft is a social development environment for front-end
					designers and developers. Build and deploy a website, show
					off your work.
				</p>
			</div>

			{/* Useful links  */}
			<div className="font-secondary relative bottom-3 space-y-0.5">
				<div className="font-primary text-lg font-semibold">
					Useful Links
				</div>
				<div className="hover:cursor-pointer hover:text-fuchsia-300">
					<Link
						href={"/"}
						className="">
						Home
					</Link>
				</div>
				<div className="hover:cursor-pointer hover:text-fuchsia-300">
					<Link
						href={"/codeeditor"}
						className="">
						Code Editor
					</Link>
				</div>
				<div className="hover:cursor-pointer hover:text-fuchsia-300">
					<Link
						href={"/contact"}
						className="">
						Contact
					</Link>
				</div>
			</div>

			{/* contact  */}
			<div className="font-secondary space-y-0.5">
				<div className="font-primary text-lg font-semibold">
					Conatct
				</div>
				<div className="flex items-center gap-1 hover:text-fuchsia-300">
					<FaPhoneAlt size={18} />

					<a
						href="tel:+91236906586"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Call us at +91 2369 06586">
						+9123696586
					</a>
				</div>

				<div className="flex items-center gap-2 hover:text-fuchsia-300">
					<MdMail size={18} />
					<a
						href="mailto:shankardutta1719@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Email us at shankardutta1719@gmail.com">
						shankardutta1719@gmail.com
					</a>
				</div>

				{/* icons */}

				<div className="mt-4 flex gap-2">
					<a
						href="https://www.facebook.com/profile.php?id=61577981354081e"
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-sm bg-blue-500 p-2 text-white hover:bg-blue-600 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600">
						<FaFacebookF />
					</a>
					<a
						href="https://www.instagram.com/subhamdutta.04?igsh=MTkzbmZnNnZjeGp2Zw==" // replace with your actual FB URL
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-sm bg-blue-500 p-2 text-white hover:bg-blue-600 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600">
						<FaInstagram />
					</a>
					<a
						href="https://www.youtube.com/@We_creation1719" // replace with your number
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-sm bg-blue-500 p-2 text-white hover:bg-blue-600 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600">
						<FaYoutube />
					</a>
					<a
						href="https://wa.me/8697320203" // replace with your number
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-sm bg-blue-500 p-2 text-white hover:bg-blue-600 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600">
						<FaWhatsapp />
					</a>
				</div>
			</div>
		</section>
	);
};

export default DesktopFooter;
