import {
	AddPost,
	Feed,
	LeftMenu,
	RightMenu,
	Stories,
} from "@/_components/index"

export default function Home() {
	return (
		<div className="flex gap-6 border-2 border-red-500">
			<div className="hidden w-[20%] border-2 border-green-400 xl:block">
				<LeftMenu />
			</div>
			<div className="w-full border-2 border-pink-500 lg:w-[70%] xl:w-[50%]">
				<div className="flex flex-col gap-6">
					<Stories />
					<AddPost />
					<Feed />
				</div>
			</div>
			<div className="hidden w-[30%] border-2 border-black lg:block">
				<RightMenu />
			</div>
		</div>
	)
}
