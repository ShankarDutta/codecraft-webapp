"use client";

import { ClientEditorProps } from "@/lib/types";
import { autocompletion } from "@codemirror/autocomplete";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import { useTheme } from "next-themes";

const CodeEditorClient = ({ language, value, onChange }: ClientEditorProps) => {
	const { theme } = useTheme();

	const getExtensions = (language: ClientEditorProps["language"]) => {
		if (language === "xml") {
			return [html(), autocompletion()];
		} else if (language === "css") {
			return [css(), autocompletion()];
		} else if (language === "javascript") {
			return [javascript(), autocompletion()];
		} else {
			return [];
		}
	};

	return (
		<CodeMirror
			value={value}
			theme={theme === "light" ? "light" : "dark"}
			extensions={getExtensions(language)}
			onChange={(value) => onChange(value)}
			className="rounded"
		/>
	);
};

export default CodeEditorClient;
