"use server"

import { auth } from "@clerk/nextjs/server"

import prisma from "@/_lib/client"

export const addComment = async (postId: number, desc: string) => {
	const { userId } = auth()

	if (!userId) {
		throw new Error("User is not authenticated!")
	}

	try {
		const createdComment = await prisma.comment.create({
			data: {
				desc,
				userId,
				postId,
			},
			include: {
				user: true,
			},
		})

		return createdComment
	} catch (err) {
		console.log(err)
		throw new Error("Something went wrong!")
	}
}
