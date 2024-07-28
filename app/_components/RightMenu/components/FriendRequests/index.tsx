import Link from "next/link"

import { FriendRequestList } from "./components/FriendRequestList"

export const FriendRequests = async () => {
	return (
		<div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
			{/* TOP */}
			<div className="flex items-center justify-between font-medium">
				<span className="text-gray-500">Friend Requests</span>
				<Link className="text-xs text-blue-500" href="/">
					See all
				</Link>
			</div>
			{/* USER */}
			<FriendRequestList />
		</div>
	)
}
