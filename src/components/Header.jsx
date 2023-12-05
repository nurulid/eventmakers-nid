import Link from "next/link";
import { useUser } from "@/components/auth/hooks/useUser";

export const Header = () => {
  const { user } = useUser();
  const isUser = user?.role === "USER";

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl p-8">
        <div className="flex items-stretch justify-between">
          <div>
            <Link href={"/"} className="font-bold">
              EventMakers
            </Link>
          </div>
          <div className="space-x-4">
            {isUser ? (
              <>
                <Link href={"/"} className="link">
                  Log out
                </Link>
                <Link href={"/dashboard"} className="btn-link">
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link href={"/login"} className="link">
                  Login
                </Link>
                <Link href={"/register"} className="btn-link">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
