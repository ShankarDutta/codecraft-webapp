import { ClientEditorProps } from "@/lib/types";
import dynamic from "next/dynamic";
import Loading from "./Loading";

const CodeEditorClient = dynamic(() => import("./CodeEditorClient"), {
	loading: () => <Loading />,
	ssr: false,
});

const MobileEditor = ({ language, value, onChange }: ClientEditorProps) => {
	return (
		<>
			<div className="h-[270px] overflow-hidden rounded-b-md shadow-lg dark:bg-gray-900">
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
