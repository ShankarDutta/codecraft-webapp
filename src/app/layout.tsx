import ThemeProvider from "@/components/Theme/ThemeProvider";
import { RootLayoutProps } from "@/lib/types";
import "./globals.css";
import NavBar from "@/components/Header/NavBar";

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className="">
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<NavBar />
					<main className="mx-auto max-w-7xl px-6 py-3">
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
