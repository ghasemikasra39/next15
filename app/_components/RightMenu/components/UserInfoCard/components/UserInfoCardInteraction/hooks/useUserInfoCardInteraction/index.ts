import { useOptimistic, useState } from "react"

import { switchBlock, switchFollow } from "../../actions"
import { UserState, UseUserInfoCardInteraction } from "./types"

export const useUserInfoCardInteraction: UseUserInfoCardInteraction = ({
	userId,
	isUserBlocked,
	isFollowing,
	isFollowingSent,
}) => {
	const [userState, setUserState] = useState<UserState>({
		following: isFollowing,
		blocked: isUserBlocked,
		followingRequestSent: isFollowingSent,
	})

	const follow = async () => {
		switchOptimisticState("follow")
		try {
			await switchFollow(userId)
			setUserState((prev) => ({
				...prev,
				following: prev.following && false,
				followingRequestSent:
					!prev.following && !prev.followingRequestSent,
			}))
		} catch (err) {}
	}

	const block = async () => {
		switchOptimisticState("block")
		try {
			await switchBlock(userId)
			setUserState((prev) => ({
				...prev,
				blocked: !prev.blocked,
			}))
		} catch (err) {}
	}

	const [optimisticState, switchOptimisticState] = useOptimistic(
		userState,
		(state, value: "follow" | "block") =>
			value === "follow"
				? {
						...state,
						following: state.following && false,
						followingRequestSent:
							!state.following && !state.followingRequestSent,
					}
				: { ...state, blocked: !state.blocked },
	)

	return { follow, block, optimisticState }
}
