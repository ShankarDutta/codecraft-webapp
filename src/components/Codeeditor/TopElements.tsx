import DesktopEditor from "./DesktopEditor";
import MobileEditor from "./MobileEditor";

const TopElements = () => {
	return (
		<section className="mx-auto max-w-7xl px-6">
			{/* Desktop view  */}
			<div className="hidden md:block">
				<DesktopEditor />
			</div>

			{/* mobile view  */}
			<div className="block md:hidden">
				<MobileEditor />
			</div>
		</section>
	);
};

export default TopElements;
