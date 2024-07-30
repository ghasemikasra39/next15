import { auth } from "@clerk/nextjs/server"

import prisma from "@/_lib/client"

import { GetUserByUsername, IsBlocked } from "./types"

export const isBlocked: IsBlocked = async (user) => {
	const { userId: loggedInUserId } = auth()

	if (loggedInUserId) {
		const res = await prisma.block.findFirst({
			where: {
				blockerId: user.id,
				blockedId: loggedInUserId,
			},
		})
		return !!res
	}
	return true
}

export const getUserByUsername: GetUserByUsername = async (username) => {
	const user = await prisma.user.findFirst({
		where: {
			username,
		},
		include: {
			_count: {
				select: {
					followers: true,
					followings: true,
					posts: true,
				},
			},
		},
	})
	return user
}
