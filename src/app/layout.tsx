import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Header/NavBar";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import ThemeProvider from "@/components/Theme/ThemeProvider";
import { RootLayoutProps } from "@/lib/types";
import { Metadata } from "next";
import "./globals.css";

// Seo and Information
export const metadata: Metadata = {
	title: "CodeCraft",
	description:
		"Code Craft is a powerful and intuitive online code editor that lets you write, edit, and preview HTML, CSS, and JavaScript in real-time. Designed for developers, students, and creators, Code Craft offers a seamless coding experience with live preview, syntax highlighting, and localStorage saving. Whether you're prototyping an idea or learning to code, Code Craft makes front-end development faster, easier, and more enjoyable.",
	icons: {
		icon: [
			{
				url: "/fav.svg",
				type: "image/svg+xml",
				sizes: "275x275",
			},
		],
	},
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<NavBar />
					<ScrollTopBtn />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
