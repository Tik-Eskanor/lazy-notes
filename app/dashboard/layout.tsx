import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/AppSidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme='system'>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex min-h-screen w-full flex-col">
          <Header />
          <main className="relative px-4 pt-10 xl:px-8">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
