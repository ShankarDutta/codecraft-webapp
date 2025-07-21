import { previewprops } from "@/lib/types";

const Preview = ({ html, css, js }: previewprops) => {
	const Codeformat = `
    <html >
    <head>
    // applying css 
    <style> ${css}</style>
    </head>
    <body>
    // applying html
     ${html}

     // applying js
     <script>
     ${js.replace(/<\/script>/g, "<\\/script>")}
     </script>
    </body>
    </html>
`;

	return (
		<>
			<iframe
				srcDoc={Codeformat}
				sandbox="allow-scripts"
				className="h-full w-full"></iframe>
		</>
	);
};

export default Preview;
