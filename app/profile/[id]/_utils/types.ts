import { Prisma } from "@prisma/client"

export type GetUserByUsername = (
	username: string,
) => Promise<Prisma.UserGetPayload<{
	include: {
		_count: {
			select: {
				followers: true
				followings: true
				posts: true
			}
		}
	}
}> | null>

export type IsBlocked = (
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
	}>,
) => Promise<boolean>
