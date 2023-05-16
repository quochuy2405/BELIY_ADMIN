"use client";

const DashBoard = () => {
	return (
		<div className="flex flex-col h-full">
			<div class="container mx-auto h-full">
				<div class="flex gap-2 flex-wrap h-full w-full">
					<div class="flex gap-2 w-full md:w-[48.5%] flex-wrap h-full">
						<div class=" w-full md:w-[48.5%] p-1 md:p-2 bg-white rounded-lg">
							<img
								alt="gallery"
								class="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
							/>
						</div>
						<div class=" w-full md:w-[48.5%] p-1 md:p-2 bg-white rounded-lg">
							<img
								alt="gallery"
								class="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
							/>
						</div>
						<div class="w-full p-1 md:p-2 bg-white rounded-lg relative ">
							<img
								alt="gallery"
								class="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
							/>
						</div>
					</div>
					<div class="flex gap-2 w-full md:w-1/2 flex-wrap">
						<div class="w-full p-1 md:p-2 bg-white rounded-lg">
							<img
								alt="gallery"
								class="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
							/>
						</div>
						<div class=" w-full md:w-[48.5%] p-1 flex flex-col md:p-2 bg-white rounded-lg">
							<img
								alt="gallery"
								class="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
							/>
						</div>
						<div class=" w-full md:w-[48.5%] p-1 flex flex-col md:p-2 bg-white rounded-lg">
							<img
								alt="gallery"
								class="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
