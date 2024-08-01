"use client"

import { useUserInfoCardInteraction } from "./hooks/useUserInfoCardInteraction"
import { UserInfoCardInteractionProps } from "./types"

export const UserInfoCardInteraction = ({
	userId,
	isUserBlocked,
	isFollowing,
	isFollowingSent,
}: UserInfoCardInteractionProps) => {
	const { follow, block, optimisticState } = useUserInfoCardInteraction({
		userId,
		isUserBlocked,
		isFollowing,
		isFollowingSent,
	})

	return (
		<>
			<form action={follow}>
				<button className="w-full rounded-md bg-blue-500 p-2 text-sm text-white">
					{optimisticState.following
						? "Following"
						: optimisticState.followingRequestSent
							? "Friend Request Sent"
							: "Follow"}
				</button>
			</form>
			<form action={block} className="self-end">
				<button>
					<span className="cursor-pointer text-xs text-red-400">
						{optimisticState.blocked
							? "Unblock User"
							: "Block User"}
					</span>
				</button>
			</form>
		</>
	)
}
