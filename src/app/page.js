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
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/malte_scholz.webp"
										alt="Malte Scholz"
										width={64}
										height={64}
									/>
								</div>
								<div className="relative">
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/gareth_cummings.webp"
										alt="Gareth Cummings"
										width={64}
										height={64}
									/>
								</div>
								<div className="relative">
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/aziz_rahman.webp"
										alt="Aziz Rahman"
										width={64}
										height={64}
									/>
								</div>
								<div className="relative">
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/jules_pancholi.webp"
										alt="Jules Pancholi"
										width={64}
										height={64}
									/>
								</div>
								<div className="relative">
									<img
										className="w-16 h-16 rounded-full border-2 border-white"
										src="/img/avatars/ryan_head.webp"
										alt="Ryan Head"
										width={64}
										height={64}
									/>
								</div>
							</div>
							<p className="text-lg">
								Trusted by founders and leaders all across the globe
							</p>
							<img
								src="/img/global/touches/blue-swish.svg"
								className="mx-auto mt-4"
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
