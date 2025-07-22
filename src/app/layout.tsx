import NavBar from "@/components/Header/NavBar";
import ThemeProvider from "@/components/Theme/ThemeProvider";
import { RootLayoutProps } from "@/lib/types";
import "./globals.css";

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
					<main>{children}</main>
					{/* <Footer /> */}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
