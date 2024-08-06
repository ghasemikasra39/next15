import React, { Suspense } from "react"

import {
	Ad,
	Birthdays,
	FriendRequests,
	UserInfoCard,
	UserMediaCard,
} from "./components"
import { RightMenuProps } from "./types"

export const RightMenu = ({ user }: RightMenuProps) => {
	return (
		<div className="flex flex-col gap-6">
			{user ? (
				<>
					<Suspense fallback="loading...">
						<UserInfoCard user={user} />
					</Suspense>
					<Suspense fallback="loading...">
						<UserMediaCard user={user} />
					</Suspense>
				</>
			) : null}
			<FriendRequests />
			<Birthdays />
			<Ad size="md" />
		</div>
	)
}
