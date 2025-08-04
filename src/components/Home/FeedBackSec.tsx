import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../shadcnui/button";

const FeedBackSec = () => {
	return (
		<>
			<div className="space-y-2">
				<h1 className="font-primary text-xl font-bold">
					We are Ready, Lets Talk.
				</h1>

				<div className="font-secondary">
					We evaluate your requirements and provide the best
					solutions.
				</div>
			</div>

			<Link href={"/contact"}>
				<Button className="font-secondary mt-4 h-auto w-auto bg-blue-500 text-lg font-normal text-white hover:cursor-pointer hover:bg-blue-600 lg:mt-0">
					Conatct Us <MoveRight />
				</Button>
			</Link>
		</>
	);
};

export default FeedBackSec;
