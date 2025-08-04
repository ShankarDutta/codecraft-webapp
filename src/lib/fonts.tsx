import { Inter, Noto_Sans } from "next/font/google";

export const InterFont = Inter({
	subsets: ["latin"],
	style: "normal",
	display: "swap",
	weight: ["600"],
	variable: "--font-inter",
});

export const NotoSans = Noto_Sans({
	subsets: ["latin"],
	style: "normal",
	display: "swap",
	weight: ["100"],
	variable: "--font-noto-sans",
});
