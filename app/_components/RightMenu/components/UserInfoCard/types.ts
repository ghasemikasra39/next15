import { Prisma } from "@prisma/client"

export type UserInfoCardProps = {
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
