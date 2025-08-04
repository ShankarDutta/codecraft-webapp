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
	getFromLocalStorage(
		"html",
		`<div>
<h1>Hello Every One </h1> 
<p>
Craft your frontend code 
with ease. Write, preview, 
and build beautiful 
web pages in real time.
<p/>
<button onclick="getStarted()">
Get started
</button>
</div>`,
	),
);
export const cssAtom = atom<string>(
	getFromLocalStorage(
		"css",
		`body {
display:flex;
justify-content: center;
align-items:center;
height:100dvh;
overflow: hidden;
}
h1 { color: #FF8C00;
text-align: center 
}
p { color: #FF1493; 
font-size:16px;
text-align: center 
}
button {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #4f46e5;
  color: white;
  border: none;
  cursor: pointer;
}`,
	),
);
export const jsAtom = atom<string>(
	getFromLocalStorage(
		"js",
		`function getStarted() {
  alert ("Thanks for using Code Craft!");
}`,
	),
);
