import { ClientEditorProps } from "@/lib/types";

import dynamic from "next/dynamic";

const CodeEditorClient = dynamic(() => import("./CodeEditorClient"), {
	ssr: false,
});

const MobileEditor = ({ language, value, onChange }: ClientEditorProps) => {
	// const GetIcon = (language: string) => {
	// 	if (language === "xml") {
	// 		return (
	// 			<FaHtml5
	// 				color="red"
	// 				size={20}
	// 			/>
	// 		);
	// 	} else if (language === "css") {
	// 		return (
	// 			<FaCss3Alt
	// 				color="blue"
	// 				size={20}
	// 			/>
	// 		);
	// 	} else if (language === "javascript") {
	// 		return (
	// 			<FaSquare
	// 				color="gold"
	// 				size={20}
	// 			/>
	// 		);
	// 	} else {
	// 		return "";
	// 	}
	// };

	// const GetTittle = (language: string) => {
	// 	if (language === "xml") {
	// 		return "HTML";
	// 	} else if (language === "css") {
	// 		return "css";
	// 	} else if (language === "javascript") {
	// 		return "JavaScript";
	// 	} else {
	// 		return "code";
	// 	}
	// };

	return (
		<>
			<div className="h-[270px] overflow-hidden">
				<CodeEditorClient
					language={language}
					value={value}
					onChange={onChange}
				/>
			</div>
		</>
	);
};

export default MobileEditor;
