"use client"

export const UserInfoCardInteraction = () => {
	return (
		<>
			<form>
				<button className="w-full rounded-md bg-blue-500 p-2 text-sm text-white">
					Following
				</button>
			</form>
			<form className="self-end">
				<button>
					<span className="cursor-pointer text-xs text-red-400">
						Block User
					</span>
				</button>
			</form>
		</>
	)
}
