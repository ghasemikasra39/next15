import Image from "next/image"
import Link from "next/link"

import faker from "@/_utils/fakerConfig"

import { UserInfoCardInteraction } from "./components/UserInfoCardInteraction"

export const UserInfoCard = async () => {
	return (
		<div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
			{/* TOP */}
			<div className="flex items-center justify-between font-medium">
				<span className="text-gray-500">User Information</span>

				<Link className="text-xs text-blue-500" href="/">
					See all
				</Link>
			</div>
			{/* BOTTOM */}
			<div className="flex flex-col gap-4 text-gray-500">
				<div className="flex items-center gap-2">
					<span className="text-xl text-black">
						{" "}
						{faker.person.fullName()}
					</span>
					<span className="text-sm">
						@{faker.internet.userName()}
					</span>
				</div>
				<p>{faker.lorem.sentence()}</p>
				<div className="flex items-center gap-2">
					<Image alt="" height={16} src="/map.png" width={16} />
					<span>
						Living in <b>{faker.location.city()}</b>
					</span>
				</div>
				<div className="flex items-center gap-2">
					<Image alt="" height={16} src="/school.png" width={16} />
					<span>
						Went to <b>{faker.location.street()}</b>
					</span>
				</div>
				<div className="flex items-center gap-2">
					<Image alt="" height={16} src="/work.png" width={16} />
					<span>
						Works at <b>{faker.person.jobTitle()}</b>
					</span>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1">
						<Image alt="" height={16} src="/link.png" width={16} />
						<Link
							className="font-medium text-blue-500"
							href={faker.internet.domainName()}
						>
							{faker.internet.domainName()}
						</Link>
					</div>
					<div className="flex items-center gap-1">
						<Image alt="" height={16} src="/date.png" width={16} />
						<span>Joined {faker.date.month()}</span>
					</div>
				</div>
				<UserInfoCardInteraction />
			</div>
		</div>
	)
}
