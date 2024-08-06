import { auth } from "@clerk/nextjs/server"
import Link from "next/link"

import prisma from "@/_lib/client"

import { FriendRequestList } from "./components/FriendRequestList"

export const FriendRequests = async () => {
	const { userId } = auth()

	if (!userId) {
		return null
	}

	const requests = await prisma.followRequest.findMany({
		where: {
			receiverId: userId,
		},
		include: {
			sender: true,
		},
	})

	if (requests.length === 0) {
		return null
	}
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
			<FriendRequestList requests={requests} />
		</div>
	)
}
