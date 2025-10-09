import SideNav from "../ui/components/sidenav"; // or @/app/ui/components/sidenav

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <SideNav />
      <div>{children}</div>
      </>
  );
}