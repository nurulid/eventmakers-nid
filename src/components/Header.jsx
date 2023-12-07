import Link from "next/link";
import { useUser } from "@/components/auth/hooks/useUser";
import { useLogout } from "./auth/hooks/useLogout";
import { Avatar, Button } from "@nextui-org/react";

export const Header = () => {
  const { user } = useUser();
  const { handleLogout } = useLogout();
  const isUser = user?.role === "USER";
  const userName = user?.name;

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <Link href={"/"} className="font-bold">
              EventMakers ID
            </Link>
          </div>
          <div className="space-x-4">
            {isUser ? (
              <>
                <span>Hi, <span className="capitalize">{userName}</span></span>
                <Link href={"/dashboard"} className="btn-link">
                  Dashboard
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="faded"
                  color="warning"
                  className="rounded-full"
                >
                  Log out
                </Button>
                {/* <Avatar name={userShortName} isBordered color="success" className="capitalize"/> */}
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
