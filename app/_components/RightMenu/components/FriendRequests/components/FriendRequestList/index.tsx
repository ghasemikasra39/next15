import Image from "next/image"

import faker from "@/_utils/fakerConfig"

export const FriendRequestList = () => {
	return (
		<div className="">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Image
						alt=""
						className="h-10 w-10 rounded-full object-cover"
						height={40}
						src={faker.image.urlPicsumPhotos()}
						width={40}
					/>
					<span className="font-semibold">
						{faker.person.lastName()}
					</span>
				</div>
				<div className="flex justify-end gap-3">
					<form>
						<button>
							<Image
								alt=""
								className="cursor-pointer"
								height={20}
								src="/accept.png"
								width={20}
							/>
						</button>
					</form>
					<form>
						<button>
							<Image
								alt=""
								className="cursor-pointer"
								height={20}
								src="/reject.png"
								width={20}
							/>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
