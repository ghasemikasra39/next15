"use server"

import { auth } from "@clerk/nextjs/server"
import { z } from "zod"

import prisma from "@/_lib/client"

export const updateProfile = async (
	prevState: { error: boolean; success: boolean },
	payload: { cover: string; formData: FormData },
) => {
	const { formData, cover } = payload
	const fields = Object.fromEntries(formData)

	const filteredFields = Object.fromEntries(
		Object.entries(fields).filter(([_, value]) => value !== ""),
	)

	const Profile = z.object({
		cover: z.string().optional(),
		name: z.string().max(60).optional(),
		surname: z.string().max(60).optional(),
		description: z.string().max(255).optional(),
		city: z.string().max(60).optional(),
		school: z.string().max(60).optional(),
		work: z.string().max(60).optional(),
		website: z.string().max(60).optional(),
	})

	const validatedFields = Profile.safeParse({ ...filteredFields, cover })

	if (!validatedFields.success) {
		console.log(validatedFields.error.flatten().fieldErrors)
		return { success: false, error: true }
	}

	const { userId } = auth()

	if (!userId) {
		return { success: false, error: true }
	}

	try {
		await prisma.user.update({
			where: {
				id: userId,
			},
			data: validatedFields.data,
		})
		return { success: true, error: false }
	} catch (err) {
		console.log(err)
		return { success: false, error: true }
	}
}
