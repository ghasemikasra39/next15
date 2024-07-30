import Image from "next/image"
import Link from "next/link"

import faker from "@/_utils/fakerConfig"

import { UserMediaCardProps } from "./types"

export const UserMediaCard = async ({ user }: UserMediaCardProps) => {
	return (
		<div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
			{/* TOP */}
			<div className="flex items-center justify-between font-medium">
				<span className="text-gray-500">User Media</span>
				<Link className="text-xs text-blue-500" href="/">
					See all
				</Link>
			</div>
			{/* BOTTOM */}
			<div className="flex flex-wrap justify-between gap-4">
				{Array.from({ length: 20 }).map((_, index) => (
					<div key={index} className="relative h-24 w-1/5">
						<Image
							fill
							alt=""
							className="rounded-md object-cover"
							src={faker.image.urlPicsumPhotos()}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
