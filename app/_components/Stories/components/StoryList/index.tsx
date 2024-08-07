"use client"

import { Story, User } from "@prisma/client"
import Image from "next/image"
import { CldUploadWidget } from "next-cloudinary"

import { useStoryList } from "./hooks/useStoryList"

type StoryWithUser = Story & {
	user: User
}

export const StoryList = ({
	stories,
	userId,
}: {
	stories: StoryWithUser[]
	userId: string
}) => {
	const { add, optimisticStories, img, setImg, user } = useStoryList({
		stories,
		userId,
	})

	return (
		<>
			<CldUploadWidget
				uploadPreset="social"
				onSuccess={(result, { widget }) => {
					setImg(result.info)
					widget.close()
				}}
			>
				{({ open }) => {
					return (
						<div className="relative flex cursor-pointer flex-col items-center gap-2">
							<Image
								alt=""
								className="h-20 w-20 rounded-full object-cover ring-2"
								height={80}
								src={
									img?.secure_url ||
									user?.imageUrl ||
									"/noAvatar.png"
								}
								width={80}
								onClick={() => {
									open()
								}}
							/>
							{img ? (
								<form action={add}>
									<button className="rounded-md bg-blue-500 p-1 text-xs text-white">
										Send
									</button>
								</form>
							) : (
								<span className="font-medium">Add a Story</span>
							)}
							<div className="absolute top-1 text-6xl text-gray-200">
								+
							</div>
						</div>
					)
				}}
			</CldUploadWidget>
			{/* STORY */}
			{optimisticStories.map((story) => (
				<div
					key={story.id}
					className="flex cursor-pointer flex-col items-center gap-2"
				>
					<Image
						alt=""
						className="h-20 w-20 rounded-full ring-2"
						height={80}
						src={story.user.avatar || "/noAvatar.png"}
						width={80}
					/>
					<span className="font-medium">
						{story.user.name || story.user.username}
					</span>
				</div>
			))}
		</>
	)
}
