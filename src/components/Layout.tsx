import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "./Header";
import { AppSidebar } from "./app-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="bg-[#F9FAFB] w-full">
          <Header />
          <div className="bg-white px-7 h-[1500px] py-6">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
