// components/Codeeditor/DesktopEditor.tsx

import { ClientEditorProps } from "@/lib/types";
import dynamic from "next/dynamic";
import { FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import Loading from "./Loading";

const CodeEditorClient = dynamic(() => import("./CodeEditorClient"), {
	loading: () => <Loading />,
	ssr: false,
});

const DesktopEditor = ({ language, value, onChange }: ClientEditorProps) => {
	const getIcon = (lang: string) => {
		switch (lang) {
			case "xml":
				return (
					<FaHtml5
						color="red"
						size={20}
					/>
				);
			case "css":
				return (
					<FaCss3Alt
						color="blue"
						size={20}
					/>
				);
			case "javascript":
				return (
					<FaJsSquare
						color="gold"
						size={20}
					/>
				);
			default:
				return "";
		}
	};

	const getTitle = (lang: string) => {
		switch (lang) {
			case "xml":
				return "HTML";
			case "css":
				return "CSS";
			case "javascript":
				return "JavaScript";
			default:
				return "Code";
		}
	};
	return (
		<section className="w-full rounded-md border-t-0 border-gray-700 bg-white text-black shadow-lg dark:bg-gray-900 dark:text-white">
			<div className="flex items-center gap-2 border-b-2 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
				{getIcon(language)}
				<span className="text-sm font-medium">
					{getTitle(language)}
				</span>
			</div>
			<div className="h-[270px] overflow-hidden overflow-x-hidden">
				<CodeEditorClient
					language={language}
					value={value}
					onChange={onChange}
				/>
			</div>
		</section>
	);
};

export default DesktopEditor;
