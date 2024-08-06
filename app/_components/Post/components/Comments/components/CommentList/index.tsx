"use client"

import { useUser } from "@clerk/nextjs"
import { Comment, User } from "@prisma/client"
import Image from "next/image"
import { useOptimistic, useState } from "react"

import { addComment } from "./actions"

type CommentWithUser = Comment & { user: User }

export const CommentList = ({
	comments,
	postId,
}: {
	comments: CommentWithUser[]
	postId: number
}) => {
	const { user } = useUser()
	const [commentState, setCommentState] = useState(comments)
	const [desc, setDesc] = useState("")

	const [optimisticComments, addOptimisticComment] = useOptimistic(
		commentState,
		(currentState: CommentWithUser[], optimisticValue: CommentWithUser) => {
			return [optimisticValue, ...currentState]
		},
	)

	const add = async () => {
		if (!user || !desc) {
			return
		}

		addOptimisticComment({
			id: Math.random(),
			desc,
			createdAt: new Date(Date.now()),
			updatedAt: new Date(Date.now()),
			userId: user.id,
			postId: postId,
			user: {
				id: user.id,
				username: "Sending Please Wait...",
				avatar: user.imageUrl || "/noAvatar.png",
				cover: "",
				description: "",
				name: "",
				surname: "",
				city: "",
				work: "",
				school: "",
				website: "",
				createdAt: new Date(Date.now()),
			},
		})
		try {
			const createdComment = await addComment(postId, desc)
			setCommentState((prev) => [createdComment, ...prev])
		} catch (err) {}
	}

	return (
		<>
			{user && (
				<div className="flex items-center gap-4">
					<Image
						alt=""
						className="h-8 w-8 rounded-full"
						height={32}
						src={user.imageUrl || "noAvatar.png"}
						width={32}
					/>
					<form
						action={add}
						className="flex w-full flex-1 items-center justify-between rounded-xl bg-slate-100 px-6 py-2 text-sm"
					>
						<input
							className="flex-1 bg-transparent outline-none"
							placeholder="Write a comment..."
							type="text"
							onChange={(e) => setDesc(e.target.value)}
						/>
						<Image
							alt=""
							className="cursor-pointer"
							height={16}
							src="/emoji.png"
							width={16}
						/>
					</form>
				</div>
			)}
			<div className="">
				{/* COMMENT */}
				{optimisticComments.map((comment) => (
					<div
						key={comment.id}
						className="mt-6 flex justify-between gap-4"
					>
						{/* AVATAR */}
						<Image
							alt=""
							className="h-10 w-10 rounded-full"
							height={40}
							src={comment.user.avatar || "noAvatar.png"}
							width={40}
						/>
						{/* DESC */}
						<div className="flex flex-1 flex-col gap-2">
							<span className="font-medium">
								{comment.user.name && comment.user.surname
									? comment.user.name +
										" " +
										comment.user.surname
									: comment.user.username}
							</span>
							<p>{comment.desc}</p>
							<div className="mt-2 flex items-center gap-8 text-xs text-gray-500">
								<div className="flex items-center gap-4">
									<Image
										alt=""
										className="h-4 w-4 cursor-pointer"
										height={12}
										src="/like.png"
										width={12}
									/>
									<span className="text-gray-300">|</span>
									<span className="text-gray-500">
										0 Likes
									</span>
								</div>
								<div className="">Reply</div>
							</div>
						</div>
						{/* ICON */}
						<Image
							alt=""
							className="h-4 w-4 cursor-pointer"
							height={16}
							src="/more.png"
							width={16}
						></Image>
					</div>
				))}
			</div>
		</>
	)
}
