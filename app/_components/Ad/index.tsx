import Image from "next/image"

import faker from "@/_utils/fakerConfig"

export const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
	return (
		<div className="rounded-lg bg-white p-4 text-sm shadow-md">
			{/* TOP */}
			<div className="flex items-center justify-between font-medium text-gray-500">
				<span>Sponsored Ads</span>
				<Image alt="" height={16} src="/more.png" width={16} />
			</div>
			{/* BOTTOM */}
			<div
				className={`mt-4 flex flex-col ${size === "sm" ? "gap-2" : "gap-4"}`}
			>
				<div
					className={`relative w-full ${
						size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
					}`}
				>
					<Image
						fill
						alt=""
						className="rounded-lg object-cover"
						src={faker.image.urlPicsumPhotos()}
					/>
				</div>
				<div className="flex items-center gap-4">
					<Image
						alt=""
						className="h-6 w-6 rounded-full object-cover"
						height={24}
						src={faker.image.urlPicsumPhotos()}
						width={24}
					/>
					<span className="font-medium text-blue-500">
						{faker.lorem.sentence()}
					</span>
				</div>
				<p className={size === "sm" ? "text-xs" : "text-sm"}>
					{size === "sm"
						? faker.lorem.sentence()
						: size === "md"
							? faker.lorem.sentences()
							: faker.lorem.paragraph()}
				</p>
				<button className="rounded-lg bg-gray-200 p-2 text-xs text-gray-500">
					Learn more
				</button>
			</div>
		</div>
	)
}
