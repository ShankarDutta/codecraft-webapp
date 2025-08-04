"use client";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/shadcnui/dialog";
import { cssAtom, htmlAtom, jsAtom } from "@/lib/codeatom";
import { useAtom } from "jotai";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Slide, toast, ToastContainer } from "react-toastify";
import ThemeChangerBtn from "../Theme/ThemeChangerBtn";
import { Button } from "../shadcnui/button";

const CodeEditorNav = () => {
	const [html, setHtml] = useAtom(htmlAtom);
	const [css, setCss] = useAtom(cssAtom);
	const [js, setJs] = useAtom(jsAtom);
	const { theme } = useTheme();

	const handleSave = () => {
		localStorage.setItem("html", html);
		localStorage.setItem("css", css);
		localStorage.setItem("js", js);
		toast.success("Code saved successfully in your browser!");
	};

	const handleClear = () => {
		localStorage.removeItem("html");
		localStorage.removeItem("css");
		localStorage.removeItem("js");
		setHtml("");
		setCss("");
		setJs("");
		toast.info("All code has been cleared.");
	};

	return (
		<>
			<ToastContainer
				position="top-left"
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick
				draggable
				theme={theme === "dark" ? "dark" : "light"}
				transition={Slide}
			/>

			<section className="sticky top-0 z-10 flex items-center justify-between border-b-2 bg-white/40 px-6 py-2 backdrop-blur-lg dark:bg-white/4">
				{/* Logo + Theme Toggle */}
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

				{/* Save & Clear Buttons */}
				<div className="space-x-4">
					<Button
						className="bg-blue-500 text-white hover:bg-blue-600"
						onClick={handleSave}>
						Save
					</Button>

					<Dialog>
						<DialogTrigger asChild>
							<Button className="bg-red-500 text-white hover:bg-red-600">
								Clear all
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>
									Are you absolutely sure?
								</DialogTitle>
								<DialogDescription>
									This will permanently delete your saved code
									from this device. You wont be able to
									recover it.
								</DialogDescription>
							</DialogHeader>
							<DialogFooter>
								<DialogClose asChild>
									<Button className="bg-transparent text-blue-500 hover:cursor-pointer hover:bg-transparent hover:text-blue-700">
										Close
									</Button>
								</DialogClose>
								<DialogClose asChild>
									<Button
										className="bg-red-500 text-white hover:cursor-pointer hover:bg-red-600"
										onClick={handleClear}>
										Confirm
									</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
			</section>
		</>
	);
};

export default CodeEditorNav;
