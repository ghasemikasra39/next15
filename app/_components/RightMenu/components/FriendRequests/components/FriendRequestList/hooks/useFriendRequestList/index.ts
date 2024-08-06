import { useOptimistic, useState } from "react"

import { acceptFollowRequest, declineFollowRequest } from "../../actions"

export const useFriendRequestList = ({ requests }) => {
	const [requestState, setRequestState] = useState(requests)

	const accept = async (requestId: number, userId: string) => {
		removeOptimisticRequest(requestId)
		try {
			await acceptFollowRequest(userId)
			setRequestState((prev) =>
				prev.filter((req) => req.id !== requestId),
			)
		} catch (err) {}
	}

	const decline = async (requestId: number, userId: string) => {
		removeOptimisticRequest(requestId)
		try {
			await declineFollowRequest(userId)
			setRequestState((prev) =>
				prev.filter((req) => req.id !== requestId),
			)
		} catch (err) {}
	}

	const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
		requestState,
		(state, value: number) => state.filter((req) => req.id !== value),
	)

	return {
		accept,
		decline,
		optimisticRequests,
	}
}
