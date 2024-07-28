import Image from "next/image"
import React from "react"

import faker from "@/_utils/fakerConfig"

export const Stories = () => {
	return (
		<div className="scrollbar-hide overflow-scroll rounded-lg bg-white p-4 text-xs shadow-md">
			<div className="flex w-max gap-8">
				{Array.from({ length: 50 }).map((_, index) => (
					<div
						key={index}
						className="flex cursor-pointer flex-col items-center gap-2"
					>
						<Image
							alt="image"
							className="h-20 w-20 rounded-full ring-2"
							height={80}
							src={faker.image.urlPicsumPhotos()}
							width={80}
						/>
						<span className="font-medium">
							{faker.person.firstName()}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}
