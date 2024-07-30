import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"

import faker from "@/_utils/fakerConfig"

import { getUserById } from "./utils"

export const ProfileCard = async () => {
	const { userId } = auth()

	if (!userId) {
		return null
	}

	const user = await getUserById(userId)

	if (!user) {
		return null
	}

	return (
		<div className="flex flex-col gap-6 rounded-lg bg-white p-4 text-sm shadow-md">
			<div className="relative h-20">
				<Image
					fill
					alt=""
					className="rounded-md object-cover"
					src={user.cover || "/noCover.png"}
				/>
				<Image
					alt=""
					className="absolute -bottom-6 left-0 right-0 z-10 m-auto h-12 w-12 rounded-full object-cover ring-1 ring-white"
					height={48}
					src={user.avatar || "/noAvatar.png"}
					width={48}
				/>
			</div>
			<div className="flex h-20 flex-col items-center gap-2">
				<span className="font-semibold">
					{user.name && user.surname
						? `${user.name} ${user.surname}`
						: user.username}
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
						{user._count.followers} Followers
					</span>
				</div>
				<Link href={`/profile/${user.username}`}>
					<button className="rounded-md bg-blue-500 p-2 text-xs text-white">
						My Profile
					</button>
				</Link>
			</div>
		</div>
	)
}
