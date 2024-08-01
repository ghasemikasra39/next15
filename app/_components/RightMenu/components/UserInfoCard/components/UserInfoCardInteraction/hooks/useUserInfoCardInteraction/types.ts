import { UserInfoCardInteractionProps } from "../../types"

export type UserState = {
	blocked: boolean
	following: boolean
	followingRequestSent: boolean
}

export type UseUserInfoCardInteraction = (
	props: UserInfoCardInteractionProps,
) => {
	block: () => Promise<void>
	follow: () => Promise<void>
	optimisticState: UserState
}
