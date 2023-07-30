import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center p-10">
      <h1 className="text-center text-2xl">Dashboard page</h1>
      <Link href="/home" className="text-pes_lightblue">
        Back to home
      </Link>
    </div>
  );
}
