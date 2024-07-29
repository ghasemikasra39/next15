import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import React from "react"

import prisma from "@/_lib/client"
import faker from "@/_utils/fakerConfig"

export const AddPost = () => {
	const { userId } = auth()

	return (
		<div className="flex justify-between gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
			{/*Avatar*/}
			<Image
				alt="avatar"
				className="h-12 w-12 rounded-full"
				height={48}
				src={faker.image.urlPicsumPhotos()}
				width={48}
			/>
			{/*Post*/}
			<div className="flex-1">
				{/*Text input*/}
				<form className="flex gap-4">
					<textarea
						className="flex-1 rounded-lg bg-slate-100 p-2"
						id=""
						name="desc"
						placeholder={"What is on your mind?"}
					></textarea>
					<Image
						alt="emoji"
						className="h-5 w-5 cursor-pointer self-end"
						height={20}
						src={"/emoji.png"}
						width={20}
					/>
					<button>Send</button>
				</form>
				{/*Post option*/}
				<div className="mt-4 flex flex-wrap items-center gap-4 text-gray-400">
					<div className="flex cursor-pointer items-center gap-2">
						<Image
							alt="addPhoto"
							height={20}
							src={"/addImage.png"}
							width={20}
						/>
						<span>Photo</span>
					</div>
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
