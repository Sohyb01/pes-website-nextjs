import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET (All Users)
export async function GET(request: Request, response: Response) {
  const allUsers = await prisma.user.findMany();
  return NextResponse.json({ allUsers });
}

// CREATE A NEW USER!
export async function POST(request: NextRequest, response: Response) {
  const body = await request.json();
  const newUser = await prisma.user.create({ data: body });
  return NextResponse.json({ newUser });
}

// DELETE A USER
export async function DELETE(request: NextRequest, response: Response) {
  const id = await request.json();
  const deletedUser = await prisma.user.delete({
    where: {
      id: 4,
    },
  });
  return NextResponse.json({ deletedUser });
}
