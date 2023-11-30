import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-8 py-6">
        <div className="flex items-stretch justify-between">
          <div className="font-bold">EventMakers</div>
          <div className="flex space-x-4">
            <Link href={"/login"}>Login</Link>
            <Link href={"/dashboard"}>Dashboard</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
