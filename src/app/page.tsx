
import { redirect } from "next/navigation";
import { auth } from "./auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  // console.log(session);
  if (!session) redirect("/api/auth/signin");


  return (
    <main className="">
      <h1 className="text-2xl"> Welcome to Image Editor </h1>
      <Link href='/api/auth/signout'>Logout</Link>
    </main>
  );
}
