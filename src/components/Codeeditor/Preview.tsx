"use client";
import { previewprops } from "@/lib/types";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Preview = ({ html, css, js }: previewprops) => {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = resolvedTheme === "dark";

	const codeFormat = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body {
          background: ${isDark ? "#030712" : "white"};
        }
        ${css}
      </style>
    </head>
    <body>
      ${html}



      <script>
        ${js.replace(/<\/script>/g, "<\\/script>")}
      </script>
    </body>
    </html>
  `;

	return (
		<iframe
			key={resolvedTheme}
			title="Live Preview"
			srcDoc={codeFormat}
			sandbox="allow-scripts"
			className="h-[270] w-full"
		/>
	);
};

export default Preview;
