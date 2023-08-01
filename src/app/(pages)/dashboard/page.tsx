import Link from "next/link";
import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  if (session.user.role === "admin") {
    return (
      <div className="w-full h-[100vh] flex flex-col items-center justify-center p-10">
        <h1 className="text-center text-2xl">Admin Dashboard</h1>
        <Link href="/" className="text-pes_lightblue">
          Back to home
        </Link>
      </div>
    );
  }

  if (session.user.role === "manager") {
    return (
      <div className="w-full h-[100vh] flex flex-col items-center justify-center p-10">
        <h1 className="text-center text-2xl">Manager Dashboard</h1>
        <Link href="/home" className="text-pes_lightblue">
          Back to home
        </Link>
      </div>
    );
  }

  if (session.user.role === "student")
    return (
      <div className="w-full h-[100vh] flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl">
          You do not have permission to view this page!
        </h1>
        <Link href="/" className="text-pes_lightblue">
          Back to home
        </Link>
      </div>
    );
}
