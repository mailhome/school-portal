import Logo from "@/components/logo";
import PortalMenu from "@/components/portal/portal";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-full w-full gap-10">
        <Logo />
        <PortalMenu />
      </div>
    </>
  );
}
