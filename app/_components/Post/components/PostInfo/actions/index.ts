"use server"

import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

import prisma from "@/_lib/client"

export const deletePost = async (postId: number) => {
	const { userId } = auth()

	if (!userId) {
		throw new Error("User is not authenticated!")
	}

	try {
		await prisma.post.delete({
			where: {
				id: postId,
				userId,
			},
		})
		revalidatePath("/")
	} catch (err) {
		console.log(err)
	}
}
