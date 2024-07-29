import Image from "next/image"

import { Feed, LeftMenu, RightMenu } from "@/_components/index"
import faker from "@/_utils/fakerConfig"

const ProfilePage = async ({ params }: { params: { username: string } }) => {
	return (
		<div className="flex gap-6 pt-6">
			<div className="hidden w-[20%] xl:block">
				<LeftMenu type="profile" />
			</div>
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className="flex flex-col gap-6">
					<div className="flex flex-col items-center justify-center">
						<div className="relative h-64 w-full">
							<Image
								fill
								alt=""
								className="rounded-md object-cover"
								src={
									faker.image.urlPicsumPhotos() ||
									"/noCover.png"
								}
							/>
							<Image
								alt=""
								className="absolute -bottom-16 left-0 right-0 m-auto h-32 w-32 rounded-full object-cover ring-4 ring-white"
								height={128}
								src={
									faker.image.urlPicsumPhotos() ||
									"/noAvatar.png"
								}
								width={128}
							/>
						</div>
						<h1 className="mb-4 mt-20 text-2xl font-medium">
							{faker.internet.userName()}
						</h1>
						<div className="mb-4 flex items-center justify-center gap-12">
							<div className="flex flex-col items-center">
								<span className="font-medium">
									{faker.number.int({ max: 2000 })}
								</span>
								<span className="text-sm">Posts</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">
									{faker.number.int({ max: 2000 })}
								</span>
								<span className="text-sm">Followers</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">
									{faker.number.int({ max: 2000 })}
								</span>
								<span className="text-sm">Following</span>
							</div>
						</div>
					</div>
					<Feed username={faker.internet.userName()} />
				</div>
			</div>
			<div className="hidden w-[30%] lg:block">
				<RightMenu />
			</div>
		</div>
	)
}

export default ProfilePage
