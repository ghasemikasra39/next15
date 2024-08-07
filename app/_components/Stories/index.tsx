import { auth } from "@clerk/nextjs/server"
import React from "react"

import prisma from "@/_lib/client"

import { StoryList } from "./components/StoryList"

export const Stories = async () => {
	const { userId: currentUserId } = auth()

	if (!currentUserId) {
		return null
	}

	const stories = await prisma.story.findMany({
		where: {
			expiresAt: {
				gt: new Date(),
			},
			OR: [
				{
					user: {
						followers: {
							some: {
								followerId: currentUserId,
							},
						},
					},
				},
				{
					userId: currentUserId,
				},
			],
		},
		include: {
			user: true,
		},
	})

	return (
		<div className="scrollbar-hide overflow-scroll rounded-lg bg-white p-4 text-xs shadow-md">
			<div className="flex w-max gap-8">
				<StoryList stories={stories} userId={currentUserId} />
			</div>
		</div>
	)
}
