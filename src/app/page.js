import { Tooltip } from "@heroui/tooltip";

export default function Home() {
	return (
		<>
			<main>
				<div className="bg-gradient-to-b from-white to-gray-100">
					<div className="container">
						<div className="mx-auto text-center py-32">
							<h1>
								Crafting digital experiences <br />
								<span className="text-blue-700 animate-slideUp">
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
								ProductPartner is chosen by top companies across the
								globe.
							</p>
							<img
								src="/img/global/touches/blue-swish.svg"
								className="mx-auto mt-4"
							/>
						</div>
					</div>
				</div>
				<div className="technology">
					<div className="container">
						<div className="mx-auto text-center py-32">
							<div className="mb-16 max-w-2xl mx-auto">
								<h2>End-to-end product development services</h2>
							</div>
							<div className="mb-16 rounded-xl w-3/4 mx-auto"></div>
							<div>
								<p className="text-lg">
									Using top-tier technology to drive businesses
									forward.
								</p>
								<img
									src="/img/global/touches/orange-swish.svg"
									className="mx-auto mt-4"
								/>
							</div>
							<div className="flex flex-row gap-12 items-center flex-wrap p-4 w-full justify-center relative py-8">
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
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
