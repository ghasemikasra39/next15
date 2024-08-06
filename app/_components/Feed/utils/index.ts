import { auth } from "@clerk/nextjs/server"

import prisma from "@/_lib/client"

import { GetPostsFromFollowings } from "./types"

export const getPostsFromFollowings: GetPostsFromFollowings = async ({
	username,
}) => {
	const { userId } = auth()

	let posts: any[] = []

	if (username) {
		posts = await prisma.post.findMany({
			where: {
				user: {
					username: username,
				},
			},
			include: {
				user: true,
				likes: {
					select: {
						userId: true,
					},
				},
				_count: {
					select: {
						comments: true,
					},
				},
			},
			orderBy: {
				createdAt: "desc",
			},
		})
	}

	if (!username && userId) {
		const following = await prisma.follower.findMany({
			where: {
				followerId: userId,
			},
			select: {
				followingId: true,
			},
		})

		const followingIds = following.map((f) => f.followingId)
		const ids = [userId, ...followingIds]

		posts = await prisma.post.findMany({
			where: {
				userId: {
					in: ids,
				},
			},
			include: {
				user: true,
				likes: {
					select: {
						userId: true,
					},
				},
				_count: {
					select: {
						comments: true,
					},
				},
			},
			orderBy: {
				createdAt: "desc",
			},
		})
	}

	return { posts }
}
