import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/layout/header";

// Font
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "TO BE ADDED | ProductPartner",
	description: "TO BE ADDED.",
	creator: "ProductPartner",
	metadataBase: new URL("https://www.productpartner.io"),
	openGraph: {
		title: "TO BE ADDED | ProductPartner",
		description: "TO BE ADDED.",
		url: "https://www.productpartner.io",
		siteName: "ProductPartner",
		images: [
			{
				url: "/favicons/og.png",
				width: 1200,
				height: 630,
			},
		],
		locale: "en_GB",
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={inter.className}>
				<Header />
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
