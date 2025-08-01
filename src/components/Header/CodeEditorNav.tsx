"use client";
import { cssAtom, htmlAtom, jsAtom } from "@/lib/codeatom";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import ThemeChangerBtn from "../Theme/ThemeChangerBtn";
import { Button } from "../shadcnui/button";

const CodeEditorNav = () => {
	const [html, setHtml] = useAtom(htmlAtom);
	const [css, setCss] = useAtom(cssAtom);
	const [js, setJs] = useAtom(jsAtom);

	const handleSave = () => {
		localStorage.setItem("html", html);
		localStorage.setItem("css", css);
		localStorage.setItem("js", js);
	};

	const handleClear = () => {
		localStorage.removeItem(html);
		localStorage.removeItem(css);
		localStorage.removeItem(js);
		setHtml("");
		setCss("");
		setJs("");
	};

	return (
		<section className="sticky top-0 z-10 flex items-center justify-between border-b-2 bg-white/40 px-6 py-2 backdrop-blur-lg dark:bg-white/4">
			<div className="flex items-center gap-3">
				<Link href="/">
					<Image
						src="/logo.svg"
						height={200}
						width={200}
						alt="logo"
						className="h-[50px] w-[100px]"
						priority
					/>
				</Link>
				<ThemeChangerBtn />
			</div>

			<div className="space-x-4">
				<Button
					className="bg-blue-500 text-white hover:bg-blue-600"
					onClick={handleSave}>
					Save
				</Button>
				<Button
					className="bg-red-500 text-white hover:bg-red-600"
					onClick={handleClear}>
					Clear All
				</Button>
			</div>
		</section>
	);
};

export default CodeEditorNav;
