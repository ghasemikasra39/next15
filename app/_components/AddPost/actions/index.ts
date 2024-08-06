"use server"

import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { z } from "zod"

import prisma from "@/_lib/client"

export const addPost = async (formData: FormData, img: string) => {
	const desc = formData.get("desc") as string

	const Desc = z.string().min(1).max(255)

	const validatedDesc = Desc.safeParse(desc)

	if (!validatedDesc.success) {
		//TODO
		console.log("description is not valid")
		return
	}
	const { userId } = auth()

	if (!userId) {
		throw new Error("User is not authenticated!")
	}

	try {
		await prisma.post.create({
			data: {
				desc: validatedDesc.data,
				userId,
				img,
			},
		})

		revalidatePath("/")
	} catch (err) {
		console.log(err)
	}
}
