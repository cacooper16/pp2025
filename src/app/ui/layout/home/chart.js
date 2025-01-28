"use client";

import { useEffect, useRef, useState } from "react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	XAxis,
} from "recharts";

const data = [
	{ name: "", value: 0 },
	{ name: "Inception", value: 5 },
	{ name: "", value: 10 },
	{ name: "Strategy", value: 30 },
	{ name: "", value: 35 },
	{ name: "Design", value: 50 },
	{ name: "", value: 55 },
	{ name: "Development", value: 70 },
	{ name: "", value: 75 },
	{ name: "Growth", value: 80 },
	{ name: "", value: 100 },
];

export default function CustomAreaChart() {
	const chartRef = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.8 }
		);

		if (chartRef.current) {
			observer.observe(chartRef.current);
		}

		return () => {
			if (chartRef.current) {
				observer.unobserve(chartRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={chartRef}
			className="col-span-1 md:col-span-2 border rounded-t-3xl rounded-b-lg h-[440px] shadow-sm bg-white overflow-hidden py-8"
		>
			<div className="relative">
				<h3 className="absolute left-8 top-8">
					Handling the entire product life cycle...
				</h3>
			</div>
			{inView && (
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={data}
						margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
						isAnimationActive={true} // Ensure animation is active
						animationBegin={500} // Start animation after 500ms delay
						animationDuration={3500} // Set animation duration to 1500ms
						animationEasing="ease-out" // Set easing function
					>
						<defs>
							<linearGradient
								id="colorBlue"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="10%"
									stopColor="#1D4ED8"
									stopOpacity={1}
								/>
								<stop
									offset="99%"
									stopColor="#1D4ED8"
									stopOpacity={0.1}
								/>
							</linearGradient>
						</defs>
						<CartesianGrid
							strokeDasharray="5 5"
							strokeOpacity={0.3}
							vertical={false}
							horizontal={true}
						/>
						<XAxis
							dataKey="name"
							tick={{ fontSize: 14, fontWeight: 500 }}
							tickLine={false}
							axisLine={false}
							dy={5}
						/>
						<Area
							type="natural"
							dataKey="value"
							stroke="#1D4ED8"
							strokeWidth={3}
							fill="url(#colorBlue)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			)}
		</div>
	);
}
