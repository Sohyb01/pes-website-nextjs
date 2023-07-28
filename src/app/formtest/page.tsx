// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/app/lib/prisma";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  const request = await fetch("http://localhost:3000/api", {
    method: "GET",
    cache: "no-cache",
  });
  const data = await request.json();
  const usersData = data.allUsers;
  console.log(usersData);

  return (
    <>
      <h1>{JSON.stringify(usersData)}</h1>
    </>
  );
}
