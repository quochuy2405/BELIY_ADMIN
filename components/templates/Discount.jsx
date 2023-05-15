"use client";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "../moleculers";
const Discount = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => {
		setIsOpen(false);
	};
	return (
		<div className="flex flex-col w-full h-full gap-2">
			<Modal
				handleClose={handleClose}
				isOpen={isOpen}
				title="Sửa khuyến mãi"
				size="md"
			>
				<form className="space-y-6" action="#">
					<div className="w-1/2 h-34 m-auto">
						<Image
							src="https://bizweb.dktcdn.net/100/287/440/products/ao-khoac-local-brand-dep-nhieu-mau-form-rong-dep-5.jpg?v=1662543061970"
							unoptimized
							width={10}
							height={100}
							objectFit="cover"
							className="w-full h-full object-contain"
						/>
					</div>

					<div>
						<label
							htmlFor="text"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Hạn sử dụng
						</label>
						<input
							type="text"
							name="text"
							placeholder=""
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="text"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Phân trăm giảm giá
						</label>
						<input
							type="number"
							name="number"
							placeholder=""
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Cập nhật
					</button>
				</form>
			</Modal>
			<div className="flex gap-4 bg-white rounded-lg overflow-hidden p-2 justify-between">
				<div></div>
				<button
					type="button"
					class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
				>
					Tạo mới khuyễn mãi
				</button>
			</div>
			<div className="flex-1 w-full rounded-lg overflow-y-auto pb-12">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{[1, 2, 3, 4, 5].map((item) => (
						<div
							key={item}
							className="w-full bg-white rounded-lg h-72 flex flex-col p-4 gap-2 m-auto"
						>
							<div className="w-full h-[65%]">
								<Image
									src="https://bizweb.dktcdn.net/100/287/440/products/ao-khoac-local-brand-dep-nhieu-mau-form-rong-dep-5.jpg?v=1662543061970"
									unoptimized
									width={10}
									height={100}
									objectFit="cover"
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="w-full text-white text-sm flex-1 flex items-center justify-between">
								<p class="text-black bg-white border-2 border-black  font-bold rounded-lg text-xs py-1.5 px-4">
									Hạn sử dụng: 2/2/2022
								</p>
							</div>

							<div className="w-full text-white text-sm flex-1 flex items-center justify-between">
								<p class="text-black bg-white border-2 border-black  font-bold rounded-lg text-xs py-2.5 px-4">
									Giá trị: 30%
								</p>
								<button
									type="button"
									class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4 focus:ring-red-200 hover:bg-red-700"
								>
									Xóa
								</button>
								<button
									type="button"
									class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
									onClick={() => setIsOpen(true)}
								>
									Chỉnh sửa
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Discount;
