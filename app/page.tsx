import {
	AddPost,
	Feed,
	LeftMenu,
	RightMenu,
	Stories,
} from "@/_components/index"

export default function Home() {
	return (
		<div className="flex gap-6 pt-6">
			<div className="hidden w-[20%] border-2 border-green-400 xl:block">
				<LeftMenu type={"home"} />
			</div>
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className="flex flex-col gap-6">
					<Stories />
					<AddPost />
					<Feed />
				</div>
			</div>
			<div className="hidden w-[30%] lg:block">
				<RightMenu />
			</div>
		</div>
	)
}
