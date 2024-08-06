export type GetPostsFromFollowings = (props: { username?: string }) => Promise<{
	posts: any[]
}>
