// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/app/lib/prisma";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  const request = await fetch(
    "https://pes-website-nextjs-khs1s5l2h-sohyb01.vercel.app/api",
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  if (!request.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log("Didn't work");
  } else {
    const data = await request.json();
    const usersData = data.allUsers;
    console.log(usersData);
  }

  return (
    <>
      <h1>Form Test</h1>
    </>
  );
}
