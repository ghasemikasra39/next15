"use server"

import { auth } from "@clerk/nextjs/server"

import prisma from "@/_lib/client"

export const acceptFollowRequest = async (userId: string) => {
	const { userId: currentUserId } = auth()

	if (!currentUserId) {
		throw new Error("User is not Authenticated!!")
	}

	try {
		const existingFollowRequest = await prisma.followRequest.findFirst({
			where: {
				senderId: userId,
				receiverId: currentUserId,
			},
		})

		if (existingFollowRequest) {
			await prisma.followRequest.delete({
				where: {
					id: existingFollowRequest.id,
				},
			})

			await prisma.follower.create({
				data: {
					followerId: userId,
					followingId: currentUserId,
				},
			})
		}
	} catch (err) {
		console.log(err)
		throw new Error("Something went wrong!")
	}
}

export const declineFollowRequest = async (userId: string) => {
	const { userId: currentUserId } = auth()

	if (!currentUserId) {
		throw new Error("User is not Authenticated!!")
	}

	try {
		const existingFollowRequest = await prisma.followRequest.findFirst({
			where: {
				senderId: userId,
				receiverId: currentUserId,
			},
		})

		if (existingFollowRequest) {
			await prisma.followRequest.delete({
				where: {
					id: existingFollowRequest.id,
				},
			})
		}
	} catch (err) {
		console.log(err)
		throw new Error("Something went wrong!")
	}
}
