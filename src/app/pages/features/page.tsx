import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* Integrations Section */}
      <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <div className="flex flex-col">
          <div className="integrations-images flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-4 lg:gap-16">
            <div className="integration-1 bg-contain bg-center bg-no-repeat w-[134px] h-[134px] sm:w-[160px] sm:h-[160px] lg:h-[200px] lg:w-[200px]"></div>
            <div className="integration-2 bg-contain bg-center bg-no-repeat w-[134px] h-[134px] sm:w-[160px] sm:h-[160px] lg:h-[200px] lg:w-[200px]"></div>
            <div className="integration-3 bg-contain bg-center bg-no-repeat w-[134px] h-[134px] sm:w-[160px] sm:h-[160px] lg:h-[200px] lg:w-[200px]"></div>
            <div className="integration-4 bg-contain bg-center bg-no-repeat w-[134px] h-[134px] sm:w-[160px] sm:h-[160px] lg:h-[200px] lg:w-[200px]"></div>
          </div>
          <h1 className="mb-4 text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-2xl">
            <span className="text-pes_orange">45+</span> Educational tools and
            Platform <span className="text-pes_orange">integrations</span>
          </h1>
          <p className="text-left lg:text-center lg:text-lg text-pes_darkbluegray">
            PES has every tool your learning journey needs and comes
            per-integrated with more than 45+ tools, student information systems
            (SIS), and education platforms.
          </p>
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

      {/* Tools section 1*/}
      <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <div className="flex flex-col gap-4 items-center lg:flex-row-reverse">
          <div className="tool-img-1 bg-cover aspect-[407/367] w-full max-w-[407px]"></div>
          <div className="w-full">
            <h1 className="mb-4 text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-left lg:text-2xl">
              Tools for Teachers <span className="text-pes_orange">&</span>{" "}
              Students
            </h1>
            <p className="text-left lg:text-lg text-pes_darkbluegray">
              Session has a dynamic set of teaching tools built to be deployed
              and used during session. Instructor can handout assignments in
              real-time for students to complete and submit.
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

      {/* Tools section 2*/}
      <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <div className="flex flex-col gap-4 items-center lg:flex-row">
          <div className="tool-img-2 bg-cover aspect-[407/458] w-full max-w-[407px]"></div>
          <div className="w-full">
            <h1 className="mb-4 text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-left lg:text-2xl">
              Assessments, <span className="text-pes_orange">Quizzes</span>{" "}
              Tests
            </h1>
            <p className="text-left lg:text-lg text-pes_darkbluegray">
              We launch weekly and monthly live assignments, quizzes, and tests.
              Student results are automatically entered in the online gradebook.
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

      {/* Tools section 3*/}
      <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <div className="flex flex-col gap-4 items-center lg:flex-row-reverse">
          <div className="tool-img-3 bg-cover aspect-[407/303] w-full max-w-[407px]"></div>
          <div className="w-full">
            <h1 className="mb-4 text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-left lg:text-2xl">
              Evaluation Management{" "}
              <span className="text-pes_orange">System for Students</span>{" "}
            </h1>
            <p className="text-left lg:text-lg text-pes_darkbluegray">
              We provides tools to help run and manage the session, such as the
              Class Roster, Attendance, and more. With our gradebook,
              instructors can review and grade tests and quizzes in real-time
              and a report is sent to parents containing all the grades of their
              child every month.
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

      {/* Tools section 4*/}
      <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
        <div className="flex flex-col gap-4 items-center lg:flex-row">
          <div className="tool-img-4 bg-cover aspect-[407/278] w-full max-w-[407px]"></div>
          <div className="w-full">
            <h1 className="mb-4 text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-left lg:text-2xl">
              <span className="text-pes_orange">One-on-one</span> Discussions
            </h1>
            <p className="text-left lg:text-lg text-pes_darkbluegray">
              Instructors and assistant instructors can speak with students
              privately without leaving the session environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
