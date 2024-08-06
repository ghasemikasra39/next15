"use client"

import Image from "next/image"
import { useState } from "react"

import { deletePost } from "./actions"

export const PostInfo = ({ postId }: { postId: number }) => {
	const [open, setOpen] = useState(false)

	const deletePostWithId = deletePost.bind(null, postId)
	return (
		<div className="relative">
			<Image
				alt=""
				className="cursor-pointer"
				height={16}
				src="/more.png"
				width={16}
				onClick={() => setOpen((prev) => !prev)}
			/>
			{open && (
				<div className="absolute right-0 top-4 z-30 flex w-32 flex-col gap-2 rounded-lg bg-white p-4 text-xs shadow-lg">
					<span className="cursor-pointer">View</span>
					<span className="cursor-pointer">Re-post</span>
					<form action={deletePostWithId}>
						<button className="text-red-500">Delete</button>
					</form>
				</div>
			)}
		</div>
	)
}
