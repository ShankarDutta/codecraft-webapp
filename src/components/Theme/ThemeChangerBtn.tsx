"use client";
import { useTheme } from "next-themes";
import { Button } from "../shadcnui/button";
import { Moon, Sun } from "lucide-react";

const ThemeChangerBtn = () => {
	const { theme, setTheme } = useTheme();
	const handeltheme = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};
	return (
		<>
			<Button
				onClick={handeltheme}
				variant={"ghost"}
				className="hover:cursor-pointer">
				<Sun className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 text-fuchsia-500 transition-all dark:scale-130 dark:rotate-0" />
				<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-130 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			</Button>
		</>
	);
};

export default ThemeChangerBtn;
