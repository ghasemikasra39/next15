import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

import { MobileMenu } from "@/_components/index"

export const Navbar = () => {
	return (
		<div className="flex h-24 items-center justify-between">
			{/* LEFT */}
			<div className="w-[20%] md:hidden lg:block">
				<Link className="text-xl font-bold text-blue-600" href="/">
					Next15 Social
				</Link>
			</div>
			{/* CENTER */}
			<div className="hidden w-[50%] items-center justify-between text-sm md:flex">
				{/* LINKS */}
				<div className="flex gap-6 text-gray-600">
					<Link className="flex items-center gap-2" href="/">
						<Image
							alt="Homepage"
							className="h-4 w-4"
							height={16}
							src="/home.png"
							width={16}
						/>
						<span>Homepage</span>
					</Link>
					<Link className="flex items-center gap-2" href="/">
						<Image
							alt="Friends"
							className="h-4 w-4"
							height={16}
							src="/friends.png"
							width={16}
						/>
						<span>Friends</span>
					</Link>
					<Link className="flex items-center gap-2" href="/">
						<Image
							alt="Stories"
							className="h-4 w-4"
							height={16}
							src="/stories.png"
							width={16}
						/>
						<span>Stories</span>
					</Link>
				</div>
				<div className="hidden items-center rounded-xl bg-slate-100 p-2 xl:flex">
					<input
						className="bg-transparent outline-none"
						placeholder="search..."
						type="text"
					/>
					<Image alt="" height={14} src="/search.png" width={14} />
				</div>
			</div>
			{/* RIGHT */}
			<div className="flex w-[30%] items-center justify-end gap-4 xl:gap-8">
				<ClerkLoading>
					<div className="text-surface inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-gray-500 border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
				</ClerkLoading>
				<ClerkLoaded>
					<SignedIn>
						<div className="cursor-pointer">
							<Image
								alt=""
								height={24}
								src="/people.png"
								width={24}
							/>
						</div>
						<div className="cursor-pointer">
							<Image
								alt=""
								height={20}
								src="/messages.png"
								width={20}
							/>
						</div>
						<div className="cursor-pointer">
							<Image
								alt=""
								height={20}
								src="/notifications.png"
								width={20}
							/>
						</div>
						{/*<UserButton />*/}
					</SignedIn>
					<SignedOut>
						<div className="flex items-center gap-2 text-sm">
							<Image
								alt=""
								height={20}
								src="/login.png"
								width={20}
							/>
							<Link href="/sign-in">Login/Register</Link>
						</div>
					</SignedOut>
				</ClerkLoaded>
				<MobileMenu />
			</div>
		</div>
	)
}
