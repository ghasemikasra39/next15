import Image from "next/image"
import { notFound } from "next/navigation"

import { Feed, LeftMenu, RightMenu } from "@/_components/index"

import { getUserByUsername, isBlocked } from "./_utils"

const ProfilePage = async ({ params }: { params: { username: string } }) => {
	const username = params.username
	const user = await getUserByUsername(username)

	if (!user) {
		return notFound()
	}

	const isUserBlocked = await isBlocked(user)

	if (isUserBlocked) {
		return notFound()
	}

	return (
		<div className="flex gap-6 pt-6">
			<div className="hidden w-[20%] xl:block">
				<LeftMenu type="profile" />
			</div>
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className="flex flex-col gap-6">
					<div className="flex flex-col items-center justify-center">
						<div className="relative h-64 w-full">
							<Image
								fill
								alt=""
								className="rounded-md object-cover"
								src={user.cover || "/noCover.png"}
							/>
							<Image
								alt=""
								className="absolute -bottom-16 left-0 right-0 m-auto h-32 w-32 rounded-full object-cover ring-4 ring-white"
								height={128}
								src={user.avatar || "/noAvatar.png"}
								width={128}
							/>
						</div>
						<h1 className="mb-4 mt-20 text-2xl font-medium">
							{user.name && user.surname
								? `${user.name} ${user.surname}`
								: user.username}
						</h1>
						<div className="mb-4 flex items-center justify-center gap-12">
							<div className="flex flex-col items-center">
								<span className="font-medium">
									{user._count.posts}
								</span>
								<span className="text-sm">Posts</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">
									{user._count.followers}
								</span>
								<span className="text-sm">Followers</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">
									{user._count.followings}
								</span>
								<span className="text-sm">Following</span>
							</div>
						</div>
					</div>
					<Feed username={user.username} />
				</div>
			</div>
			<div className="hidden w-[30%] lg:block">
				<RightMenu user={user} />
			</div>
		</div>
	)
}

export default ProfilePage
