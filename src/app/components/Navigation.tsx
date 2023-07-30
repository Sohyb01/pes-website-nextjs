import Link from "next/link";

const Navbar = async () => {
  // Navbar effect
  // const [isFixed, setIsFixed] = useState(false);

  // useEffect(() => {
  //   function handleScroll() {
  //     setIsFixed(window.scrollY > window.innerHeight);
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const navbarClass = isFixed ? "fixed" : "absolute";

  return (
    <nav
      className={`navbar-desktop duration-200 w-full top-0 z-50 px-[10px] py-4 sm:px-[20px] md:px-10 bg-pes_logoblue fixed`}
    >
      <div className="mx-auto flex justify-between items-center sm:max-w-[1000px]">
        <Link href="/home">
          <div className="nav-logo h-[48px] w-[114px] bg-cover lg:h-[74px] lg:w-[174px]"></div>
        </Link>
        <div className="container flex w-fit items-center gap-4 lg:gap-8">
          <div className="nav-links container hidden items-center gap-8 lg:flex lg:gap-8">
            <Link
              href="/home"
              className="text-md text-pes_white duration-200 hover:text-pes_orange"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-md text-pes_white duration-200 hover:text-pes_orange"
            >
              About Us
            </Link>
            <Link
              href="/features"
              className="text-md text-pes_white duration-200 hover:text-pes_orange"
            >
              Features
            </Link>

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
                  <Link
                    href="/home"
                    className="text-pes_lightblue duration-200 hover:text-pes_orange"
                  >
                    Home
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/about"
                    className="text-pes_lightblue duration-200 hover:text-pes_orange"
                  >
                    About Us
                  </Link>
                </li>
                <li className="">
                  {" "}
                  <Link
                    href="/features"
                    className="text-pes_lightblue duration-200 hover:text-pes_orange"
                  >
                    Features
                  </Link>
                </li>
                <li className="">
                  {" "}
                  <Link
                    href="/contact"
                    className="text-pes_lightblue duration-200 hover:text-pes_orange"
                  >
                    Contact
                  </Link>
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
                  <path d="M1.5 1H17.5" stroke="white" strokeWidth="1.5" />
                  <path d="M1.5 6H17.5" stroke="white" strokeWidth="1.5" />
                  <path d="M1.5 11H17.5" stroke="white" strokeWidth="1.5" />
                </svg>
              </button>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box z-[50] h-fit bg-base-100"
            >
              <li className="">
                <Link
                  href="/home"
                  className="text-pes_lightblue duration-200 hover:text-pes_orange"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  href="/about"
                  className="text-pes_lightblue duration-200 hover:text-pes_orange"
                >
                  About Us
                </Link>
              </li>
              <li className="">
                {" "}
                <Link
                  href="/features"
                  className="text-pes_lightblue duration-200 hover:text-pes_orange"
                >
                  Features
                </Link>
              </li>
              <li className="">
                {" "}
                <Link
                  href="/contact"
                  className="text-pes_lightblue duration-200 hover:text-pes_orange"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
