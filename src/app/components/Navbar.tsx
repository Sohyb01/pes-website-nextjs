const Navbar = () => {
    return (
        <>
            <nav className="navbar-desktop bg-pes_logoblue px-[10px] py-2 sm:px-[20px] sm:py-2 md:py-4 xl:px-[220px]">
                <div className="mx-auto flex justify-between sm:container">
                    <div className="nav-logo h-[48px] w-[114px] bg-cover md:h-[74px] md:w-[174px]"></div>
                    <div className="container flex w-fit items-center gap-4 lg:gap-8">
                        <div className="nav-links container hidden items-center gap-8 lg:flex lg:gap-8">
                            <a
                                href=""
                                className="text-md text-pes_white duration-200 hover:text-pes_orange"
                            >
                                Features
                            </a>
                            <a
                                href=""
                                className="text-md text-pes_white duration-200 hover:text-pes_orange"
                            >
                                About Us
                            </a>
                            <a
                                href=""
                                className="text-md text-pes_white duration-200 hover:text-pes_orange"
                            >
                                Programs
                            </a>
                            {/* <a
                                href=""
                                className="text-md  flex items-center gap-2 fill-pes_white text-pes_white duration-200 hover:fill-pes_orange hover:text-pes_orange"
                            >
                                More
                                <div className="link-arrow h-2 w-[12px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 12 8"
                                    >
                                        <path d="M5.9996 8C5.78029 8 5.56087 7.90234 5.39373 7.70703L0.251105 1.70703C-0.0837016 1.31641 -0.0837016 0.683594 0.251105 0.292969C0.585911 -0.0976562 1.1283 -0.0976562 1.4631 0.292969L5.9996 5.5875L10.5369 0.29375C10.8717 -0.0968752 11.4141 -0.0968752 11.7489 0.29375C12.0837 0.684375 12.0837 1.31719 11.7489 1.70781L6.60627 7.70781C6.43886 7.90312 6.21923 8 5.9996 8Z" />
                                    </svg>
                                </div>
                            </a> */}
                            <div className="dropdown-end dropdown">
                                <label
                                    tabIndex={0}
                                    className="m-1 text-pes_white duration-200 hover:text-pes_orange"
                                >
                                    More
                                    {/* <p className="hidden lg:block">More</p> */}
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu dropdown-content rounded-box z-[50] h-fit bg-base-100"
                                >
                                    <li className="">
                                        <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                            Become an Instructor
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                            Online courses
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                            Partnerships
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                            Certifications
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                            Franchises
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                            Leaderboard
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                            Free Trial
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className="text-md h-fit rounded-full bg-pes_orange px-8 py-4 text-pes_white duration-200 hover:bg-orange-300">
                            <div className="w-[6ch]">Sign Up</div>
                        </button>
                        <div className="dropdown-end dropdown">
                            <label
                                tabIndex={0}
                                className="m-1 text-pes_white duration-200 hover:text-pes_orange"
                            >
                                <button className="lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="12"
                                        viewBox="0 0 19 12"
                                    >
                                        <path
                                            d="M1.5 1H17.5"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M1.5 6H17.5"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M1.5 11H17.5"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </button>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content rounded-box z-[50] h-fit bg-base-100"
                            >
                                <li className="">
                                    <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                        Become an Instructor
                                    </a>
                                </li>
                                <li className="">
                                    <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                        Online courses
                                    </a>
                                </li>
                                <li className="">
                                    <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                        Partnerships
                                    </a>
                                </li>
                                <li className="">
                                    <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                        Certifications
                                    </a>
                                </li>
                                <li className="">
                                    <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                        Franchises
                                    </a>
                                </li>
                                <li className="">
                                    <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                        Leaderboard
                                    </a>
                                </li>
                                <li className="">
                                    <a className="text-pes_lightblue duration-200 hover:text-pes_orange">
                                        Free Trial
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
