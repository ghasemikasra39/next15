import Image from "next/image"

import faker from "@/_utils/fakerConfig"

import { Comments } from "./components/Comments"

export const Post = () => {
	return (
		<div className="flex flex-col gap-4">
			{/* USER */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Image
						alt="postImage"
						className="h-10 w-10 rounded-full"
						height={40}
						src={faker.image.urlPicsumPhotos()}
						width={40}
					/>
					<span className="font-medium">
						{faker.person.fullName()}
					</span>
				</div>
				<Image alt="" height={16} src="/more.png" width={16} />
			</div>
			{/* DESC */}
			<div className="flex flex-col gap-4">
				<div className="relative min-h-96 w-full">
					<Image
						fill
						alt="postImage"
						className="rounded-md object-cover"
						src={faker.image.urlPicsumPhotos()}
					/>
				</div>
				<p>{faker.lorem.paragraph()}</p>
			</div>
			{/* INTERACTION */}
			<div className="my-4 flex items-center justify-between text-sm">
				<div className="flex gap-8">
					<div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
						<Image
							alt="likeImage"
							className="cursor-pointer"
							height={16}
							src="/like.png"
							width={16}
						/>
						<span className="text-gray-300">|</span>
						<span className="text-gray-500">
							{faker.number.int({ max: 2000 })}
							<span className="hidden md:inline"> Likes</span>
						</span>
					</div>
					<div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
						<Image
							alt="likeImage"
							className="cursor-pointer"
							height={16}
							src="/comment.png"
							width={16}
						/>
						<span className="text-gray-300">|</span>
						<span className="text-gray-500">
							{faker.number.int({ max: 2000 })}
							<span className="hidden md:inline"> Comments</span>
						</span>
					</div>
				</div>
				<div className="">
					<div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
						<Image
							alt="likeImage"
							className="cursor-pointer"
							height={16}
							src="/share.png"
							width={16}
						/>
						<span className="text-gray-300">|</span>
						<span className="text-gray-500">
							{faker.number.int({ max: 2000 })}
							<span className="hidden md:inline"> Shares</span>
						</span>
					</div>
				</div>
			</div>
			<Comments />
		</div>
	)
}
