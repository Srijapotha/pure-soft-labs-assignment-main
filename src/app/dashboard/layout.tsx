// components
import Navbar from "@/components/Navbar/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed left-0 top-0 z-10 flex h-max w-full items-center justify-between bg-white px-3 py-3 shadow-custom lg:bottom-0 lg:h-dvh lg:w-64 lg:flex-col lg:items-start lg:rounded-r-3xl lg:py-10">
        <Navbar />
        <div className="h-max w-max lg:w-full lg:border-t lg:px-4 lg:pt-7">
          <img
            className="size-9 rounded-full lg:mb-2 lg:size-10"
            src="https://placehold.co/64x64?text=S"
            alt="User Avatar"
          />
          <span className="font-semibold max-lg:hidden">Sam Wheeler</span>
          <p className="text-sm text-muted-foreground max-lg:hidden">
            samwheeler@example.com
          </p>
        </div>
      </header>

      <div className="max-lg:pt-16 lg:pl-64">
        <main className="px-4 lg:px-8 2xl:px-14">{children}</main>
        <footer></footer>
      </div>
    </>
  );
}
