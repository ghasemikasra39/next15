"use client"

import { UserInfoCardInteractionProps } from "./types"

export const UserInfoCardInteraction = ({
	isFollowing,
	isFollowingSent,
	isUserBlocked,
	loggedInUserId,
	userId,
}: UserInfoCardInteractionProps) => {
	return (
		<>
			<form>
				<button className="w-full rounded-md bg-blue-500 p-2 text-sm text-white">
					{isFollowing
						? "Following"
						: isFollowingSent
							? "Friends request sent"
							: "Follow"}
				</button>
			</form>
			<form className="self-end">
				<button>
					<span className="cursor-pointer text-xs text-red-400">
						{isUserBlocked ? "Unblock User" : "Block User"}
					</span>
				</button>
			</form>
		</>
	)
}
