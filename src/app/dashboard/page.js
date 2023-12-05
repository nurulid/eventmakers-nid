
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export default function Page() {
  // Ambil cookie dari browser
  const cookieStore = cookies();
  const token = cookieStore.get("token").value; // "token" -> sesuaikan dengan nama key
  // console.log(token);

  // Decode token
  const payload = verify(token, process.env.NEXT_PUBLIC_SECRET_KEY);
  console.log(payload);

  return (
    // TODO: BIKIN DETAIL USER, WELCOME BLA BLA BLA, DISPLAY BUTTON CREATE EVENT
    <>
      <h1 className="text-4xl font-semibold mb-10">Dashboard</h1>
      <h2 className="text-4xl mb-10">Hi, {payload.name}!</h2>
      <p>Welcome to your dashboard.</p>
    </>
  );
}
