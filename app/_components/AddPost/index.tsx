"use client"

import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { CldUploadWidget } from "next-cloudinary"
import React, { useState } from "react"

import { addPost } from "./actions"
import { AddPostButton } from "./components/AddPostButton"

export const AddPost = () => {
	const { user, isLoaded } = useUser()
	const [desc, setDesc] = useState("")
	const [img, setImg] = useState<any>()

	if (!isLoaded) {
		return "Loading..."
	}

	return (
		<div className="flex justify-between gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
			{/* AVATAR */}
			<Image
				alt=""
				className="h-12 w-12 rounded-full object-cover"
				height={48}
				src={user?.imageUrl || "/noAvatar.png"}
				width={48}
			/>
			{/* POST */}
			<div className="flex-1">
				{/* TEXT INPUT */}
				<form
					action={(formData) =>
						addPost(formData, img?.secure_url || "")
					}
					className="flex gap-4"
				>
					<textarea
						className="flex-1 rounded-lg bg-slate-100 p-2"
						name="desc"
						placeholder="What's on your mind?"
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
					<div className="">
						<Image
							alt=""
							className="h-5 w-5 cursor-pointer self-end"
							height={20}
							src="/emoji.png"
							width={20}
						/>
						<AddPostButton />
					</div>
				</form>
				{/* POST OPTIONS */}
				<div className="mt-4 flex flex-wrap items-center gap-4 text-gray-400">
					<CldUploadWidget
						uploadPreset="social"
						onSuccess={(result, { widget }) => {
							setImg(result.info)
							widget.close()
						}}
					>
						{({ open }) => {
							return (
								<div
									className="flex cursor-pointer items-center gap-2"
									onClick={() => open()}
								>
									<Image
										alt=""
										height={20}
										src="/addimage.png"
										width={20}
									/>
									Photo
								</div>
							)
						}}
					</CldUploadWidget>
					<div className="flex cursor-pointer items-center gap-2">
						<Image
							alt=""
							height={20}
							src="/addVideo.png"
							width={20}
						/>
						Video
					</div>
					<div className="flex cursor-pointer items-center gap-2">
						<Image alt="" height={20} src="/poll.png" width={20} />
						Poll
					</div>
					<div className="flex cursor-pointer items-center gap-2">
						<Image
							alt=""
							height={20}
							src="/addevent.png"
							width={20}
						/>
						Event
					</div>
				</div>
			</div>
		</div>
	)
}
