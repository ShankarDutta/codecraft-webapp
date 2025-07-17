import Link from "next/link";

const DesktopFooter = () => {
	return (
		<>
			{/* 1st line */}
			<div className="font-bold">
				CodeCraft -
				<span className="ps-3 font-semibold">
					This is a demo Project Based on Frontend
				</span>
			</div>

			{/* 2nd line  */}
			<div className="space-x-3 font-bold">
				Technologies -
				<span className="ps-3 font-semibold hover:text-blue-600 dark:hover:text-blue-300">
					<a
						href="https://react.dev/"
						target="_blank"
						rel="noopener noreferrer">
						React
					</a>
				</span>
				<span className="font-semibold hover:text-blue-600 dark:hover:text-blue-300">
					<a
						href="https://nextjs.org/"
						target="_blank"
						rel="noopener noreferrer">
						Next Js
					</a>
				</span>
				<span className="font-semibold hover:text-blue-600 dark:hover:text-blue-300">
					<a
						href="https://tailwindcss.com/"
						target="_blank"
						rel="noopener noreferrer">
						Tailwind Css
					</a>
				</span>
				<span className="font-semibold hover:text-blue-600 dark:hover:text-blue-300">
					<a
						href="https://ui.shadcn.com/"
						target="_blank"
						rel="noopener noreferrer">
						Sadhcn
					</a>
				</span>
			</div>

			{/* 3rd line  */}
			<div className="space-x-3 font-bold">
				Social -
				<Link
					href={"/"}
					className="ps-3 font-semibold hover:text-blue-600 dark:hover:text-blue-300">
					Youtube
				</Link>
				<Link
					href={"/"}
					className="font-semibold hover:text-blue-600 dark:hover:text-blue-300">
					Linkdin
				</Link>
				<Link
					href={"/"}
					className="font-semibold hover:text-blue-600 dark:hover:text-blue-300">
					Behance
				</Link>
			</div>

			{/* 4th line  */}
			<div className="font-bold">
				Project holder -{" "}
				<span className="ps-3 font-semibold"> Shankar Dutta</span>
			</div>
		</>
	);
};

export default DesktopFooter;
