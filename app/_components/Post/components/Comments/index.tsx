import prisma from "@/_lib/client"

import { CommentList } from "./components/CommentList"

export const Comments = async ({ postId }: { postId: number }) => {
	const comments = await prisma.comment.findMany({
		where: {
			postId,
		},
		include: {
			user: true,
		},
	})
	return (
		<div className="">
			{/* WRITE */}
			<CommentList comments={comments} postId={postId} />
		</div>
	)
}
