import { Prisma } from "@prisma/client"

export type RightMenuProps = {
	user: Prisma.UserGetPayload<{
		include: {
			_count: {
				select: {
					followers: true
					followings: true
					posts: true
				}
			}
		}
	}>
}
