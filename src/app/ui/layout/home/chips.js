import { Chip } from "@heroui/react";

export function StrategyChip() {
	return (
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
	);
}

export function DesignChip() {
	return (
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
	);
}

export function DevelopmentChip() {
	return (
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
			<span className="mr-1">💿</span> Development
		</Chip>
	);
}

export function GrowthChip() {
	return (
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
	);
}
