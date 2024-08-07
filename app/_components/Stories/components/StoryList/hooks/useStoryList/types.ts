import { UserResource } from "@clerk/types"
import { Story, User } from "@prisma/client"
import { Dispatch } from "react"

export type StoryWithUser = Story & {
	user: User
}

export type UseStoryList = (props: {
	stories: StoryWithUser[]
	userId: string
}) => {
	add: () => Promise<void>
	img: any
	optimisticStories: StoryWithUser[]
	setImg: Dispatch<any>
	user: UserResource | null | undefined
}
