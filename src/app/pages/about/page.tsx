"use client";

import { useState } from "react";
import members from "../../data/members";

const About = () => {
  const [founderData] = useState(members.founders);
  const [memberData] = useState(members.members);
  return (
    <div>
      {/* About us section */}
      <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[20px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-2xl">
            About <span className="text-pes_orange">Us</span>
          </h1>
          <div className="video-and-paragraphs flex flex-col items-start gap-8 lg:flex-row lg:gap-4">
            <div className="flex flex-col  gap-4 text-left md:gap-8 lg:text-lg">
              <p>
                Programmer’s Elite School is an educational solution which
                teaches highly-valued programming and artificial intelligence
                skills to children.
              </p>
              <p>
                We introduce the concepts of computer science, software
                engineering and artificial intelligence through interactive
                activities, games, and engaging projects.
              </p>
            </div>

            <div className="video-and-video-subtext flex w-full flex-col items-center gap-2  sm:gap-4">
              <div className="pes-video grid aspect-video w-full place-items-center rounded-[40px] border-2 border-solid border-pes_darkblue bg-cover">
                <button className="grid h-[53px] w-[53px] place-items-center rounded-full border-2 border-solid border-pes_darkblue bg-pes_white fill-pes_darkblue duration-200 hover:border-pes_orange hover:bg-pes_orange hover:fill-pes_white md:h-16 md:w-16">
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
              </div>
              <div className="w-[320px] text-center text-sm sm:w-[440px] md:w-[688px]  md:text-base lg:w-[492px] lg:text-sm">
                PES Leader granting a shield to the minister of youth and sports
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

      {/* Trusted By Section */}
      <section className=" mx-auto px-[10px] py-[16px] sm:container sm:py-[20px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <h1 className="mb-4 text-center text-xl font-bold text-pes_darkblue md:text-center lg:text-2xl">
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

      {/* Founders & Intructors / Members Section */}
      <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[20px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <div className="flex flex-col items-center gap-4 md:gap-16">
          {/* Founders */}
          <div className="flex flex-col items-center">
            <h1 className="mb-4 text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-2xl">
              Our <span className="text-pes_orange">Founders</span>
            </h1>
            {/*Cards Container */}
            <div className="members-container flex flex-wrap justify-center gap-4 md:gap-8">
              {/* Individual cards */}
              {founderData.map((person) => {
                return (
                  <div
                    key={person.id}
                    className="member-card flex flex-col items-center gap-2 bg-pes_white p-2 shadow-xl md:gap-4 md:p-4"
                  >
                    {/* Image and bg with socials */}
                    <div
                      style={{
                        // backgroundImage: `url('/@fs/D:/Programs/VSCode/Other ReactJS practice/pes-website-tailwind/pes-website-tailwind/src${person.img}')`,
                        backgroundImage: `url(${person.img})`,
                      }}
                      className="card-img relative flex h-[185px] w-[185px] rounded-sm bg-cover md:h-[300px] md:w-[300px]"
                    >
                      <div className="member-socials group z-10 flex h-full w-full items-center justify-center gap-8 bg-transparent duration-200 hover:bg-blue-800 hover:bg-opacity-30">
                        <a
                          className=" hidden fill-pes_white duration-200 hover:fill-pes_orange group-hover:inline-block"
                          href={person.linkedin}
                          target="_blank"
                          id="linkedin"
                        >
                          <svg
                            className=" h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M4.47679 20H0.330357V6.64702H4.47679V20ZM2.40134 4.82555C1.07545 4.82555 0 3.72732 0 2.40139C9.49017e-09 1.7645 0.252998 1.1537 0.703336 0.703352C1.15367 0.253003 1.76446 0 2.40134 0C3.03821 0 3.649 0.253003 4.09934 0.703352C4.54968 1.1537 4.80268 1.7645 4.80268 2.40139C4.80268 3.72732 3.72679 4.82555 2.40134 4.82555ZM19.9955 20H15.858V13.4999C15.858 11.9507 15.8268 9.96406 13.7022 9.96406C11.5464 9.96406 11.2161 11.6471 11.2161 13.3882V20H7.07411V6.64702H11.0509V8.46849H11.1089C11.6625 7.41936 13.0147 6.31219 15.0321 6.31219C19.2286 6.31219 20 9.07565 20 12.665V20H19.9955Z" />
                          </svg>
                        </a>
                        <a
                          className=" hidden fill-pes_white duration-200 hover:fill-pes_orange group-hover:inline-block"
                          href={person.instagram}
                          target="_blank"
                          id="instagram"
                        >
                          <svg
                            className=" h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 21 20"
                          >
                            <path d="M10.5022 4.87225C7.66453 4.87225 5.37563 7.16166 5.37563 10C5.37563 12.8383 7.66453 15.1277 10.5022 15.1277C13.3399 15.1277 15.6288 12.8383 15.6288 10C15.6288 7.16166 13.3399 4.87225 10.5022 4.87225ZM10.5022 13.3337C8.66843 13.3337 7.16927 11.8387 7.16927 10C7.16927 8.16133 8.66397 6.6663 10.5022 6.6663C12.3405 6.6663 13.8352 8.16133 13.8352 10C13.8352 11.8387 12.336 13.3337 10.5022 13.3337ZM17.0343 4.6625C17.0343 5.32746 16.4989 5.85853 15.8385 5.85853C15.1737 5.85853 14.6428 5.32299 14.6428 4.6625C14.6428 4.00201 15.1782 3.46647 15.8385 3.46647C16.4989 3.46647 17.0343 4.00201 17.0343 4.6625ZM20.4297 5.87638C20.3539 4.27424 19.988 2.85507 18.8146 1.68582C17.6456 0.516568 16.2267 0.150619 14.6249 0.070289C12.9741 -0.0234297 8.02593 -0.0234297 6.37507 0.070289C4.77775 0.146156 3.3589 0.512105 2.18544 1.68136C1.01199 2.85061 0.650586 4.26978 0.570273 5.87192C0.476576 7.52315 0.476576 12.4724 0.570273 14.1236C0.646124 15.7258 1.01199 17.1449 2.18544 18.3142C3.3589 19.4834 4.77328 19.8494 6.37507 19.9297C8.02593 20.0234 12.9741 20.0234 14.6249 19.9297C16.2267 19.8538 17.6456 19.4879 18.8146 18.3142C19.9835 17.1449 20.3494 15.7258 20.4297 14.1236C20.5234 12.4724 20.5234 7.52761 20.4297 5.87638ZM18.297 15.8953C17.949 16.7701 17.2752 17.4439 16.3963 17.7965C15.08 18.3186 11.9568 18.1981 10.5022 18.1981C9.04769 18.1981 5.91997 18.3142 4.6082 17.7965C3.73369 17.4484 3.05996 16.7745 2.70747 15.8953C2.18544 14.5788 2.30591 11.4549 2.30591 10C2.30591 8.54513 2.18991 5.41671 2.70747 4.10465C3.05549 3.22995 3.72922 2.55606 4.6082 2.2035C5.92443 1.68136 9.04769 1.80185 10.5022 1.80185C11.9568 1.80185 15.0845 1.68582 16.3963 2.2035C17.2708 2.5516 17.9445 3.22548 18.297 4.10465C18.819 5.42118 18.6985 8.54513 18.6985 10C18.6985 11.4549 18.819 14.5833 18.297 15.8953Z" />
                          </svg>
                        </a>
                        <a
                          className=" hidden fill-pes_white duration-200 hover:fill-pes_orange group-hover:inline-block"
                          href={person.facebook}
                          target="_blank"
                          id="facebook"
                        >
                          <svg
                            className=" h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M20 10.0609C20 4.50304 15.5242 0 10 0C4.47581 0 0 4.50304 0 10.0609C0 15.0824 3.65685 19.2446 8.4375 20V12.9692H5.89718V10.0609H8.4375V7.84422C8.4375 5.32292 9.92944 3.93022 12.2145 3.93022C13.3089 3.93022 14.4532 4.12657 14.4532 4.12657V6.60122H13.1919C11.95 6.60122 11.5625 7.37688 11.5625 8.17241V10.0609H14.3359L13.8923 12.9692H11.5625V20C16.3431 19.2446 20 15.0824 20 10.0609Z" />
                          </svg>
                        </a>
                      </div>
                      {/* Socials Here */}
                    </div>
                    <h3 className="text-base text-pes_logoblue md:text-xl">
                      {person.name}
                    </h3>
                    <p className="text-sm text-pes_darkbluegray md:text-base">
                      {person.role}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Members */}
          <div className="flex flex-col items-center">
            <h1 className="mb-4 text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-2xl">
              Our <span className="text-pes_orange">Qualified </span>
              Instructors
            </h1>
            {/*Cards Container */}
            <div className="members-container flex flex-wrap justify-center gap-4 md:gap-8">
              {/* Individual cards */}
              {memberData.map((person) => {
                return (
                  <div
                    key={person.id}
                    className="member-card flex flex-col items-center gap-2 bg-pes_white p-2 shadow-xl md:gap-4 md:p-4"
                  >
                    {/* Image and bg with socials */}
                    <div
                      style={{
                        // backgroundImage: `url('/@fs/D:/Programs/VSCode/Other ReactJS practice/pes-website-tailwind/pes-website-tailwind/src${person.img}')`,
                        backgroundImage: `url(${person.img})`,
                      }}
                      className="card-img relative flex h-[185px] w-[185px] rounded-sm bg-cover md:h-[300px] md:w-[300px]"
                    >
                      <div className="member-socials group z-10 flex h-full w-full items-center justify-center gap-8 bg-transparent duration-200 hover:bg-blue-800 hover:bg-opacity-30">
                        <a
                          className=" hidden fill-pes_white duration-200 hover:fill-pes_orange group-hover:inline-block"
                          href={person.linkedin}
                          target="_blank"
                          id="linkedin"
                        >
                          <svg
                            className=" h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M4.47679 20H0.330357V6.64702H4.47679V20ZM2.40134 4.82555C1.07545 4.82555 0 3.72732 0 2.40139C9.49017e-09 1.7645 0.252998 1.1537 0.703336 0.703352C1.15367 0.253003 1.76446 0 2.40134 0C3.03821 0 3.649 0.253003 4.09934 0.703352C4.54968 1.1537 4.80268 1.7645 4.80268 2.40139C4.80268 3.72732 3.72679 4.82555 2.40134 4.82555ZM19.9955 20H15.858V13.4999C15.858 11.9507 15.8268 9.96406 13.7022 9.96406C11.5464 9.96406 11.2161 11.6471 11.2161 13.3882V20H7.07411V6.64702H11.0509V8.46849H11.1089C11.6625 7.41936 13.0147 6.31219 15.0321 6.31219C19.2286 6.31219 20 9.07565 20 12.665V20H19.9955Z" />
                          </svg>
                        </a>
                        <a
                          className=" hidden fill-pes_white duration-200 hover:fill-pes_orange group-hover:inline-block"
                          href={person.instagram}
                          target="_blank"
                          id="instagram"
                        >
                          <svg
                            className=" h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 21 20"
                          >
                            <path d="M10.5022 4.87225C7.66453 4.87225 5.37563 7.16166 5.37563 10C5.37563 12.8383 7.66453 15.1277 10.5022 15.1277C13.3399 15.1277 15.6288 12.8383 15.6288 10C15.6288 7.16166 13.3399 4.87225 10.5022 4.87225ZM10.5022 13.3337C8.66843 13.3337 7.16927 11.8387 7.16927 10C7.16927 8.16133 8.66397 6.6663 10.5022 6.6663C12.3405 6.6663 13.8352 8.16133 13.8352 10C13.8352 11.8387 12.336 13.3337 10.5022 13.3337ZM17.0343 4.6625C17.0343 5.32746 16.4989 5.85853 15.8385 5.85853C15.1737 5.85853 14.6428 5.32299 14.6428 4.6625C14.6428 4.00201 15.1782 3.46647 15.8385 3.46647C16.4989 3.46647 17.0343 4.00201 17.0343 4.6625ZM20.4297 5.87638C20.3539 4.27424 19.988 2.85507 18.8146 1.68582C17.6456 0.516568 16.2267 0.150619 14.6249 0.070289C12.9741 -0.0234297 8.02593 -0.0234297 6.37507 0.070289C4.77775 0.146156 3.3589 0.512105 2.18544 1.68136C1.01199 2.85061 0.650586 4.26978 0.570273 5.87192C0.476576 7.52315 0.476576 12.4724 0.570273 14.1236C0.646124 15.7258 1.01199 17.1449 2.18544 18.3142C3.3589 19.4834 4.77328 19.8494 6.37507 19.9297C8.02593 20.0234 12.9741 20.0234 14.6249 19.9297C16.2267 19.8538 17.6456 19.4879 18.8146 18.3142C19.9835 17.1449 20.3494 15.7258 20.4297 14.1236C20.5234 12.4724 20.5234 7.52761 20.4297 5.87638ZM18.297 15.8953C17.949 16.7701 17.2752 17.4439 16.3963 17.7965C15.08 18.3186 11.9568 18.1981 10.5022 18.1981C9.04769 18.1981 5.91997 18.3142 4.6082 17.7965C3.73369 17.4484 3.05996 16.7745 2.70747 15.8953C2.18544 14.5788 2.30591 11.4549 2.30591 10C2.30591 8.54513 2.18991 5.41671 2.70747 4.10465C3.05549 3.22995 3.72922 2.55606 4.6082 2.2035C5.92443 1.68136 9.04769 1.80185 10.5022 1.80185C11.9568 1.80185 15.0845 1.68582 16.3963 2.2035C17.2708 2.5516 17.9445 3.22548 18.297 4.10465C18.819 5.42118 18.6985 8.54513 18.6985 10C18.6985 11.4549 18.819 14.5833 18.297 15.8953Z" />
                          </svg>
                        </a>
                        <a
                          className=" hidden fill-pes_white duration-200 hover:fill-pes_orange group-hover:inline-block"
                          href={person.facebook}
                          target="_blank"
                          id="facebook"
                        >
                          <svg
                            className=" h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M20 10.0609C20 4.50304 15.5242 0 10 0C4.47581 0 0 4.50304 0 10.0609C0 15.0824 3.65685 19.2446 8.4375 20V12.9692H5.89718V10.0609H8.4375V7.84422C8.4375 5.32292 9.92944 3.93022 12.2145 3.93022C13.3089 3.93022 14.4532 4.12657 14.4532 4.12657V6.60122H13.1919C11.95 6.60122 11.5625 7.37688 11.5625 8.17241V10.0609H14.3359L13.8923 12.9692H11.5625V20C16.3431 19.2446 20 15.0824 20 10.0609Z" />
                          </svg>
                        </a>
                      </div>
                      {/* Socials Here */}
                    </div>
                    <h3 className="text-base text-pes_logoblue md:text-xl">
                      {person.name}
                    </h3>
                    <p className="text-sm text-pes_darkbluegray md:text-base">
                      {person.role}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Signup Section */}
      {/* <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[20px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
                <div className="flex flex-col items-start gap-4 bg-pes_lightblue p-2 sm:p-4 lg:p-8">
                    <h3 className="max-w-[20ch] text-start text-base text-pes_white md:text-xl lg:text-2xl">
                        Want to share your knowledge? Join us as an Instructor
                    </h3>
                    <button className="h-fit w-fit rounded-full bg-pes_white px-8 py-4 text-sm text-pes_logoblue duration-200 hover:bg-orange-300 md:text-lg">
                        Learn More
                    </button>
                </div>
            </section> */}
    </div>
  );
};

export default About;
