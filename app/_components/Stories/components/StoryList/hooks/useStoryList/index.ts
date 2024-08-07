import { useUser } from "@clerk/nextjs"
import { useOptimistic, useState } from "react"

import { addStory } from "../../actions"
import { StoryWithUser, UseStoryList } from "./types"

export const useStoryList: UseStoryList = ({ stories, userId }) => {
	const [storyList, setStoryList] = useState(stories)
	const [img, setImg] = useState<any>()

	const { user } = useUser()

	const add = async () => {
		if (!img?.secure_url) {
			return
		}

		addOptimisticStory({
			id: Math.random(),
			img: img.secure_url,
			createdAt: new Date(Date.now()),
			expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
			userId: userId,
			user: {
				id: userId,
				username: "Sending...",
				avatar: user?.imageUrl || "/noAvatar.png",
				cover: "",
				description: "",
				name: "",
				surname: "",
				city: "",
				work: "",
				school: "",
				website: "",
				createdAt: new Date(Date.now()),
			},
		})

		try {
			const createdStory = await addStory(img.secure_url)
			setStoryList((prev) => [createdStory!, ...prev])
			setImg(null)
		} catch (err) {}
	}

	const [optimisticStories, addOptimisticStory] = useOptimistic(
		storyList,
		(state, value: StoryWithUser) => [value, ...state],
	)

	return { add, optimisticStories, img, setImg, user }
}
