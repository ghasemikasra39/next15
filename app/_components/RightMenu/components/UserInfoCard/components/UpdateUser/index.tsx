"use client"

import { User } from "@prisma/client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary"
import { useActionState, useState } from "react"

import { updateProfile } from "./actions"
import { UpdateButton } from "./components/UpdateButton"

export const UpdateUser = ({ user }: { user: User }) => {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const [cover, setCover] = useState<
		string | CloudinaryUploadWidgetInfo | undefined
	>()

	const [state, formAction] = useActionState(updateProfile, {
		success: false,
		error: false,
	})

	const handleClose = () => {
		setOpen(false)
		state.success && router.refresh()
	}

	return (
		<div className="">
			<span
				className="cursor-pointer text-xs text-blue-500"
				onClick={() => setOpen(true)}
			>
				Update
			</span>
			{open && (
				<div className="absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-65">
					<form
						action={(formData) =>
							formAction({
								formData,
								cover: cover
									? (cover as CloudinaryUploadWidgetInfo)
											.secure_url
									: "",
							})
						}
						className="relative flex w-full flex-col gap-2 rounded-lg bg-white p-12 shadow-md md:w-1/2 xl:w-1/3"
					>
						{/* TITLE */}
						<h1>Update Profile</h1>
						<div className="mt-4 text-xs text-gray-500">
							Use the navbar profile to change the avatar or
							username.
						</div>
						{/* COVER PIC UPLOAD */}
						<CldUploadWidget
							uploadPreset="social"
							onSuccess={(result) => setCover(result.info)}
						>
							{({ open }) => {
								return (
									<div
										className="my-4 flex flex-col gap-4"
										onClick={() => open()}
									>
										<label htmlFor="">Cover Picture</label>
										<div className="flex cursor-pointer items-center gap-2">
											<Image
												alt=""
												className="h-8 w-12 rounded-md object-cover"
												height={32}
												src={
													user.cover || "/noCover.png"
												}
												width={48}
											/>
											<span className="text-xs text-gray-600 underline">
												Change
											</span>
										</div>
									</div>
								)
							}}
						</CldUploadWidget>

						{/* WRAPPER */}
						<div className="flex flex-wrap justify-between gap-2 xl:gap-4">
							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label
									className="text-xs text-gray-500"
									htmlFor=""
								>
									First Name
								</label>
								<input
									className="rounded-md p-[13px] text-sm ring-1 ring-gray-300"
									name="name"
									placeholder={user.name || "John"}
									type="text"
								/>
							</div>

							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label
									className="text-xs text-gray-500"
									htmlFor=""
								>
									Surname
								</label>
								<input
									className="rounded-md p-[13px] text-sm ring-1 ring-gray-300"
									name="surname"
									placeholder={user.surname || "Doe"}
									type="text"
								/>
							</div>

							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label
									className="text-xs text-gray-500"
									htmlFor=""
								>
									Description
								</label>
								<input
									className="rounded-md p-[13px] text-sm ring-1 ring-gray-300"
									name="description"
									placeholder={
										user.description ||
										"Life is beautiful..."
									}
									type="text"
								/>
							</div>

							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label
									className="text-xs text-gray-500"
									htmlFor=""
								>
									City
								</label>
								<input
									className="rounded-md p-[13px] text-sm ring-1 ring-gray-300"
									name="city"
									placeholder={user.city || "New York"}
									type="text"
								/>
							</div>

							{/* INPUT */}

							<div className="flex flex-col gap-4">
								<label
									className="text-xs text-gray-500"
									htmlFor=""
								>
									School
								</label>
								<input
									className="rounded-md p-[13px] text-sm ring-1 ring-gray-300"
									name="school"
									placeholder={user.school || "MIT"}
									type="text"
								/>
							</div>
							{/* INPUT */}

							<div className="flex flex-col gap-4">
								<label
									className="text-xs text-gray-500"
									htmlFor=""
								>
									Work
								</label>
								<input
									className="rounded-md p-[13px] text-sm ring-1 ring-gray-300"
									name="work"
									placeholder={user.work || "Apple Inc."}
									type="text"
								/>
							</div>
							{/* INPUT */}

							<div className="flex flex-col gap-4">
								<label
									className="text-xs text-gray-500"
									htmlFor=""
								>
									Website
								</label>
								<input
									className="rounded-md p-[13px] text-sm ring-1 ring-gray-300"
									name="website"
									placeholder={user.website || "lama.dev"}
									type="text"
								/>
							</div>
						</div>
						<UpdateButton />
						{state.success && (
							<span className="text-green-500">
								Profile has been updated!
							</span>
						)}
						{state.error && (
							<span className="text-red-500">
								Something went wrong!
							</span>
						)}
						<div
							className="absolute right-2 top-3 cursor-pointer text-xl"
							onClick={handleClose}
						>
							X
						</div>
					</form>
				</div>
			)}
		</div>
	)
}
