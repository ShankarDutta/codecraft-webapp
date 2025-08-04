"use client";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./shadcnui/button";

const ScrollTopBtn = () => {
	const [visible, setvisible] = useState(false);

	useEffect(() => {
		const Btnvisible = () => {
			if (window.scrollY > 300) {
				setvisible(true);
			} else {
				setvisible(false);
			}
		};

		window.addEventListener("scroll", Btnvisible);
		return () => {
			window.removeEventListener("scroll", Btnvisible);
		};
	}, []);

	const scrollToBtn = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{visible && (
				<Button
					onClick={scrollToBtn}
					size="icon"
					className="fixed right-8 bottom-8 z-50 rounded-full bg-blue-400 transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-blue-600 dark:bg-fuchsia-400 dark:hover:bg-fuchsia-500"
					aria-label="Scroll to top">
					<ChevronUp className="h-4 w-4" />
				</Button>
			)}
		</>
	);
};

export default ScrollTopBtn;
