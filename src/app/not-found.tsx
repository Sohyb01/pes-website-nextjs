"use client";

import Link from "next/link";

const error = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default error;
