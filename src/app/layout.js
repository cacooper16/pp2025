import "bootstrap-icons/font/bootstrap-icons.css";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./ui/layout/header";

// Font
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title:
		"End-to-end product solutions: strategy to design, development and growth | ProductPartner",
	description: "TO BE ADDED.",
	creator: "ProductPartner",
	metadataBase: new URL("https://www.productpartner.io"),
	openGraph: {
		title:
			"End-to-end product solutions: strategy to design, development and growth | ProductPartner",
		description: "TO BE ADDED...",
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
	const CrispWithNoSSR = dynamic(() => import("./lib/crisp"));
	return (
		<html lang="en" className="scroll-smooth light">
			<CrispWithNoSSR />
			<body className={inter.className}>
				<Providers>
					<Header />
					{children}
					{/* <Footer /> */}
				</Providers>
			</body>
		</html>
	);
}
