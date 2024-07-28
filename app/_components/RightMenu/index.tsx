import React, { Suspense } from "react"

import {
	Ad,
	Birthdays,
	FriendRequests,
	UserInfoCard,
	UserMediaCard,
} from "./components"

export const RightMenu = () => {
	return (
		<div className="flex flex-col gap-6">
			<>
				<Suspense fallback="loading...">
					<UserInfoCard />
				</Suspense>
				<Suspense fallback="loading...">
					<UserMediaCard />
				</Suspense>
			</>
			<FriendRequests />
			<Birthdays />
			<Ad size="md" />
		</div>
	)
}
