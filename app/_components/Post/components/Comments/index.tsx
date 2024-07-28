import Image from "next/image"

import faker from "@/_utils/fakerConfig"

export const Comments = () => {
	return (
		<div className="">
			{/* WRITE */}
			<div className="flex items-center gap-4">
				<Image
					alt="commentAvatarImage"
					className="h-8 w-8 rounded-full"
					height={32}
					src={faker.image.urlPicsumPhotos()}
					width={32}
				/>
				<div className="flex w-full flex-1 items-center justify-between rounded-xl bg-slate-100 px-6 py-2 text-sm">
					<input
						className="flex-1 bg-transparent outline-none"
						placeholder="Write a comment..."
						type="text"
					/>
					<Image
						alt=""
						className="cursor-pointer"
						height={16}
						src="/emoji.png"
						width={16}
					/>
				</div>
			</div>
			{/* COMMENTS */}
			<div className="">
				{/* COMMENT */}
				<div className="mt-6 flex justify-between gap-4">
					{/* AVATAR */}
					<Image
						alt=""
						className="h-10 w-10 rounded-full"
						height={40}
						src={faker.image.urlPicsumPhotos()}
						width={40}
					/>
					{/* DESC */}
					<div className="flex flex-1 flex-col gap-2">
						<span className="font-medium">
							{faker.person.fullName()}
						</span>
						<p>{faker.lorem.paragraph()}</p>
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
									{faker.number.int({ max: 2000 })} Likes
								</span>
							</div>
							<div>Reply</div>
						</div>
					</div>
					{/* ICON */}
					<Image
						alt=""
						className="h-4 w-4 cursor-pointer"
						height={16}
						src="/more.png"
						width={16}
					/>
				</div>
			</div>
		</div>
	)
}
