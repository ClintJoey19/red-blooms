import RootNavbar from "@/components/root/navbar/RootNavbar";
import RootFooter from "@/components/root/footer/RootFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full flex flex-col gap-24 justify-center">
      <RootNavbar />
      {children}
      <RootFooter />
    </main>
  );
}
