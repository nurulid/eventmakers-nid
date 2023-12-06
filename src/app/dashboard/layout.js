import DashboardLayout from "@/components/template/DashboardLayout";
import { Suspense } from "react";
import Loading from "./loading";

export default function Layout({ children }) {
  return (
    <DashboardLayout>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </DashboardLayout>
  );
}
