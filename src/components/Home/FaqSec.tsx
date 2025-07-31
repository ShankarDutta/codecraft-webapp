"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/shadcnui/accordion";
import { useAOS } from "@/hooks/useaos";
import { qna } from "@/lib/mapdata";
import { qnaprops } from "@/lib/types";

import Image from "next/image";

const FaqSec = () => {
	useAOS();

	return (
		<>
			<div className="justify-between gap-0 lg:flex lg:gap-40">
				<Image
					src={"/Home/Faq-img.jpg"}
					height={700}
					width={700}
					alt="Frequently-image"
					priority
					data-aos="fade-right"
					className="mx-auto h-auto w-[450px] rounded-md"
				/>

				<div className="w-full">
					<h1
						className="mb-0 py-10 text-center text-4xl font-semibold md:text-start lg:mb-10 lg:py-0"
						data-aos="zoom-in">
						Frequently Asked Qustions
					</h1>
					<Accordion
						type="single"
						collapsible
						className="space-y-4 rounded-md border-b-3"
						data-aos="fade-left">
						{qna.map((q: qnaprops) => (
							<AccordionItem
								key={q.id}
								value={`item-${q.id}`}
								className="rounded-md border-3 p-4">
								<AccordionTrigger className="font-medium">
									{q.question}
								</AccordionTrigger>

								<AccordionContent>
									<span
										className="[&_a]:text-blue-500 [&_a:hover]:underline"
										dangerouslySetInnerHTML={{
											__html: q.answer,
										}}
									/>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</>
	);
};

export default FaqSec;
