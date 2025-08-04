"use client";
import { cssAtom, htmlAtom, jsAtom } from "@/lib/codeatom";
import { useAtom } from "jotai";
import { Eye } from "lucide-react";
import { FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shadcnui/tabs";
import DesktopEditor from "./DesktopEditor";
import MobileEditor from "./MobileEditor";
import Preview from "./Preview";

const TopElements = () => {
	const [html, setHtml] = useAtom(htmlAtom);
	const [css, setCss] = useAtom(cssAtom);
	const [js, setJs] = useAtom(jsAtom);

	return (
		<section className="mx-auto px-6">
			{/* === Desktop view === */}
			<div className="hidden justify-between gap-4 lg:flex">
				<DesktopEditor
					language="xml"
					value={html}
					onChange={setHtml}
				/>
				<DesktopEditor
					language="css"
					value={css}
					onChange={setCss}
				/>
				<DesktopEditor
					language="javascript"
					value={js}
					onChange={setJs}
				/>
			</div>

			{/* === Mobile view === */}
			<Tabs
				className="block w-full lg:hidden"
				defaultValue="xml">
				<TabsList className="font-primary flex w-full justify-around gap-4">
					<TabsTrigger value="xml">
						<FaHtml5
							size={20}
							color="red"
						/>
						HTML
					</TabsTrigger>
					<TabsTrigger value="css">
						<FaCss3Alt
							size={20}
							color="blue"
						/>
						CSS
					</TabsTrigger>
					<TabsTrigger value="javascript">
						<FaJsSquare
							size={20}
							color="gold"
						/>
						JS
					</TabsTrigger>
				</TabsList>

				<TabsContent value="xml">
					<MobileEditor
						language="xml"
						value={html}
						onChange={setHtml}
					/>
				</TabsContent>
				<TabsContent value="css">
					<MobileEditor
						language="css"
						value={css}
						onChange={setCss}
					/>
				</TabsContent>
				<TabsContent value="javascript">
					<MobileEditor
						language="javascript"
						value={js}
						onChange={setJs}
					/>
				</TabsContent>
			</Tabs>

			{/* === Preview label === */}
			<div className="my-4 flex h-12 w-full items-center gap-2 rounded-md border-2 text-xl text-green-500">
				<Eye className="ml-4" />
				Preview
			</div>

			{/* === Live preview === */}
			<Preview
				html={html}
				css={css}
				js={js}
			/>
		</section>
	);
};

export default TopElements;
