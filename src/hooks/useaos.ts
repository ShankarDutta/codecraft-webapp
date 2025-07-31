import AOS from "aos";
import { useEffect } from "react";

export function useAOS() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	});
}
