// import { NextRequest, NextResponse } from "next/server";

import { NextResponse } from "next/server";
import { Key } from "react";

// import prisma from "@/app/lib/prisma";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getUsers() {
  // Prisma queries here
  const allUsers = await prisma.user.findMany();
  // console.log({ allUsers });
  return JSON.stringify({ allUsers });
}

export default async function Page() {
  const request = await getUsers();
  const useableData = JSON.parse(request);
  const usersArray = useableData.allUsers;

  return (
    <>
      <h1>Form Test</h1>
      <h1>Data is:</h1>
      {usersArray.map((user: any) => {
        return (
          <div key={user.id}>
            <h1>Name: {`${user.firstName} ${user.lastName}`}</h1>
            <h2>Age: {user.age}</h2>
          </div>
        );
      })}
    </>
  );
}
