
import { redirect } from "next/navigation";
import { auth } from "./auth";

export default async function Home() {
  const session = await auth();
  // console.log(session);
  // if (!session) redirect("/api/auth/signIn");
  if (!session) redirect("/login");

  return (
    <main className="">
      <h1 className="text-2xl"> Welcome to Image Editor App </h1>
    </main>
  );
}
