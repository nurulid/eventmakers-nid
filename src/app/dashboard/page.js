
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
    <>
      <h2 className="text-4xl mb-10">Hi, <span className="capitalize">{payload.name}</span>!</h2>
      <p>Welcome to your dashboard.</p>
    </>
  );
}
