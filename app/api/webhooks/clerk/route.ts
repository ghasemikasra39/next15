import { WebhookEvent } from "@clerk/nextjs/server"
import { Prisma } from "@prisma/client"
import { headers } from "next/headers"
import { Webhook } from "svix"

import prisma from "@/_lib/client"

export async function POST(req: Request) {
	const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

	if (!WEBHOOK_SECRET) {
		throw new Error(
			"Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
		)
	}

	// Get the headers
	const headerPayload = headers()
	const svix_id = headerPayload.get("svix-id")
	const svix_timestamp = headerPayload.get("svix-timestamp")
	const svix_signature = headerPayload.get("svix-signature")

	// If there are no headers, error out
	if (!svix_id || !svix_timestamp || !svix_signature) {
		return new Response("Error occured -- no svix headers", {
			status: 400,
		})
	}

	// Get the body
	const payload = await req.json()
	const body = JSON.stringify(payload)

	// Create a new Svix instance with your secret.
	const wh = new Webhook(WEBHOOK_SECRET)

	let evt: WebhookEvent

	// Verify the payload with the headers
	try {
		evt = wh.verify(body, {
			"svix-id": svix_id,
			"svix-timestamp": svix_timestamp,
			"svix-signature": svix_signature,
		}) as WebhookEvent
	} catch (err) {
		console.error("Error verifying webhook:", err)
		return new Response("Error occured", {
			status: 400,
		})
	}

	const { username, image_url } = JSON.parse(body).data

	if (evt.type === "user.created") {
		try {
			const newUser: Prisma.UserCreateInput = {
				id: evt.data.id,
				username,
				avatar: image_url || "/noAvatar.png",
				cover: "/noCover.png",
			}

			await prisma.user.create({
				data: newUser,
			})
			return new Response("User has been created", { status: 200 })
		} catch (err) {
			return new Response("Failed to create the new user", {
				status: 500,
			})
		}
	}

	if (evt.type === "user.updated") {
		try {
			const updatePayload: Prisma.UserUpdateInput = {
				username,
				avatar: image_url || "/noAvatar.png",
			}
			await prisma.user.update({
				where: {
					id: evt.data.id,
				},
				data: updatePayload,
			})
			return new Response("User has been updated", { status: 200 })
		} catch (err) {
			return new Response("Failed to update the new user", {
				status: 500,
			})
		}
	}

	return new Response("webhook received", { status: 200 })
}
