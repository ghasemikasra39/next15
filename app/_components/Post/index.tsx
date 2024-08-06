import { auth } from "@clerk/nextjs/server"
import { Post as PostType, User } from "@prisma/client"
import Image from "next/image"
import { Suspense } from "react"

import { Comments } from "./components/Comments"
import { PostInfo } from "./components/PostInfo"
import { PostInteraction } from "./components/PostInteraction"

type FeedPostType = PostType & { user: User } & {
	likes: [{ userId: string }]
} & {
	_count: { comments: number }
}

export const Post = ({ post }: { post: FeedPostType }) => {
	const { userId } = auth()
	return (
		<div className="flex flex-col gap-4">
			{/* USER */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Image
						alt=""
						className="h-10 w-10 rounded-full"
						height={40}
						src={post.user.avatar || "/noAvatar.png"}
						width={40}
					/>
					<span className="font-medium">
						{post.user.name && post.user.surname
							? post.user.name + " " + post.user.surname
							: post.user.username}
					</span>
				</div>
				{userId === post.user.id && <PostInfo postId={post.id} />}
			</div>
			{/* DESC */}
			<div className="flex flex-col gap-4">
				{post.img && (
					<div className="relative min-h-96 w-full">
						<Image
							fill
							alt=""
							className="rounded-md object-cover"
							src={post.img}
						/>
					</div>
				)}
				<p>{post.desc}</p>
			</div>
			{/* INTERACTION */}
			<Suspense fallback="Loading...">
				<PostInteraction
					commentNumber={post._count.comments}
					likes={post.likes.map((like) => like.userId)}
					postId={post.id}
				/>
			</Suspense>
			<Suspense fallback="Loading...">
				<Comments postId={post.id} />
			</Suspense>
		</div>
	)
}
