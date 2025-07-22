import { FaHtml5 } from "react-icons/fa";

const DesktopEditor = () => {
	return (
		<section className="w-full rounded-md border-1 border-gray-700 bg-white text-xl font-semibold text-black/90 dark:bg-gray-900 dark:text-white/90">
			<div className="flex items-center gap-1 rounded-md border-2 bg-gray-300/50 py-3 dark:border-gray-700 dark:bg-gray-900/50">
				<div className="ml-2">
					<FaHtml5
						color="red"
						size={24}
					/>
				</div>
				<div className="mb-1">HTML</div>
			</div>
			<div className="h-[300px]">Html</div>
		</section>
	);
};

export default DesktopEditor;
