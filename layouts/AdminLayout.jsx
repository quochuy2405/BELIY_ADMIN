import { Logo } from "@/assets/svg";
import clsx from "clsx";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
	MdOutlineOtherHouses,
	MdOutlineStorefront,
	MdPersonAddAlt1,
	MdPersonSearch,
} from "react-icons/md";

const USERS = [
	{
		key: "/admin/user/create",
		icon: (active) => (
			<MdPersonAddAlt1
				size={20}
				color={active ? "#E5B611" : "black"}
				className="w-5 h-5"
			/>
		),
		title: "Tạo tài khoản",
	},
	{
		key: "/admin/user/account_managers",
		icon: (active) => (
			<MdPersonSearch
				size={20}
				color={active ? "#E5B611" : "black"}
				className="w-5 h-5"
			/>
		),
		title: "Quản trị tài khoản",
	},
];

const POCS = [
	{
		key: "/admin/poc_managers",
		icon: (active) => (
			<MdOutlineStorefront
				size={20}
				color={active ? "#E5B611" : "black"}
				className="w-5 h-5"
			/>
		),
		title: "Quản trị POC",
	},
];

const AdminLayout = ({ children }) => {
	const { pathname, push } = useRouter();

	const handleLogout = async () => {
		deleteCookie("tokenABINDEV");
		localStorage.removeItem("refreshToken");
		push("/");
	};
	return (
		<div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
			{/* <!-- Desktop sidebar --> */}
			<header className="z-10 bg-white border-b-[1px] h-14 min-h-[56px] flex items-center justify-between px-6">
				<div className="text-lg font-bold text-gray-800">
					<Link href="/" className="h-8 w-[138px] block" passHref>
						<Logo />
					</Link>
				</div>
				<div className="container flex items-center justify-between h-full mx-auto  dark:text-purple-300">
					{/* <!-- Mobile hamburger --> */}
					<button
						className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
						aria-label="Menu"
					>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
					<div />
					<ul className="flex items-centers flex-shrink-0 space-x-6 h-full">
						{/* <!-- Theme toggler --> */}
						<li className="flex">
							<button
								className="rounded-md focus:outline-none focus:shadow-outline-purple"
								aria-label="Toggle color mode"
							>
								{/* <template>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                  </template> */}
								{/* <template>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </template> */}
							</button>
						</li>
						{/* <!-- Notifications menu --> */}
						<li className="relative h-full flex items-center">
							<button
								className="relative align-middle rounded-md focus:outline-none 
                m-auto focus:shadow-outline-purple"
								aria-label="Notifications"
								aria-haspopup="true"
							>
								<svg
									className="w-5 h-5 m-auto block"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
								</svg>
								{/* <!-- Notification badge --> */}
								<span
									aria-hidden="true"
									className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
								></span>
							</button>
							{/* <template>
                  <ul
                    // xTransition:leave="transition ease-in duration-150"
                    // xTransition:leave-start="opacity-100"
                    // xTransition:leave-end="opacity-0"
                    className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
                    aria-label="submenu"
                  >
                    <li className="flex">
                      <a
                        className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800"
                        href="#"</span>
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                          13
                        </span>
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800"
                        href="#"</span>
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                          2
                        </span>
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800"
                        href="#"</span>
                      </a>
                    </li>
                  </ul>
                </template> */}
						</li>
						{/* <!-- Profile menu --> */}
						<li className="relative h-full flex items-center">
							<button
								className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
								aria-label="Account"
								aria-haspopup="true"
								onClick={handleLogout}
							>
								<Image
									className="object-cover w-8 h-8 rounded-full"
									src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
									alt=""
									unoptimized
									width={32}
									height={32}
									aria-hidden="true"
								/>
							</button>
							<span className="text-sm font-bold ml-3">Quốc Vinh</span>
							{/* <template>
                  <ul
                    // xTransition:leave="transition ease-in duration-150"
                    // xTransition:leave-start="opacity-100"
                    // xTransition:leave-end="opacity-0"
                    className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                    aria-label="submenu"
                  >
                    <li className="flex">
                      <a
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800"
                        href="#"="w-4 h-4 mr-3"
                          aria-hidden="true"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800"
                        href="#"="w-4 h-4 mr-3"
                          aria-hidden="true"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800"
                        href="#"="w-4 h-4 mr-3"
                          aria-hidden="true"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                        </svg>
                        <span>Log out</span>
                      </a>
                    </li>
                  </ul>
                </template> */}
						</li>
					</ul>
				</div>
			</header>
			<div className="flex flex-1 w-full">
				<aside className="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white md:block shadow-lg">
					<div className="text-gray-500">
						<div className="p-4 w-full">
							<ul className="pb-4">
								<li className="relative py">
									<Link
										className={clsx(
											"flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 p-2 rounded-md",
											{
												"bg-[#F2F2F2] text-black": pathname === "/admin",
											}
										)}
										href="/admin"
										passHref
									>
										<MdOutlineOtherHouses
											size={20}
											color={pathname === "/admin" ? "#E5B611" : "black"}
											className="w-5 h-5"
										/>
										<span className="ml-2">Trang chủ</span>
									</Link>
								</li>
							</ul>
							<ul className="pb-4 flex flex-col gap-0.5">
								<li className="relative py-1 px-2 text-sm font-bold text-gray-default">
									NGƯỜI DÙNG
								</li>
								{USERS.map((item) => (
									<li className="relative py" key={item.key}>
										<Link
											className={clsx(
												"flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 p-2 rounded-md",
												{
													"bg-[#F2F2F2] text-black": pathname === item.key,
												}
											)}
											href={item.key}
											passHref
										>
											{item.icon(pathname === item.key)}
											<span className="ml-2">{item.title}</span>
										</Link>
									</li>
								))}

								{/* <li className="relative py-3">
                <button
                  className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                  aria-haspopup="true"
                >
                  <span className="inline-flex items-center">
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                    </svg>
                    <span className="ml-4">Pages</span>
                  </span>
                  <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button> */}
								{/* <template>
                <ul
                  // xTransition:enter="transition-all ease-in-out duration-300"
                  // xTransition:enter-start="opacity-25 max-h-0"
                  // xTransition:enter-end="opacity-100 max-h-xl"
                  // xTransition:leave="transition-all ease-in-out duration-300"
                  // xTransition:leave-start="opacity-100 max-h-xl"
                  // xTransition:leave-end="opacity-0 max-h-0"
                  className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50"
                  aria-label="submenu"
                >
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800">
                    <a className="w-full" href="#"">
                      Login
                    </a>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800">
                    <a className="w-full" href="#".html">
                      Create account
                    </a>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800">
                    <a className="w-full" href="#".html">
                      Forgot password
                    </a>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800">
                    <a className="w-full" href="#"">
                      404
                    </a>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800">
                    <a className="w-full" href="#"">
                      Blank
                    </a>
                  </li>
                </ul>
              </template> */}
								{/* </li> */}
							</ul>
							<ul className="pb-4 flex flex-col gap-0.5">
								<li className="relative py-1 px-2 text-sm font-bold text-gray-default">
									POCS
								</li>
								{POCS.map((item) => (
									<li className="relative py" key={item.key}>
										<Link
											className={clsx(
												"flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 p-2 rounded-md",
												{
													"bg-[#F2F2F2] text-black": pathname === item.key,
												}
											)}
											href={item.key}
											passHref
										>
											{item.icon(pathname === item.key)}
											<span className="ml-2">{item.title}</span>
										</Link>
									</li>
								))}
							</ul>
							{/* <div className="px-6 my-6">
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Create account
                <span className="ml-2" aria-hidden="true">
                  +
                </span>
              </button>
            </div> */}
						</div>
					</div>
				</aside>
				<main className="h-full flex-1 overflow-y-auto bg_admin p-6">
					{children}
				</main>
			</div>
		</div>
	);
};

export default AdminLayout;
