import prisma from "@/_lib/client"

export const getUserById = async (userId: string) => {
	const user = await prisma.user.findFirst({
		where: {
			id: userId,
		},
		include: {
			_count: {
				select: {
					followers: true,
				},
			},
		},
	})
	return user
}
