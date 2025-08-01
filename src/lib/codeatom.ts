// /lib/codeatom.ts
"use client";
import { atom } from "jotai";

const getFromLocalStorage = (key: string, fallback: string) => {
	if (typeof window !== "undefined") {
		return localStorage.getItem(key) || fallback;
	}
	return fallback;
};

export const htmlAtom = atom<string>(
	getFromLocalStorage("html", "<h1>Hello</h1>"),
);
export const cssAtom = atom<string>(
	getFromLocalStorage("css", "h1 { color: red; text-align: center }"),
);
export const jsAtom = atom<string>(
	getFromLocalStorage("js", 'console.log("Hello from Anu")'),
);
