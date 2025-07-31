import TopElements from "@/components/Codeeditor/TopElements";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Code-Editor || CodeCarft : Online Code Editor ",
	description:
		"Explore the CodeCraft online code editor – a fast, intuitive coding environment for HTML, CSS, and JavaScript. Built with React and CodeMirror, it offers real-time preview, syntax highlighting, and a responsive UI to boost your web development workflow.",
};

const page = () => {
	return (
		<>
			<section className="bg-white dark:bg-gray-950">
				<TopElements />
			</section>
		</>
	);
};

export default page;
