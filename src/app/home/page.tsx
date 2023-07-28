import TestimonialsSwiper from "../components/TestimonialsSwiper";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="m-0">
        <div className="hero-section bg-cover bg-center h-[546px] sm:h-[661px] md:h-[530px] bg-no-repeat lg:h-[633px]">
          <div className="lg:mx-auto h-full lg:max-w-[1080px] bg-none relative px-[10px] py-[32px] sm:px-[20px] sm:py-[40px] md:px-[30px] flex flex-col items-center lg:py-[80px] lg:px-[40px]">
            <div className="hero-section-img hidden sm:block sm:absolute h-[385px] w-[290px] md:w-[346px] md:h-[458px] lg:w-[435px] lg:h-[576px] bg-cover sm:left-auto sm:right-auto sm:bottom-0 md:right-[30px] lg:right-[40px]"></div>
            <div className="z-10 flex flex-col gap-8 sm:gap-16 container md:gap-16">
              <div className="flex flex-col gap-4">
                <h1 className="max-w-[17ch] leading-[110%] text-4xl font-bold text-pes_white lg:text-5xl">
                  Invest in your{" "}
                  <span className="text-pes_orange leading-[110%]">
                    children&apos;s future
                  </span>
                </h1>
                <p className="max-w-[38ch] text-pes_lightgray text-lg">
                  We provide the best learning experience for children, and our
                  courses & certifications are recognized by government
                  institutions.
                </p>
              </div>
              <div className="flex gap-4 md:gap-8 sm:justify-between md:justify-start">
                <button className="h-fit rounded-full bg-pes_orange px-8 py-4 text-base text-pes_white duration-200 hover:bg-orange-300">
                  Join Us
                </button>
                <div className="watch-video-button-and-link flex gap-2 items-center">
                  <button className="grid place-items-center rounded-full border-2 border-solid border-pes_orange bg-pes_white fill-pes_orange duration-200 hover:bg-pes_orange hover:fill-pes_white h-[58px] w-[58px]">
                    <svg
                      className="ml-[3px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="20"
                      viewBox="0 0 24 28"
                    >
                      <path d="M23 13.134C23.6667 13.5189 23.6667 14.4811 23 14.866L2 26.9904C1.33333 27.3753 0.500001 26.8942 0.500001 26.1244L0.500002 1.87564C0.500002 1.10584 1.33334 0.624718 2 1.00962L23 13.134Z" />
                    </svg>
                  </button>
                  <a
                    href="#"
                    className="text-sm font-bold text-pes_white underline"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className=" mx-auto px-[10px] py-[16px] sm:container sm:py-[20px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <h1 className="mb-4 text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-2xl">
          Trusted by International <span className="text-pes_orange">&</span>{" "}
          Government Institutions
        </h1>
        <div className="partners-wrapper relative h-[120px] w-full overflow-hidden md:h-[160px]">
          <div className="partners-belt absolute left-0 top-0 flex gap-8 md:gap-16">
            <div className="partner-1 aspect-square h-[120px] bg-cover md:h-[160px]"></div>
            <div className="partner-2 aspect-square h-[120px] bg-cover md:h-[160px]"></div>
            <div className="partner-3 aspect-[135/120] h-[120px] bg-cover md:h-[160px]"></div>
            <div className="partner-4 aspect-square h-[120px] bg-cover md:h-[160px]"></div>
            <div className="partner-5 aspect-[306/160] h-[120px] bg-cover md:h-[160px]"></div>
            {/* Repeated logos, Necessary for animation to work properly!! */}
            <div className="partner-1 aspect-square h-[120px] bg-cover md:h-[160px]"></div>
            <div className="partner-2 aspect-square h-[120px] bg-cover md:h-[160px]"></div>
            <div className="partner-3 aspect-[135/120] h-[120px] bg-cover md:h-[160px]"></div>
            <div className="partner-4 aspect-square h-[120px] bg-cover md:h-[160px]"></div>
            <div className="partner-5 aspect-[306/160] h-[120px] bg-cover md:h-[160px]"></div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="mx-auto">
        <svg
          className="mx-auto fill-pes_orange"
          xmlns="http://www.w3.org/2000/svg"
          width="236"
          height="3"
          viewBox="0 0 236 3"
        >
          <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H8.5C9.32843 0 10 0.671573 10 1.5C10 2.32843 9.32843 3 8.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z" />
          <path d="M14 1.5C14 0.671573 14.6716 0 15.5 0H52.5C53.3284 0 54 0.671573 54 1.5C54 2.32843 53.3284 3 52.5 3H15.5C14.6716 3 14 2.32843 14 1.5Z" />
          <path d="M58 1.5C58 0.671573 58.6716 0 59.5 0H176.5C177.328 0 178 0.671573 178 1.5C178 2.32843 177.328 3 176.5 3H59.5C58.6716 3 58 2.32843 58 1.5Z" />
          <path d="M182 1.5C182 0.671573 182.672 0 183.5 0H220.5C221.328 0 222 0.671573 222 1.5C222 2.32843 221.328 3 220.5 3H183.5C182.672 3 182 2.32843 182 1.5Z" />
          <path d="M226 1.5C226 0.671573 226.672 0 227.5 0H234.5C235.328 0 236 0.671573 236 1.5C236 2.32843 235.328 3 234.5 3H227.5C226.672 3 226 2.32843 226 1.5Z" />
        </svg>
      </section>

      {/* Success section */}
      <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <h1 className="mx-auto mb-4 max-w-[30ch] text-center text-xl font-bold text-pes_darkblue lg:text-2xl">
          Our <span className="text-pes_orange">Success</span>
        </h1>
        <div className="success-numbers flex flex-col items-center justify-center gap-y-4 md:flex-row md:flex-wrap md:gap-x-20 md:gap-y-8 lg:gap-0 lg:justify-between">
          <div className="statistic flex flex-col items-center lg:w-[200px]">
            <h1 className="text-4xl font-bold text-pes_logoblue">850+</h1>
            <h2 className="text-lg text-pes_darkbluegray">Students</h2>
          </div>
          <div className="statistic flex flex-col items-center lg:w-[200px]">
            <h1 className="text-4xl font-bold text-pes_logoblue">139</h1>
            <h2 className="text-lg text-pes_darkbluegray">Projects</h2>
          </div>
          <div className="statistic flex flex-col items-center lg:w-[200px]">
            <h1 className="text-4xl font-bold text-pes_logoblue">1.7K</h1>
            <h2 className="text-lg text-pes_darkbluegray">Hours of Support</h2>
          </div>
          <div className="statistic flex flex-col items-center lg:w-[200px]">
            <h1 className="text-4xl font-bold text-pes_logoblue">8</h1>
            <h2 className="text-lg text-pes_darkbluegray">Chief Experts</h2>
          </div>
          <div className="statistic flex flex-col items-center lg:w-[200px]">
            <h1 className="text-4xl font-bold text-pes_logoblue">2+</h1>
            <h2 className="text-lg text-pes_darkbluegray">
              Years of Experience
            </h2>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="mx-auto">
        <svg
          className="mx-auto fill-pes_orange"
          xmlns="http://www.w3.org/2000/svg"
          width="236"
          height="3"
          viewBox="0 0 236 3"
        >
          <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H8.5C9.32843 0 10 0.671573 10 1.5C10 2.32843 9.32843 3 8.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z" />
          <path d="M14 1.5C14 0.671573 14.6716 0 15.5 0H52.5C53.3284 0 54 0.671573 54 1.5C54 2.32843 53.3284 3 52.5 3H15.5C14.6716 3 14 2.32843 14 1.5Z" />
          <path d="M58 1.5C58 0.671573 58.6716 0 59.5 0H176.5C177.328 0 178 0.671573 178 1.5C178 2.32843 177.328 3 176.5 3H59.5C58.6716 3 58 2.32843 58 1.5Z" />
          <path d="M182 1.5C182 0.671573 182.672 0 183.5 0H220.5C221.328 0 222 0.671573 222 1.5C222 2.32843 221.328 3 220.5 3H183.5C182.672 3 182 2.32843 182 1.5Z" />
          <path d="M226 1.5C226 0.671573 226.672 0 227.5 0H234.5C235.328 0 236 0.671573 236 1.5C236 2.32843 235.328 3 234.5 3H227.5C226.672 3 226 2.32843 226 1.5Z" />
        </svg>
      </section>

      {/* Unleash Section */}
      <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-2xl">
            Your kid will <span className="text-pes_orange">love </span>
            our fun-filled{" "}
            <span className="text-pes_orange">courses & programs</span>
          </h1>
          <div className="paragraphs flex max-w-[830px] flex-col items-start gap-8 lg:flex-row lg:gap-4">
            <div className="flex flex-col  gap-4 text-left lg:gap-8 lg:text-center lg:text-lg text-pes_darkbluegray">
              <p>
                We believe that coding is an essential skill for the future, and
                we are committed to making it accessible and fun for children of
                all ages.
              </p>
              <p>
                Our academy offers a wide range of programming courses designed
                specifically for kids, taught by experienced instructors who are
                passionate about coding and teaching.
              </p>
            </div>
          </div>
          <div className="frames flex w-full flex-col gap-4 pt-4 lg:flex-row">
            <div className="frame learn-at-frame group mx-auto grid aspect-[320/218] w-full place-items-center rounded-[48px] border-r-8 bg-cover after:rounded-[48px] md:w-[491px]">
              <div className="z-10 flex flex-col gap-4">
                <h1 className=" text-center text-xl text-pes_white duration-200 group-hover:font-bold group-hover:text-pes_logoblue">
                  Learn at Centre
                </h1>
                <button className="h-fit rounded-full bg-pes_white px-8 py-4 text-sm text-pes_logoblue duration-200 hover:bg-orange-300 hover:text-white group-hover:bg-pes_orange group-hover:text-pes_white md:text-base">
                  Join Us
                </button>
              </div>
            </div>
            <div className="frame learn-online-frame group mx-auto grid aspect-[320/218] w-full place-items-center rounded-[48px] border-r-8 bg-cover after:rounded-[48px] md:w-[491px]">
              <div className="z-10 flex flex-col gap-4">
                <h1 className=" text-center text-xl text-pes_white duration-200 group-hover:font-bold group-hover:text-pes_logoblue">
                  Learn Online
                </h1>
                <button className="h-fit rounded-full bg-pes_white px-8 py-4 text-sm text-pes_logoblue duration-200 hover:bg-orange-300 hover:text-white group-hover:bg-pes_orange group-hover:text-pes_white md:text-base">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="mx-auto">
        <svg
          className="mx-auto fill-pes_orange"
          xmlns="http://www.w3.org/2000/svg"
          width="236"
          height="3"
          viewBox="0 0 236 3"
        >
          <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H8.5C9.32843 0 10 0.671573 10 1.5C10 2.32843 9.32843 3 8.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z" />
          <path d="M14 1.5C14 0.671573 14.6716 0 15.5 0H52.5C53.3284 0 54 0.671573 54 1.5C54 2.32843 53.3284 3 52.5 3H15.5C14.6716 3 14 2.32843 14 1.5Z" />
          <path d="M58 1.5C58 0.671573 58.6716 0 59.5 0H176.5C177.328 0 178 0.671573 178 1.5C178 2.32843 177.328 3 176.5 3H59.5C58.6716 3 58 2.32843 58 1.5Z" />
          <path d="M182 1.5C182 0.671573 182.672 0 183.5 0H220.5C221.328 0 222 0.671573 222 1.5C222 2.32843 221.328 3 220.5 3H183.5C182.672 3 182 2.32843 182 1.5Z" />
          <path d="M226 1.5C226 0.671573 226.672 0 227.5 0H234.5C235.328 0 236 0.671573 236 1.5C236 2.32843 235.328 3 234.5 3H227.5C226.672 3 226 2.32843 226 1.5Z" />
        </svg>
      </section>

      {/* Make your child section */}
      <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="businessman-img mx-auto aspect-[320/278] w-full bg-cover md:aspect-[526/351] md:w-[728px] lg:h-[425px] lg:w-[405px]"></div>
          <div className="flex flex-col gap-4 xl:gap-8">
            <h1 className="text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-left lg:text-2xl">
              Make your child a <br className="hidden lg:block" />
              <span className="text-pes_orange">future businessman</span>
            </h1>
            <p className="text-pes_darkbluegray lg:text-lg">
              Teaching entrepreneurship to kids is a great way to instill the
              valuable skills and the correct mindset early on.
            </p>
            <p className="text-pes_darkbluegray lg:text-lg">
              Our courses are approved by successful entrepreneurs, to teach
              entrepreneurship to children, to be able to start their own
              business an earlier age than others.{" "}
            </p>
            <p className="text-pes_darkbluegray lg:text-lg">
              Your children will be grateful for the opportunities you have
              provided for them through our education!
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="mx-auto">
        <svg
          className="mx-auto fill-pes_orange"
          xmlns="http://www.w3.org/2000/svg"
          width="236"
          height="3"
          viewBox="0 0 236 3"
        >
          <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H8.5C9.32843 0 10 0.671573 10 1.5C10 2.32843 9.32843 3 8.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z" />
          <path d="M14 1.5C14 0.671573 14.6716 0 15.5 0H52.5C53.3284 0 54 0.671573 54 1.5C54 2.32843 53.3284 3 52.5 3H15.5C14.6716 3 14 2.32843 14 1.5Z" />
          <path d="M58 1.5C58 0.671573 58.6716 0 59.5 0H176.5C177.328 0 178 0.671573 178 1.5C178 2.32843 177.328 3 176.5 3H59.5C58.6716 3 58 2.32843 58 1.5Z" />
          <path d="M182 1.5C182 0.671573 182.672 0 183.5 0H220.5C221.328 0 222 0.671573 222 1.5C222 2.32843 221.328 3 220.5 3H183.5C182.672 3 182 2.32843 182 1.5Z" />
          <path d="M226 1.5C226 0.671573 226.672 0 227.5 0H234.5C235.328 0 236 0.671573 236 1.5C236 2.32843 235.328 3 234.5 3H227.5C226.672 3 226 2.32843 226 1.5Z" />
        </svg>
      </section>

      {/* Testimonials Section */}
      <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <div className="mb-4 flex gap-4 lg:items-center">
          <div className="flex flex-col items-center gap-4 lg:w-[592px] lg:items-start lg:gap-8">
            <h1 className="max-w-[30ch] text-center text-xl font-bold text-pes_darkblue lg:text-start lg:text-2xl">
              Testimonials
            </h1>
            <p className="text-pes_darkbluegray lg:text-lg">
              PES has received more than 1.5k positive ratings from our happy
              clients. Are you one of them? Please give us your assessment!
            </p>
            <button className="h-fit w-fit rounded-full bg-pes_orange px-8 py-4 text-sm text-pes_white duration-200 hover:bg-orange-300 lg:text-base">
              Write Testimonial
            </button>
          </div>
          <div className="testimonials-image hidden h-[366px] w-[390px] bg-cover lg:block"></div>
        </div>
        {/* Testimonials Swiper */}
        <TestimonialsSwiper></TestimonialsSwiper>
      </section>

      {/* Looking for partnerships section */}
      {/* <section className="bg-pes_logoblue">
              <div className="mx-auto  px-[10px] py-[32px] sm:container md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
                  <div className="flex flex-col gap-8 lg:flex-row lg:gap-4">
                      <div className="flex flex-col items-start gap-4 text-left md:gap-8 lg:gap-16">
                          <h1 className="text-lg text-pes_white md:text-xl">
                              Looking for an experienced partner in the field
                              of Robotics and AI for your school?
                          </h1>
                          <button className="h-fit w-fit rounded-full bg-pes_orange px-8 py-4 text-sm text-pes_white duration-200 hover:bg-orange-300 md:text-lg">
                              Contact Us
                          </button>
                      </div>
                      <div className="partnerships-image aspect-[320/213] rounded-[16px] bg-cover sm:w-full"></div>
                  </div>
              </div>
          </section> */}
    </div>
  );
}
