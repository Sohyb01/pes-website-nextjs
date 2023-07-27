"use client";

import Link from "next/link";

const error = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center p-10">
      <h1 className="text-center text-2xl">Page not added yet, Coming soon!</h1>
      <Link href="/home" className="text-pes_lightblue">
        Back to home
      </Link>
    </div>
  );
};

export default error;
