"use client"

import { useAuth } from "@clerk/nextjs"
import Image from "next/image"
import { useOptimistic, useState } from "react"

import { switchLike } from "./actions"

export const PostInteraction = ({
	postId,
	likes,
	commentNumber,
}: {
	commentNumber: number
	likes: string[]
	postId: number
}) => {
	const { userId } = useAuth()
	const [likeState, setLikeState] = useState({
		likeCount: likes.length,
		isLiked: userId ? likes.includes(userId) : false,
	})

	const [optimisticLike, switchOptimisticLike] = useOptimistic(
		likeState,
		(currentState) => {
			return {
				likeCount: currentState.isLiked
					? currentState.likeCount - 1
					: currentState.likeCount + 1,
				isLiked: !currentState.isLiked,
			}
		},
	)

	const likeAction = async () => {
		switchOptimisticLike("")
		try {
			await switchLike(postId)
			setLikeState((state) => ({
				likeCount: state.isLiked
					? state.likeCount - 1
					: state.likeCount + 1,
				isLiked: !state.isLiked,
			}))
		} catch (err) {}
	}

	return (
		<div className="my-4 flex items-center justify-between text-sm">
			<div className="flex gap-8">
				<div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
					<form action={likeAction}>
						<button>
							<Image
								alt=""
								className="cursor-pointer"
								height={16}
								src={
									optimisticLike.isLiked
										? "/liked.png"
										: "/like.png"
								}
								width={16}
							/>
						</button>
					</form>
					<span className="text-gray-300">|</span>
					<span className="text-gray-500">
						{optimisticLike.likeCount}
						<span className="hidden md:inline"> Likes</span>
					</span>
				</div>
				<div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
					<Image
						alt=""
						className="cursor-pointer"
						height={16}
						src="/comment.png"
						width={16}
					/>
					<span className="text-gray-300">|</span>
					<span className="text-gray-500">
						{commentNumber}
						<span className="hidden md:inline"> Comments</span>
					</span>
				</div>
			</div>
			<div className="">
				<div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
					<Image
						alt=""
						className="cursor-pointer"
						height={16}
						src="/share.png"
						width={16}
					/>
					<span className="text-gray-300">|</span>
					<span className="text-gray-500">
						<span className="hidden md:inline"> Share</span>
					</span>
				</div>
			</div>
		</div>
	)
}
