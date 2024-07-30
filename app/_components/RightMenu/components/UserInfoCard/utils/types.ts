import { UserInfoCardProps } from "../types"

export type UserInfoCardHelper = (user: UserInfoCardProps["user"]) => Promise<{
	formattedDate: string
	isFollowing: boolean
	isFollowingSent: boolean
	isUserBlocked: boolean
	loggedInUserId: string | null
}>
