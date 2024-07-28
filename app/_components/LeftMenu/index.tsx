import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Ad } from "../Ad"
import { ProfileCard } from "./components/ProfileCard"

export const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
	return (
		<div className="flex flex-col gap-6">
			{type === "home" && <ProfileCard />}
			<div className="flex flex-col gap-2 rounded-lg bg-white p-4 text-sm text-gray-500 shadow-md">
				<Link
					className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
					href="/"
				>
					<Image alt="" height={20} src="/posts.png" width={20} />
					<span>My Posts</span>
				</Link>
				<hr className="border-t-1 w-36 self-center border-gray-50" />
				<Link
					className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
					href="/"
				>
					<Image alt="" height={20} src="/activity.png" width={20} />
					<span>Activity</span>
				</Link>
				<hr className="border-t-1 w-36 self-center border-gray-50" />
				<Link
					className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
					href="/"
				>
					<Image alt="" height={20} src="/market.png" width={20} />
					<span>Marketplace</span>
				</Link>
				<hr className="border-t-1 w-36 self-center border-gray-50" />
				<Link
					className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
					href="/"
				>
					<Image alt="" height={20} src="/events.png" width={20} />
					<span>Events</span>
				</Link>
				<hr className="border-t-1 w-36 self-center border-gray-50" />
				<Link
					className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
					href="/"
				>
					<Image alt="" height={20} src="/albums.png" width={20} />
					<span>Albums</span>
				</Link>
				<hr className="border-t-1 w-36 self-center border-gray-50" />
				<Link
					className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
					href="/"
				>
					<Image alt="" height={20} src="/videos.png" width={20} />
					<span>Videos</span>
				</Link>
				<hr className="border-t-1 w-36 self-center border-gray-50" />
				<Link
					className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
					href="/"
				>
					<Image alt="" height={20} src="/news.png" width={20} />
					<span>News</span>
				</Link>
				<hr className="border-t-1 w-36 self-center border-gray-50" />
				<Link
					className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
					href="/"
				>
					<Image alt="" height={20} src="/courses.png" width={20} />
					<span>Courses</span>
				</Link>
				<hr className="border-t-1 w-36 self-center border-gray-50" />
				<Link
					className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
					href="/"
				>
					<Image alt="" height={20} src="/lists.png" width={20} />
					<span>Lists</span>
				</Link>
				<hr className="border-t-1 w-36 self-center border-gray-50" />
				<Link
					className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
					href="/"
				>
					<Image alt="" height={20} src="/settings.png" width={20} />
					<span>Settings</span>
				</Link>
			</div>
			<Ad size="sm" />
		</div>
	)
}
