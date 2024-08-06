"use server"

import { auth } from "@clerk/nextjs/server"

import prisma from "@/_lib/client"

import { UserInfoCardHelper } from "./types"

export const userInfoCardHelper: UserInfoCardHelper = async (user) => {
	const createdAtDate = new Date(user.createdAt)

	const formattedDate = createdAtDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})

	let isUserBlocked = false
	let isFollowing = false
	let isFollowingSent = false

	const { userId: loggedInUserId } = auth()

	if (loggedInUserId) {
		const blockRes = await prisma.block.findFirst({
			where: {
				blockerId: loggedInUserId,
				blockedId: user.id,
			},
		})
		isUserBlocked = !!blockRes

		const followRes = await prisma.follower.findFirst({
			where: {
				followerId: loggedInUserId,
				followingId: user.id,
			},
		})
		isFollowing = !!followRes

		const followReqRes = await prisma.followRequest.findFirst({
			where: {
				senderId: loggedInUserId,
				receiverId: user.id,
			},
		})
		isFollowingSent = !!followReqRes
	}
	return {
		isUserBlocked,
		isFollowing,
		isFollowingSent,
		loggedInUserId,
		formattedDate,
	}
}
