import { Chip } from "@heroui/react";

export function StrategyChip() {
	return (
		<a href="#strategy" title="Product Strategy">
			<Chip
				variant="light"
				size="md"
				radius="sm"
				classNames={{
					base: "bg-zinc-700 py-4 pointer-events-none",
					content:
						"drop-shadow shadow-black text-white font-semibold px-2",
				}}
			>
				<span className="mr-1">💡</span> Strategy
			</Chip>
		</a>
	);
}

export function DesignChip() {
	return (
		<a href="#design" title="Product Design">
			<Chip
				variant="light"
				size="md"
				radius="sm"
				classNames={{
					base: "bg-zinc-700 py-4 pointer-events-none",
					content:
						"drop-shadow shadow-black text-white font-semibold px-2",
				}}
			>
				<span className="mr-1">🎨</span> Design
			</Chip>
		</a>
	);
}

export function DevelopmentChip() {
	return (
		<a href="#development" title="Product Design">
			<Chip
				variant="light"
				size="md"
				radius="sm"
				classNames={{
					base: "bg-zinc-700 py-4 pointer-events-none",
					content:
						"drop-shadow shadow-black text-white font-semibold px-2",
				}}
			>
				<span className="mr-1">🤖</span> Dev
			</Chip>
		</a>
	);
}

export function GrowthChip() {
	return (
		<a href="#growth" title="Product Design">
			<Chip
				variant="light"
				size="md"
				radius="sm"
				classNames={{
					base: "bg-zinc-700 py-4 pointer-events-none",
					content:
						"drop-shadow shadow-black text-white font-semibold px-2",
				}}
			>
				<span className="mr-1">📈</span> Growth
			</Chip>
		</a>
	);
}
