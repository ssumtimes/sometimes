import ILogo from "@/icon/global/logo";
import IMenuBtn from "@/icon/nav/menuBtn";
import { Navbar, NavbarContent } from "@nextui-org/react";

export default function TopNavBar() {
  return (
    <Navbar height="60px">
      <NavbarContent>
        <IMenuBtn />
      </NavbarContent>
      <NavbarContent justify="center">
        <ILogo />
      </NavbarContent>
      <NavbarContent justify="end">
        <span className=" font-extralight text-xs">로그인</span>
      </NavbarContent>
    </Navbar>
  );
}
