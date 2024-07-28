import Image from "next/image"
import Link from "next/link"

import faker from "@/_utils/fakerConfig"

export const Birthdays = () => {
	return (
		<div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
			{/* TOP */}
			<div className="flex items-center justify-between font-medium">
				<span className="text-gray-500">Birthdays</span>
			</div>
			{/* USER */}
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
						{faker.person.fullName()}
					</span>
				</div>
				<div className="flex justify-end gap-3">
					<button className="rounded-md bg-blue-500 px-2 py-1 text-xs text-white">
						Celebrate
					</button>
				</div>
			</div>
			{/* UPCOMING */}
			<div className="flex items-center gap-4 rounded-lg bg-slate-100 p-4">
				<Image alt="" height={24} src="/gift.png" width={24} />
				<Link className="flex flex-col gap-1 text-xs" href="/">
					<span className="font-semibold text-gray-700">
						Upcoming Birthdays
					</span>
					<span className="text-gray-500">
						See other {faker.number.int({ max: 20 })} have upcoming
						birthdays
					</span>
				</Link>
			</div>
		</div>
	)
}
