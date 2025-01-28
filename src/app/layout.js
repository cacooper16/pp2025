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
		title: "TO BE ADDED | ProductPartner",
		description:
			"End-to-end product solutions: strategy to design, development and growth | ProductPartner",
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
		<html lang="en" className="scroll-smooth light">
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
