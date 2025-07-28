"use client";

import { Eye } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shadcnui/tabs";
import DesktopEditor from "./DesktopEditor";
import MobileEditor from "./MobileEditor";
import Preview from "./Preview";

const TopElements = () => {
	const [html, setHtml] = useState("<h1>Hello</h1>");
	const [css, setCss] = useState("h1 { color: red; }");
	const [js, setJs] = useState('console.log("Hello from JS")');

	return (
		<section className="mx-auto px-6">
			{/* === Desktop view === */}
			<div className="hidden justify-between gap-4 md:flex">
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

			{/* === Mobile view with working tabs === */}
			<Tabs
				defaultValue="xml"
				className="block w-full md:hidden">
				<TabsList className="mb-2 flex w-full justify-around">
					<TabsTrigger value="xml">HTML</TabsTrigger>
					<TabsTrigger value="css">CSS</TabsTrigger>
					<TabsTrigger value="javascript">JS</TabsTrigger>
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

			{/* === Preview button === */}
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
