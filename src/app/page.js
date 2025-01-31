"use client";

import { Tooltip } from "@heroui/tooltip";
import React from "react";
import CustomAreaChart from "./ui/layout/home/chart";
import {
	DesignChip,
	DevelopmentChip,
	GrowthChip,
	StrategyChip,
} from "./ui/layout/home/chips";

import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Textarea,
	useDisclosure,
} from "@heroui/react";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { GrowthCard } from "./lib/growthcard";

export default function Home() {
	// Show/hide `Work` section
	const [hide, setHide] = React.useState();

	// Modal control
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	// Email form submission

	// Cal.com Embed
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "intro-call" });
			cal("ui", {
				cssVarsPerTheme: { light: { "cal-brand": "#27272A" } },
				hideEventTypeDetails: false,
				layout: "month_view",
			});
		})();
	}, []);

	return (
		<main>
			<div className="bg-gradient-to-b from-white to-gray-100">
				<div className="container">
					<div className="mx-auto lg:text-center pt-16 pb-8 lg:py-32">
						<h1>
							Crafting digital experiences{" "}
							<br className="hidden lg:block" />
							<span className="text-transparent bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text animate-slideUp">
								that actually deliver results
							</span>
						</h1>
						<p className="h1-sub">
							Providing end-to-end product development solutions:{" "}
							<br className="hidden lg:block" />
							from strategy to design, development and growth.
						</p>
						<button
							data-cal-namespace="intro-call"
							data-cal-link="productpartner/intro-call"
							data-cal-config='{"layout":"month_view"}'
							className="bg-zinc-800 text-white px-8 py-4 rounded-lg hover:bg-blue-700 duration-300 transition-colors font-semibold mb-8 lg:mb-16 shadow-2xl shadow-zinc-800"
						>
							Book a Call <span className="pl-2">&rsaquo;</span>
						</button>
					</div>
					<div className="text-center pb-16 lg:pb-32">
						<div className="flex -space-x-4 justify-center mb-4">
							<div className="relative">
								<Tooltip
									content={
										<div className="text-center p-2">
											<div className="font-semibold">Tom Maples</div>
											<div>Founder at RevCat 🇬🇧</div>
										</div>
									}
									showArrow={true}
									closeDelay={100}
								>
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/tom_maples.webp"
										alt="Tom Maples"
										width={64}
										height={64}
									/>
								</Tooltip>
							</div>
							<div className="relative">
								<Tooltip
									content={
										<div className="text-center p-2">
											<div className="font-semibold">
												Dr. Enrique Rios
											</div>
											<div>Founder at Clínica Bona 🇪🇸</div>
										</div>
									}
									showArrow={true}
									closeDelay={100}
								>
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/enrique_rios.webp"
										alt="Dr. Enrique Rios"
										width={64}
										height={64}
									/>
								</Tooltip>
							</div>
							<div className="relative">
								<Tooltip
									content={
										<div className="text-center p-2">
											<div className="font-semibold">
												Evelyn Petro
											</div>
											<div>Founder at Café Bardin 🇪🇸</div>
										</div>
									}
									showArrow={true}
									closeDelay={100}
								>
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/malte_scholz.webp"
										alt="Evelyn Petro"
										width={64}
										height={64}
									/>
								</Tooltip>
							</div>
							<div className="relative">
								<Tooltip
									content={
										<div className="text-center p-2">
											<div className="font-semibold">
												Malte Scholz
											</div>
											<div>Founder at airfocus 🇩🇪</div>
										</div>
									}
									showArrow={true}
									closeDelay={100}
								>
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/malte_scholz.webp"
										alt="Malte Scholz"
										width={64}
										height={64}
									/>
								</Tooltip>
							</div>
							<div className="relative">
								<Tooltip
									content={
										<div className="text-center p-2">
											<div className="font-semibold">
												Gareth Cummings
											</div>
											<div>CTO at eDesk 🇮🇪</div>
										</div>
									}
									showArrow={true}
									closeDelay={100}
								>
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/gareth_cummings.webp"
										alt="Gareth Cummings"
										width={64}
										height={64}
									/>
								</Tooltip>
							</div>
							<div className="hidden lg:block relative">
								<Tooltip
									content={
										<div className="text-center p-2">
											<div className="font-semibold">Aziz Rahman</div>
											<div>CTO at Okadoc 🇦🇪</div>
										</div>
									}
									showArrow={true}
									closeDelay={100}
								>
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/aziz_rahman.webp"
										alt="Aziz Rahman"
										width={64}
										height={64}
									/>
								</Tooltip>
							</div>
							<div className="hidden lg:block relative">
								<Tooltip
									content={
										<div className="text-center p-2">
											<div className="font-semibold">
												Jacinta Ashworth
											</div>
											<div>Founder at Ashworth Research 🇬🇧</div>
										</div>
									}
									showArrow={true}
									closeDelay={100}
								>
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/jacinta_ashworth.webp"
										alt="Jacinta Ashworth"
										width={64}
										height={64}
									/>
								</Tooltip>
							</div>
							<div className="hidden lg:block relative">
								<Tooltip
									content={
										<div className="text-center p-2">
											<div className="font-semibold">
												Jules Pancholi
											</div>
											<div>Founder at Nitro Ventures 🇬🇧</div>
										</div>
									}
									showArrow={true}
									closeDelay={100}
								>
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/jules_pancholi.webp"
										alt="Jules Pancholi"
										width={64}
										height={64}
									/>
								</Tooltip>
							</div>
							<div className="hidden lg:block relative">
								<Tooltip
									content={
										<div className="text-center p-2">
											<div className="font-semibold">Ryan Head</div>
											<div>Founder at Headway Coaching 🇬🇧</div>
										</div>
									}
									showArrow={true}
									closeDelay={100}
								>
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/ryan_head.webp"
										alt="Ryan Head"
										width={64}
										height={64}
									/>
								</Tooltip>
							</div>
						</div>
						<p className="text-lg">
							Chosen by founders &amp; leaders{" "}
							<span className="hidden lg:block">
								across the globe.
							</span>
						</p>
						<img
							src="/img/global/touches/blue-swish.svg"
							className="mx-auto mt-4"
							alt=""
							role="presentation"
						/>
					</div>
				</div>
			</div>
			<div id="services" className="bg-white">
				<div className="container">
					<div className="mx-auto py-16 lg:py-32">
						<div className="max-w-xl mx-auto">
							<h3 className="text-center">Our Specialism</h3>
							<h2 className="text-center">
								End-to-end digital product solutions
							</h2>
						</div>
						<div className="my-16 md:my-32 grid grid-cols-1 gap-4 md:grid-cols-2 md:max-w-5xl mx-auto">
							{/* Block A - Chart */}
							<CustomAreaChart />

							{/* Block B - Strategy */}
							<div
								id="strategy"
								className="col-span-1 border rounded-t-3xl rounded-b-lg md:rounded-lg shadow-sm overflow-hidden bg-white"
							>
								<div className="h-[240px] w-full">
									<img
										src="/img/services/strategy.png"
										alt="Product Strategy with ProductPartner"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="px-4 lg:px-8">
									<h3 className="text-sm mt-12 mb-2">
										It starts with a plan
									</h3>
									<h4 className="font-medium text-lg mb-2">
										Strategy
									</h4>
									<p className="text-sm text-zinc-500 mb-8">
										Conducting market research, defining the product
										vision, setting clear objectives, and crafting a
										roadmap for success.
									</p>
								</div>
							</div>

							{/* Block C - Design */}
							<div
								id="design"
								className="col-span-1 border rounded-lg shadow-sm overflow-hidden bg-white"
							>
								<div className="h-[246px] w-full">
									<img
										src="/img/services/design.png"
										alt="Product Design with ProductPartner"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="px-4 lg:px-8">
									<h3 className="text-sm mt-12 mb-2">
										Ideas begin to take shape
									</h3>
									<h4 className="font-medium text-lg mb-2">Design</h4>
									<p className="text-sm text-zinc-500 mb-8">
										Transforming ideas into intuitive user experiences
										through thoughtful prototyping, testing and visual
										design.
									</p>
								</div>
							</div>

							{/* Block D - Development */}
							<div
								id="development"
								className="col-span-1 border rounded-lg shadow-sm overflow-hidden bg-white"
							>
								<div className="h-[260px] w-full">
									<img
										src="/img/services/develop.png"
										alt="Product Development with ProductPartner"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="px-4 lg:px-8">
									<h3 className="text-sm mb-2 mt-12">
										Bringing it all to life
									</h3>
									<h4 className="font-medium text-lg mb-2">
										Development
									</h4>
									<p className="text-sm text-zinc-500 mb-8">
										Building high-quality digital products in-house or
										through collaboration with an external team.
									</p>
								</div>
							</div>

							{/* Block E - Growth */}
							<div
								id="growth"
								className="col-span-1 border rounded-t-lg rounded-b-3xl lg:rounded-lg shadow-sm overflow-hidden bg-white"
							>
								<div className="h-[260px] w-full relative">
									<GrowthCard />
								</div>

								<div className="px-4 lg:px-8">
									<h3 className="text-sm mb-2 mt-12">
										The work never stops &#40;sorry&#41;
									</h3>
									<h4 className="font-medium text-lg mb-2">Growth</h4>
									<p className="text-sm text-zinc-500 mb-8">
										Analysing performance, refining functionality, and
										supporting marketing and sales strategies for
										sustained success.
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-row gap-8 items-center flex-wrap w-full justify-center relative pt-2 md:py-4">
							{/* Node.js Logo */}
							<img
								alt="Node.js"
								className="lg:aspect-1 lg:object-contain"
								src="/img/logos/node.webp"
								width="120"
								height="60"
								loading="lazy"
								decoding="async"
							/>

							{/* Next.js Logo */}
							<img
								alt="Next.js"
								className="lg:aspect-1 lg:object-contain"
								src="/img/logos/nextjs.svg"
								width="120"
								height="60"
								loading="lazy"
								decoding="async"
							/>

							{/* React Logo */}
							<img
								alt="React"
								className="lg:aspect-1 lg:object-contain"
								src="/img/logos/react.svg"
								width="120"
								height="60"
								loading="lazy"
								decoding="async"
							/>

							{/* TailwindCSS Logo */}
							<img
								alt="Tailwind CSS"
								className="lg:aspect-1 lg:object-contain"
								src="/img/logos/tailwind.webp"
								width="160"
								height="60"
								loading="lazy"
								decoding="async"
							/>

							{/* Strapi Logo */}
							<img
								alt="Strapi"
								className="lg:aspect-1 lg:object-contain"
								src="/img/logos/strapi.svg"
								width="120"
								height="60"
								loading="lazy"
								decoding="async"
							/>

							{/* Figma Logo */}
							<img
								alt="Figma"
								className="lg:aspect-1 lg:object-contain"
								src="/img/logos/figma.svg"
								width="80"
								height="60"
								loading="lazy"
								decoding="async"
							/>

							{/* Vercel Logo */}
							<img
								alt="Vercel"
								className="lg:aspect-1 lg:object-contain"
								src="/img/logos/vercel.webp"
								width="120"
								height="60"
								loading="lazy"
								decoding="async"
							/>

							{/* DigitalOcean Logo */}
							<img
								alt="DigitalOcean"
								className="lg:aspect-1 lg:object-contain"
								src="/img/logos/digitalocean.svg"
								width="120"
								height="60"
								loading="lazy"
								decoding="async"
							/>
						</div>
						<div>
							<p className="text-lg text-center">
								Harnessing top-tier technology{" "}
								<span className="hidden md:block">
									to drive businesses forward.
								</span>
							</p>
							<img
								src="/img/global/touches/blue-swish.svg"
								className="mx-auto mt-4"
								alt=""
								role="presentation"
							/>
						</div>
					</div>
				</div>
			</div>
			<div id="work" className="bg-gray-50">
				<div className="container">
					<div className="mx-auto pt-16 lg:pt-32">
						<div className="max-w-xl mx-auto">
							<h3 className="text-center">Our Work</h3>
							<h2 className="text-center mb-2">Success stories</h2>
							<p className="text-center">
								A curated selection of varied partnerships.{" "}
								<span className="md:block hidden">
									Get in touch to discover more.
								</span>
							</p>
						</div>
						<div
							className={`mt-16 lg:mt-32 mb-16 pb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 md:max-w-7xl mx-auto relative overflow-hidden ${
								hide ? "" : "max-h-[1200px]"
							}`}
						>
							<div className="col-span-1 border bg-white rounded-lg shadow-md overflow-hidden">
								<div className="py-8 px-8 md:px-12">
									<h4 className="font-medium text-2xl mb-4">
										Clínica Dental Bona
									</h4>
									<div className="flex gap-4 mb-4 flex-wrap">
										<StrategyChip /> <DesignChip />{" "}
										<DevelopmentChip /> <GrowthChip />
									</div>
									<p className="text-sm text-zinc-500 mb-4">
										Multilingual presence built on a modern content
										management system, boosting online visibility,
										user engagement and bookings.
									</p>
									<p className="text-sm hover:text-blue-700 duration-300 transition-colors mb-2">
										<a
											href="https://www.clinicadentalbona.com/en/dental-clinic-in-alicante/"
											target="_blank"
											rel="noreferrer noopener"
										>
											About Clínica Dental Bona <span>&rsaquo;</span>
										</a>
									</p>
								</div>
								<div className="mx-8 md:mx-12 border border-b-0 rounded-t-lg overflow-hidden relative">
									<div className="h-full w-full bg-gray-50 p-4 md:p-8 relative">
										<img
											src="/img/work/clinica-dental-bona.png"
											className="mx-auto relative z-10"
											alt="Our partnership with Clínica Dental Bona"
										/>
									</div>
									<div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e0e2e7_1.5px,transparent_1px)] [background-size:15px_15px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,#000_70%,transparent_100%)] z-0"></div>
								</div>
							</div>
							<div className="col-span-1 border bg-white rounded-lg shadow-md overflow-hidden">
								<div className="py-8 px-8 md:px-12">
									<h4 className="font-medium text-2xl mb-4">eDesk</h4>
									<div className="flex gap-4 mb-4 flex-wrap">
										<StrategyChip /> <DesignChip />{" "}
										<DevelopmentChip /> <GrowthChip />
									</div>
									<p className="text-sm text-zinc-500 mb-4">
										Restructured product management practices and
										revamped a B2B SaaS platform, enhancing support
										for 7,000+ ecommerce sellers.
									</p>
									<p className="text-sm hover:text-blue-700 duration-300 transition-colors mb-2">
										<a
											href="https://www.edesk.com/about-us/"
											target="_blank"
											rel="noreferrer noopener"
										>
											About eDesk <span>&rsaquo;</span>
										</a>
									</p>
								</div>
								<div className="mx-8 md:mx-12 border border-b-0 rounded-t-lg overflow-hidden relative">
									<div className="h-full w-full bg-gray-50 p-4 md:p-8 relative">
										<img
											src="/img/work/edesk.png"
											className="mx-auto relative z-10"
											alt="Our partnership with eDesk"
										/>
									</div>
									<div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e0e2e7_1.5px,transparent_1px)] [background-size:15px_15px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,#000_70%,transparent_100%)] z-0"></div>
								</div>
							</div>
							<div className="col-span-1 border bg-white rounded-lg shadow-md overflow-hidden">
								<div className="py-8 px-8 md:px-12">
									<h4 className="font-medium text-2xl mb-4">
										Okadoc
									</h4>
									<div className="flex gap-4 mb-4 flex-wrap">
										<StrategyChip /> <DesignChip />{" "}
										<DevelopmentChip /> <GrowthChip />
									</div>
									<p className="text-sm text-zinc-500 mb-4">
										Led and executed product strategy for a multisided
										platform (B2B, B2C, B2B2C), enhancing access to
										healthcare across multiple countries.
									</p>
									<p className="text-sm hover:text-blue-700 duration-300 transition-colors mb-2">
										<a
											href="https://www.okadoc.com/en-ae/about-okadoc"
											target="_blank"
											rel="noreferrer noopener"
										>
											About Okadoc <span>&rsaquo;</span>
										</a>
									</p>
								</div>
								<div className="mx-8 md:mx-12 border border-b-0 rounded-t-lg overflow-hidden relative">
									<div className="h-full w-full bg-gray-50 p-4 md:p-8 relative">
										<img
											src="/img/work/okadoc.png"
											className="mx-auto relative z-10"
											alt="Our partnership with Okadoc"
										/>
									</div>
									<div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e0e2e7_1.5px,transparent_1px)] [background-size:15px_15px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,#000_70%,transparent_100%)] z-0"></div>
								</div>
							</div>

							<div className="col-span-1 border bg-white rounded-lg shadow-md overflow-hidden">
								<div className="py-8 px-8 md:px-12">
									<h4 className="font-medium text-2xl mb-4">
										Ashworth Research
									</h4>
									<div className="flex gap-4 mb-4 flex-wrap">
										<DesignChip /> <DevelopmentChip />
									</div>
									<p className="text-sm text-zinc-500 mb-4">
										Designed and developed an engaging online presence
										for Ashworth Research, a leading market and social
										research consultancy for nonprofits.
									</p>
									<p className="text-sm hover:text-blue-700 duration-300 transition-colors mb-2">
										<a
											href="https://www.ashworthresearch.co.uk/about"
											target="_blank"
											rel="noreferrer noopener"
										>
											About Ashworth Research <span>&rsaquo;</span>
										</a>
									</p>
								</div>
								<div className="mx-8 md:mx-12 border border-b-0 rounded-t-lg overflow-hidden relative">
									<div className="h-full w-full bg-gray-50 p-4 md:p-8 relative">
										<img
											src="/img/work/ashworth-research.png"
											className="mx-auto relative z-10"
											alt="Our partnership with Ashworth Research"
										/>
									</div>
									<div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e0e2e7_1.5px,transparent_1px)] [background-size:15px_15px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,#000_70%,transparent_100%)] z-0"></div>
								</div>
							</div>
							<div className="col-span-1 border bg-white rounded-lg shadow-md overflow-hidden">
								<div className="py-8 px-8 md:px-12">
									<h4 className="font-medium text-2xl mb-4">
										airfocus
									</h4>
									<div className="flex gap-4 mb-4 flex-wrap">
										<StrategyChip />
									</div>
									<p className="text-sm text-zinc-500 mb-4">
										Provided strategic guidance and client advisory
										for airfocus, an AI-powered product management
										platform with over $10M funding.
									</p>
									<p className="text-sm hover:text-blue-700 duration-300 transition-colors mb-2">
										<a
											href="https://airfocus.com/about-us/"
											target="_blank"
											rel="noreferrer noopener"
										>
											About airfocus <span>&rsaquo;</span>
										</a>
									</p>
								</div>
								<div className="mx-8 md:mx-12 border border-b-0 rounded-t-lg overflow-hidden relative">
									<div className="h-full w-full bg-gray-50 p-4 md:p-8 relative">
										<img
											src="/img/work/airfocus.png"
											className="mx-auto relative z-10"
											alt="Our partnership with airfocus"
										/>
									</div>
									<div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e0e2e7_1.5px,transparent_1px)] [background-size:15px_15px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,#000_70%,transparent_100%)] z-0"></div>
								</div>
							</div>
							<div className="col-span-1 border bg-white rounded-lg shadow-md overflow-hidden">
								<div className="py-8 px-8 md:px-12">
									<h4 className="font-medium text-2xl mb-4">
										Café Bardin
									</h4>
									<div className="flex gap-4 mb-4 flex-wrap">
										<DesignChip /> <DevelopmentChip />
									</div>
									<p className="text-sm text-zinc-500 mb-4">
										Created a dynamic online presence for Café Bardin,
										a popular brunch spot in Alicante, to attract
										English-speaking customers and drive footfall.
									</p>
									<p className="text-sm hover:text-blue-700 duration-300 transition-colors mb-2">
										<a
											href="http://www.cafebardin.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											About Café Bardin <span>&rsaquo;</span>
										</a>
									</p>
								</div>
								<div className="mx-8 md:mx-12 border border-b-0 rounded-t-lg overflow-hidden relative">
									<div className="h-full w-full bg-gray-50 p-4 md:p-8 relative">
										<img
											src="/img/work/cafe-bardin.png"
											className="mx-auto relative z-10"
											alt="Our partnership with Café Bardin"
										/>
									</div>
									<div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e0e2e7_1.5px,transparent_1px)] [background-size:15px_15px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,#000_70%,transparent_100%)] z-0"></div>
								</div>
							</div>
							<div className="col-span-1 border bg-white rounded-lg shadow-md overflow-hidden">
								<div className="py-8 px-8 md:px-12">
									<h4 className="font-medium text-2xl mb-4">
										RevCat
									</h4>
									<div className="flex gap-4 mb-4 flex-wrap">
										<StrategyChip /> <DesignChip />
									</div>
									<p className="text-sm text-zinc-500 mb-4">
										Conducted a comprehensive product review,
										providing recommendations to address key
										challenges and improve overall user experience.
									</p>
									<p className="text-sm hover:text-blue-700 duration-300 transition-colors mb-2">
										<a
											href="https://www.revcat.io/"
											target="_blank"
											rel="noreferrer noopener"
										>
											About RevCat <span>&rsaquo;</span>
										</a>
									</p>
								</div>
								<div className="mx-8 md:mx-12 border border-b-0 rounded-t-lg overflow-hidden relative">
									<div className="h-full w-full bg-gray-50 p-4 md:p-8 relative">
										<img
											src="/img/work/revcat.png"
											className="mx-auto relative z-10"
											alt="Our partnership with RevCat"
										/>
									</div>
									<div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e0e2e7_1.5px,transparent_1px)] [background-size:15px_15px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,#000_70%,transparent_100%)] z-0"></div>
								</div>
							</div>
							<div className="col-span-1 border bg-white rounded-lg shadow-md overflow-hidden">
								<div className="py-8 px-8 md:px-12">
									<h4 className="font-medium text-2xl mb-4">
										Stealth Startup 👀
									</h4>
									<div className="flex gap-4 mb-4 flex-wrap">
										<StrategyChip /> <DesignChip />{" "}
										<DevelopmentChip />
									</div>
									<p className="text-sm text-zinc-500 mb-4">
										Collaborating with a pre-launch startup: refining
										their business model, designing the product and
										selecting development partners.
									</p>
									<p className="text-sm mb-2">
										Coming soon <span>🚀</span>
									</p>
								</div>
								<div className="mx-8 md:mx-12 border border-b-0 rounded-t-lg overflow-hidden relative">
									<div className="h-full w-full bg-gray-50 p-4 md:p-8 relative">
										<img
											src="/img/work/stealth.png"
											className="mx-auto relative z-10"
											alt="Our partnership with Stealth Startup"
										/>
									</div>
									<div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e0e2e7_1.5px,transparent_1px)] [background-size:15px_15px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,#000_70%,transparent_100%)] z-0"></div>
								</div>
							</div>
							<div
								className={`pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-gray-50 via-white/90 via-40% pb-8 pt-96 ${
									hide ? "hidden" : ""
								}`}
							>
								<button
									type="button"
									onClick={() => setHide(true)}
									className="bg-zinc-800 text-white px-8 py-4 rounded-lg hover:bg-blue-700 duration-300 transition-colors font-semibold mb-16 shadow-2xl shadow-zinc-800 pointer-events-auto z-50"
								>
									View More <span className="pl-2">▾</span>
								</button>
							</div>
						</div>
						<div className="flex flex-row gap-12 items-center flex-wrap w-full justify-center relative pt-4 pb-6">
							{/* Google Partner Logo */}
							<img
								alt="Google Partner"
								className="lg:aspect-1 lg:object-contain"
								src="/img/logos/google.svg"
								width="140"
								height="60"
								loading="lazy"
								decoding="async"
							/>

							{/* Amazon Logo */}
							<img
								alt="Amazon Marketplace Developer"
								className="lg:aspect-1 lg:object-contain"
								src="/img/logos/amazon.svg"
								width="140"
								height="60"
								loading="lazy"
								decoding="async"
							/>

							{/* ISO 27001 Logo */}
							<img
								alt="ISO 270001 Information Security Management"
								className="lg:aspect-1 lg:object-contain"
								src="/img/logos/iso27001.svg"
								width="140"
								height="40"
								loading="lazy"
								decoding="async"
							/>

							{/* Shopify Logo */}
							<img
								alt="Shopify Partner"
								className="lg:aspect-1 lg:object-contain"
								src="/img/logos/shopify.svg"
								width="140"
								height="60"
								loading="lazy"
								decoding="async"
							/>
						</div>
						<div className="relative pb-32">
							<p className="text-lg text-center">
								We have helped aspiring organisations earn globally
								recognised accreditations.
							</p>
							<img
								src="/img/global/touches/blue-swish.svg"
								className="mx-auto mt-4"
								alt=""
								role="presentation"
							/>
							<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex h-8 items-end overflow-hidden">
								<div className="flex -mb-px h-[2px] w-80 -scale-x-100 animate-pulse">
									<div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
									<div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="contact" className="border-t">
				<div className="max-w-xl mx-auto pt-16 lg:pt-32 pb-8 lg:pb-16 relative">
					<h3 className="text-center">Get in Touch</h3>
					<h2 className="text-center mb-2">Let&apos;s talk</h2>
					<p className="text-center">
						Free discovery calls with no obligation.
					</p>
				</div>
				<div className="mb-16 lg:mb-32 grid grid-cols-1 gap-4 md:grid-cols-2 md:max-w-2xl md:mx-auto mx-8">
					<button
						data-cal-namespace="intro-call"
						data-cal-link="productpartner/intro-call"
						data-cal-config='{"layout":"month_view"}'
						type="button"
						className="block transform transition-transform duration-300 md:hover:scale-105"
					>
						<div className="col-span-1 border hover:border-zinc-600 rounded-tl-3xl rounded-tr-3xl rounded-b-lg md:rounded-tl-3xl md:rounded-lg shadow-sm overflow-hidden cursor-pointer group bg-white p-8  text-left">
							<h4 className="font-medium text-lg mb-2">
								<i className="bi bi-calendar mr-1"></i> Book a Call
							</h4>
							<p className="text-sm text-zinc-500 mb-4">
								Arrange a quick intro call to discuss your project.
							</p>
							<p className="text-sm group-hover:text-blue-700 duration-300 transition-colors">
								Pick a time <span>&rsaquo;</span>
							</p>
						</div>
					</button>
					<button
						type="button"
						onClick={(e) => {
							e.preventDefault();
							onOpen();
						}}
						className="block transform transition-transform duration-300 md:hover:scale-105"
					>
						<div className="col-span-1 border hover:border-zinc-600 md:rounded-tr-3xl rounded-lg shadow-sm overflow-hidden cursor-pointer group transform transition-transform duration-300  bg-white p-8 text-left">
							<h4 className="font-medium text-lg mb-2">
								<i className="bi bi-envelope mr-1"></i> Email Us
							</h4>
							<p className="text-sm text-zinc-500 mb-4">
								Prefer to email? Drop us a message and we&apos;ll get
								back to you.
							</p>
							<p className="text-sm group-hover:text-blue-700 duration-300 transition-colors">
								Email us <span>&rsaquo;</span>
							</p>
						</div>
					</button>
					<button
						type="button"
						onClick={() => {
							window.$crisp.push(["do", "chat:open"]);
						}}
						className="block transform transition-transform duration-300 md:hover:scale-105"
					>
						<div className="col-span-1 border hover:border-zinc-600  md:rounded-bl-3xl rounded-lg shadow-sm overflow-hidden cursor-pointer group transform transition-transform duration-300  bg-white p-8 text-left">
							<h4 className="font-medium text-lg mb-2">
								<i className="bi bi-lightning mr-1"></i> Chat Now
							</h4>
							<p className="text-sm text-zinc-500 mb-4">
								Got a quick question about ProductPartner? Chat with
								us.
							</p>
							<p className="text-sm group-hover:text-blue-700 duration-300 transition-colors">
								Start chat <span>&rsaquo;</span>
							</p>
						</div>
					</button>
					<a
						href=""
						className="block transform transition-transform duration-300 hover:scale-105"
					>
						<div className="col-span-1 border hover:border-zinc-600 rounded-bl-3xl rounded-br-3xl rounded-t-lg md:rounded-br-3xl md:rounded-lg shadow-sm overflow-hidden cursor-pointer group transform transition-transform duration-300  bg-white p-8">
							<h4 className="font-medium text-lg mb-2">
								<i className="bi bi-whatsapp mr-1"></i> Send a
								WhatsApp
							</h4>
							<p className="text-sm text-zinc-500 mb-4">
								More convenient to use WhatsApp? Fire away.
							</p>
							<p className="text-sm group-hover:text-blue-700 duration-300 transition-colors">
								Send message <span>&rsaquo;</span>
							</p>
						</div>
					</a>
				</div>
				<Modal
					isOpen={isOpen}
					placement="center"
					onOpenChange={onOpenChange}
					backdrop="blur"
					size="lg"
					isDismissable={false}
					hideCloseButton={true}
				>
					<ModalContent className="p-2">
						{(onClose) => (
							<>
								<ModalHeader className="py-8 font-medium text-lg">
									<i className="bi bi-envelope mr-2"></i> Email Us
								</ModalHeader>
								<ModalBody className="gap-y-8">
									<Input
										label="Name"
										type="text"
										variant="bordered"
										radius="sm"
										autoFocus
										isRequired
									/>
									<Input
										label="Email"
										type="email"
										variant="bordered"
										radius="sm"
										isRequired
									/>
									<Textarea
										label="Message"
										type="password"
										variant="bordered"
										radius="sm"
										isRequired
									/>
								</ModalBody>
								<ModalFooter className="py-8">
									<Button
										color="danger"
										variant="light"
										onPress={onClose}
										className="rounded-lg"
									>
										Close
									</Button>
									<Button
										className="bg-zinc-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold transition-colors duration-300"
										onPress={onClose}
									>
										Send Message
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			</div>
		</main>
	);
}
