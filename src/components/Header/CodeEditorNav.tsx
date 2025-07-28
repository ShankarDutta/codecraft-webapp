import Image from "next/image";
import Link from "next/link";
import ThemeChangerBtn from "../Theme/ThemeChangerBtn";

const CodeEditorNav = () => {
	return (
		<header className="sticky top-0 z-10 border-b-2 bg-white/40 backdrop-blur-lg dark:bg-white/4">
			<div className="mx-auto flex items-center justify-between px-6 py-2">
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
