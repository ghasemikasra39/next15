import Image from "next/image"
import Link from "next/link"

import { userInfoCardHelper } from "@/_components/RightMenu/components/UserInfoCard/utils"

import { UpdateUser } from "./components/UpdateUser"
import { UserInfoCardInteraction } from "./components/UserInfoCardInteraction"
import { UserInfoCardProps } from "./types"

export const UserInfoCard = async ({ user }: UserInfoCardProps) => {
	const {
		isUserBlocked,
		isFollowing,
		isFollowingSent,
		loggedInUserId,
		formattedDate,
	} = await userInfoCardHelper(user)

	return (
		<div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
			{/* TOP */}
			<div className="flex items-center justify-between font-medium">
				<span className="text-gray-500">User Information</span>
				{loggedInUserId === user.id ? (
					<UpdateUser user={user} />
				) : (
					<Link className="text-xs text-blue-500" href="/">
						See all
					</Link>
				)}
			</div>
			{/* BOTTOM */}
			<div className="flex flex-col gap-4 text-gray-500">
				<div className="flex items-center gap-2">
					<span className="text-xl text-black">
						{" "}
						{user.name && user.surname
							? user.name + " " + user.surname
							: user.username}
					</span>
					<span className="text-sm">@{user.username}</span>
				</div>
				{user.description && <p>{user.description}</p>}
				{user.city && (
					<div className="flex items-center gap-2">
						<Image alt="" height={16} src="/map.png" width={16} />
						<span>
							Living in <b>{user.city}</b>
						</span>
					</div>
				)}
				{user.school && (
					<div className="flex items-center gap-2">
						<Image
							alt=""
							height={16}
							src="/school.png"
							width={16}
						/>
						<span>
							Went to <b>{user.school}</b>
						</span>
					</div>
				)}
				{user.work && (
					<div className="flex items-center gap-2">
						<Image alt="" height={16} src="/work.png" width={16} />
						<span>
							Works at <b>{user.work}</b>
						</span>
					</div>
				)}
				<div className="flex items-center justify-between">
					{user.website && (
						<div className="flex items-center gap-1">
							<Image
								alt=""
								height={16}
								src="/link.png"
								width={16}
							/>
							<Link
								className="font-medium text-blue-500"
								href={user.website}
							>
								{user.website}
							</Link>
						</div>
					)}
					<div className="flex items-center gap-1">
						<Image alt="" height={16} src="/date.png" width={16} />
						<span>Joined {formattedDate}</span>
					</div>
				</div>
				{loggedInUserId && loggedInUserId !== user.id && (
					<UserInfoCardInteraction
						isFollowing={isFollowing}
						isFollowingSent={isFollowingSent}
						isUserBlocked={isUserBlocked}
						userId={user.id}
					/>
				)}
			</div>
		</div>
	)
}
