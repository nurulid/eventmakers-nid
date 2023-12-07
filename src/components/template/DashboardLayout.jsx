import { HeaderDashboard } from "@/components/dashboard/components/HeaderDashboard";
import { Footer } from "@/components/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <HeaderDashboard />
        <main className="max-w-7xl w-full mx-auto mb-10 pt-12 px-10">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
