export default function Header() {
	return (
		<>
			{/* Desktop Header */}
			<header className="fixed w-full block lg:hidden bg-white border-b-1 z-50 p-4">
				{/* Logo */}
				<div className="flex items-center space-x-2">
					<a
						href="/"
						className="flex items-center space-x-2"
						title="ProductPartner"
					>
						<img
							src="/img/global/logo_mark.png"
							alt="ProductPartner Mark"
							className="h-8"
						/>
						<div className="text-xl font-bold text-zinc-800">
							ProductPartner
						</div>
					</a>
				</div>
			</header>
			<header className="fixed top-0 left-0 w-full backdrop-blur-md z-50 hidden lg:block">
				{/* Semi-transparent padded area above the menu */}
				<div className="h-5 bg-transparent"></div>

				{/* Main menu content with solid white background and shadow */}
				<div className="bg-white shadow-menu mx-auto max-w-7xl rounded-xl">
					<nav className="flex items-center justify-between px-8 py-5">
						{/* Logo */}
						<div className="flex items-center space-x-2">
							<a
								href="/"
								className="flex items-center space-x-2"
								title="ProductPartner"
							>
								<img
									src="/img/global/logo_mark.png"
									alt="ProductPartner Mark"
									className="h-8"
								/>
								<div className="text-xl font-bold text-zinc-800">
									ProductPartner
								</div>
							</a>
						</div>
						{/* Navigation links */}
						<ul className="flex font-semibold text-center">
							<li className="w-20 mx-4">
								<a
									href="#services"
									className="text-gray-700 hover:text-gray-900 hover:underline"
								>
									Services
								</a>
							</li>
							<li className="w-20 mx-4">
								<a
									href="#work"
									className="text-gray-700 hover:text-gray-900 hover:underline"
								>
									Work
								</a>
							</li>
							<li className="w-20 mx-4">
								<a
									href="#"
									className="text-gray-700 hover:text-gray-900 hover:underline"
								>
									About
								</a>
							</li>
							<li className="w-20 mx-4">
								<a
									href="#contact"
									className="text-gray-700 hover:text-gray-900 hover:underline"
								>
									Contact
								</a>
							</li>
						</ul>
						{/* CTAs */}
						<div className="flex items-center space-x-8">
							<button
								data-cal-namespace="intro-call"
								data-cal-link="productpartner/intro-call"
								data-cal-config='{"layout":"month_view"}'
								className="bg-zinc-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold transition-colors duration-300"
							>
								Book a Call
							</button>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
}
