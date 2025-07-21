import { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export type qnaprops = {
	id: number;
	question: string;
	answer: string;
};

export type previewprops = {
	html: string;
	css: string;
	js: string;
};
