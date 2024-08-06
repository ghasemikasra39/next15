"use client"

import Image from "next/image"

import { useFriendRequestList } from "./hooks/useFriendRequestList"
import { RequestWithUser } from "./types"

export const FriendRequestList = ({
	requests,
}: {
	requests: RequestWithUser[]
}) => {
	const { accept, decline, optimisticRequests } = useFriendRequestList({
		requests,
	})

	return (
		<div className="">
			{optimisticRequests.map((request) => (
				<div
					key={request.id}
					className="flex items-center justify-between"
				>
					<div className="flex items-center gap-4">
						<Image
							alt=""
							className="h-10 w-10 rounded-full object-cover"
							height={40}
							src={request.sender.avatar || "/noAvatar.png"}
							width={40}
						/>
						<span className="font-semibold">
							{request.sender.name && request.sender.surname
								? request.sender.name +
									" " +
									request.sender.surname
								: request.sender.username}
						</span>
					</div>
					<div className="flex justify-end gap-3">
						<form
							action={() => accept(request.id, request.sender.id)}
						>
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
						<form
							action={() =>
								decline(request.id, request.sender.id)
							}
						>
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
			))}
		</div>
	)
}
