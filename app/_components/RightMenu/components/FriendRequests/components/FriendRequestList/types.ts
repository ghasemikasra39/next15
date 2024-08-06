import { FollowRequest, User } from "@prisma/client"

export type RequestWithUser = FollowRequest & {
	sender: User
}
