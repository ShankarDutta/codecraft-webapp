import Image from "next/image";
import Link from "next/link";
import ThemeChangerBtn from "../Theme/ThemeChangerBtn";

const CodeEditorNav = () => {
	return (
		<header>
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
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
		</header>
	);
};

export default CodeEditorNav;
