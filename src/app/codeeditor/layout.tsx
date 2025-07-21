// export default function cLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return <section>{children}</section>
// }

import { RootLayoutProps } from "@/lib/types";

const CodeEditorlayout = ({ children }: RootLayoutProps) => {
	return <section>{children}</section>;
};

export default CodeEditorlayout;
