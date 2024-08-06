import React from "react"

import { Post } from "@/_components/index"

import { getPostsFromFollowings } from "./utils"

export const Feed = async ({ username }: { username?: string }) => {
	const { posts } = await getPostsFromFollowings({ username })
	return (
		<div className="flex flex-col gap-12 rounded-lg bg-white p-4 shadow-md">
			{posts.length
				? posts.map((post) => <Post key={post.id} post={post} />)
				: "No posts found!"}
		</div>
	)
}
