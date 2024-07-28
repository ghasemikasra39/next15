import Image from "next/image"
import Link from "next/link"

import faker from "@/_utils/fakerConfig"

export const ProfileCard = async () => {
	return (
		<div className="flex flex-col gap-6 rounded-lg bg-white p-4 text-sm shadow-md">
			<div className="relative h-20">
				<Image
					fill
					alt=""
					className="rounded-md object-cover"
					src={faker.image.urlPicsumPhotos() || "/noCover.png"}
				/>
				<Image
					alt=""
					className="absolute -bottom-6 left-0 right-0 z-10 m-auto h-12 w-12 rounded-full object-cover ring-1 ring-white"
					height={48}
					src={faker.image.urlPicsumPhotos() || "/noAvatar.png"}
					width={48}
				/>
			</div>
			<div className="flex h-20 flex-col items-center gap-2">
				<span className="font-semibold">
					{faker.internet.userName()}
				</span>
				<div className="flex items-center gap-4">
					<div className="flex">
						<Image
							alt=""
							className="h-3 w-3 rounded-full object-cover"
							height={12}
							src={faker.image.urlPicsumPhotos()}
							width={12}
						/>
						<Image
							alt=""
							className="h-3 w-3 rounded-full object-cover"
							height={12}
							src={faker.image.urlPicsumPhotos()}
							width={12}
						/>
						<Image
							alt=""
							className="h-3 w-3 rounded-full object-cover"
							height={12}
							src={faker.image.urlPicsumPhotos()}
							width={12}
						/>
					</div>
					<span className="text-xs text-gray-500">
						{faker.number.int({ max: 20000 })} Followers
					</span>
				</div>
				<Link href={`/profile/${faker.internet.userName()}`}>
					<button className="rounded-md bg-blue-500 p-2 text-xs text-white">
						My Profile
					</button>
				</Link>
			</div>
		</div>
	)
}
