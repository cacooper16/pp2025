import { Tooltip } from "@heroui/tooltip";
import CustomAreaChart from "./ui/layout/home/chart";
import {
	DesignChip,
	GrowthChip,
	StrategyChip,
} from "./ui/layout/home/chips";

export default function Home() {
	return (
		<>
			<main>
				<div className="bg-gradient-to-b from-white to-gray-100">
					<div className="container">
						<div className="mx-auto text-center py-32">
							<h1>
								Crafting digital experiences <br />
								<span className="text-transparent bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text animate-slideUp">
									that actually deliver results
								</span>
							</h1>
							<p className="h1-sub">
								Providing end-to-end product development solutions:
								<br />
								from strategy to design, development and growth.
							</p>
							<a
								href="https://cal.com/productpartner/intro-call"
								target="_blank"
								rel="noreferrer noopener"
							>
								<button className="bg-zinc-800 text-white px-8 py-4 rounded-lg hover:bg-blue-700 duration-300 transition-colors font-semibold mb-16 shadow-2xl shadow-zinc-800">
									Book a Call <span className="pl-2">&rsaquo;</span>
								</button>
							</a>
						</div>
						<div className="text-center pb-32">
							<div className="flex -space-x-4 justify-center mb-4">
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
								<div className="relative">
									<Tooltip
										content={
											<div className="text-center p-2">
												<div className="font-semibold">
													Aziz Rahman
												</div>
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
								<div className="relative">
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
								<div className="relative">
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
								Chosen by leaders at top companies across the globe.
							</p>
							<img
								src="/img/global/touches/blue-swish.svg"
								className="mx-auto mt-4"
							/>
						</div>
					</div>
				</div>
				<div id="services" className="bg-white">
					<div className="container">
						<div className="mx-auto py-32">
							<div className="max-w-xl mx-auto">
								<h3 className="text-center">Our Specialism</h3>
								<h2 className="text-center">
									End-to-end digital product solutions
								</h2>
							</div>
							<div className="mt-32 mb-16 grid grid-cols-1 gap-4 md:grid-cols-2 md:max-w-5xl mx-auto">
								{/* Block A - Chart */}
								<CustomAreaChart />

								{/* Block B - Strategy */}
								<div className="col-span-1 border h-[440px] rounded-lg shadow-sm overflow-hidden cursor-pointer group transform transition-transform duration-300 hover:scale-105 bg-white">
									<div className="h-[240px] w-full">
										<img
											src="/img/services/example.png"
											className="w-full h-full object-cover"
											alt="Service Example"
										/>
									</div>
									<div className="px-8 py-4">
										<h3 className="text-sm mb-2">
											It always starts with a plan
										</h3>
										<h4 className="font-medium text-lg mb-2">
											Strategy
										</h4>
										<p className="text-sm text-zinc-500 mb-4">
											Conducting market research, defining the product
											vision, setting clear objectives, and crafting a
											roadmap for success.
										</p>
										<p className="text-sm group-hover:text-blue-700 duration-300 transition-colors">
											Learn more <span>&rsaquo;</span>
										</p>
									</div>
								</div>

								{/* Block C - Design */}
								<div className="col-span-1 border h-[440px] rounded-lg shadow-sm overflow-hidden  cursor-pointer group transform transition-transform duration-300 hover:scale-105 bg-white">
									<div className="h-[240px] w-full">
										<img
											src="/img/services/example.png"
											className="w-full h-full object-cover"
											alt="Service Example"
										/>
									</div>
									<div className="px-8 py-4">
										<h3 className="text-sm mb-2">
											Ideas begin to take shape
										</h3>
										<h4 className="font-medium text-lg mb-2">
											Design
										</h4>
										<p className="text-sm text-zinc-500 mb-4">
											Transforming ideas into intuitive user
											experiences through thoughtful prototyping,
											testing and visual design.
										</p>
										<p className="text-sm group-hover:text-blue-700 duration-300 transition-colors">
											Learn more <span>&rsaquo;</span>
										</p>
									</div>
								</div>

								{/* Block D - Development */}
								<div className="col-span-1 border h-[440px] rounded-lg md:rounded-t-lg md:rounded-bl-3xl md:rounded-br-lg shadow-sm overflow-hidden  cursor-pointer group transform transition-transform duration-300 hover:scale-105 bg-white">
									<div className="h-[240px] w-full">
										<img
											src="/img/services/example.png"
											className="w-full h-full object-cover"
											alt="Service Example"
										/>
									</div>
									<div className="px-8 py-4">
										<h3 className="text-sm mb-2">
											Bringing it all to life
										</h3>
										<h4 className="font-medium text-lg mb-2">
											Development
										</h4>
										<p className="text-sm text-zinc-500 mb-4">
											Building high-quality digital products in-house
											or through collaboration with an external team.
										</p>
										<p className="text-sm group-hover:text-blue-700 duration-300 transition-colors">
											Learn more <span>&rsaquo;</span>
										</p>
									</div>
								</div>

								{/* Block E - Growth */}
								<div className="col-span-1 border h-[440px] rounded-b-3xl rounded-t-lg md:rounded-t-lg md:rounded-br-3xl md:rounded-bl-lg shadow-sm overflow-hidden  cursor-pointer group transform transition-transform duration-300 hover:scale-105 bg-white">
									<div className="h-[240px] w-full">
										<img
											src="/img/services/example.png"
											className="w-full h-full object-cover"
											alt="Service Example"
										/>
									</div>
									<div className="px-8 py-4">
										<h3 className="text-sm mb-2">
											The work never stops &#40;sorry&#41;
										</h3>
										<h4 className="font-medium text-lg mb-2">
											Growth
										</h4>
										<p className="text-sm text-zinc-500 mb-4">
											Analysing performance, refining functionality,
											and supporting marketing and sales strategies
											for sustained success.
										</p>
										<p className="text-sm group-hover:text-blue-700 duration-300 transition-colors">
											Learn more <span>&rsaquo;</span>
										</p>
									</div>
								</div>
							</div>

							<div className="flex flex-row gap-8 items-center flex-wrap w-full justify-center relative py-4">
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
									Harnessing top-tier technology to drive businesses
									forward.
								</p>
								<img
									src="/img/global/touches/blue-swish.svg"
									className="mx-auto mt-4"
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					id="work"
					className="from-gray-50 to-white bg-gradient-to-b"
				>
					<div className="container">
						<div className="mx-auto py-32">
							<div className="max-w-xl mx-auto">
								<h3 className="text-center">Our Work</h3>
								<h2 className="text-center">
									A snapshot of successful partnerships
								</h2>
							</div>
							<div className="mt-32 mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:max-w-7xl mx-auto">
								<div className="col-span-1 border bg-white rounded-lg shadow-sm overflow-hidden">
									<div className="p-8">
										<h4 className="font-medium text-2xl mb-4">
											airfocus
										</h4>
										<div className="flex gap-4 mb-4">
											<StrategyChip />
										</div>
										<p className="text-sm text-zinc-500 mb-2">
											Here is a short description about the company
											and what we did for them. Here is a short
											description about the company and what we did
											for them.
										</p>
									</div>
									<div className="mx-8 border border-b-0 bg-gray-50 rounded-t-lg h-[320px] overflow-hidden">
										<div className="relative h-full w-full bg-white">
											<div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
										</div>
									</div>
								</div>
								<div className="col-span-1 border bg-white rounded-lg shadow-sm overflow-hidden">
									<div className="p-8">
										<h4 className="font-medium text-2xl mb-4">
											eDesk
										</h4>
										<div className="flex gap-4 mb-4">
											<StrategyChip /> <DesignChip /> <GrowthChip />
										</div>
										<p className="text-sm text-zinc-500 mb-2">
											Here is a short description about the company
											and what we did for them. Here is a short
											description about the company and what we did
											for them.
										</p>
									</div>
									<div className="mx-8 border border-b-0 bg-gray-50 rounded-t-lg h-[320px] overflow-hidden">
										<div className="relative h-full w-full bg-white">
											<div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-row gap-8 items-center flex-wrap w-full justify-center relative py-4">
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
							</div>
							<div>
								<p className="text-lg text-center">
									Supporting startups to achieve globally recognised
									accreditations.
								</p>
								<img
									src="/img/global/touches/blue-swish.svg"
									className="mx-auto mt-4"
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
