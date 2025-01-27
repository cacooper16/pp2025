export default function Header() {
	return (
		<header className="fixed top-0 left-0 w-full backdrop-blur-md z-50">
			{/* Semi-transparent padded area above the menu */}
			<div className="h-6 bg-transparent"></div>

			{/* Main menu content with solid white background and shadow */}
			<div className="bg-white shadow-menu mx-auto max-w-7xl rounded-xl">
				<nav className="flex items-center justify-between px-8 py-4">
					{/* Logo */}
					<div className="flex items-center space-x-2">
						<a href="" className="flex items-center space-x-2">
							<img
								src="/img/global/logo_mark.png"
								alt="ProductPartner"
								className="h-8"
							/>
							<div className="text-xl font-bold text-zinc-800">
								ProductPartner
							</div>
						</a>
					</div>
					{/* Navigation links */}
					<ul className="hidden md:flex space-x-10 absolute left-1/2 transform -translate-x-1/2 font-semibold text-center">
						<li className="w-20">
							<a
								href="#"
								className="text-gray-700 hover:text-gray-900 hover:underline"
							>
								Services
							</a>
						</li>
						<li className="w-20">
							<a
								href="#"
								className="text-gray-700 hover:text-gray-900 hover:underline"
							>
								Work
							</a>
						</li>
						<li className="w-20">
							<a
								href="#"
								className="text-gray-700 hover:text-gray-900 hover:underline"
							>
								About
							</a>
						</li>
					</ul>
					{/* CTAs */}
					<div className="flex items-center space-x-8">
						<button className="text-gray-700 hover:text-gray-900 hover:underline font-semibold ">
							Get in Touch
						</button>
						<a
							href="https://cal.com/productpartner/intro-call"
							target="_blank"
							rel="noreferrer noopener"
						>
							<button className="bg-zinc-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold transition-colors duration-300">
								Book a Call
							</button>
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
}
