"use client";
import { useAppContext } from "@/hooks/use-app-context";
import Link from "next/link";
import { useEffect } from "react";
import { navOptions } from "@/context/objects";
import CogBtn from "./ui/buton/cog-btn";
import BurgerBtn from "./ui/buton/burger-btn";
import Button from "./common/button";

const NavOptions = () => {
  return (
    <>
      {navOptions.map((option) => (
        <Link key={option.name} href={option.href} className={option.class}>
          {option.name}
        </Link>
      ))}
      <Button
        className="hidden sm:ml-auto sm:flex ml-4"
        variant="contained"
        style={{
          padding: 0,
          width: 24,
          height: 24,
        }}
      >
        <CogBtn />
      </Button>
    </>
  );
};

const Nav: React.FC = () => {
  const { theme } = useAppContext();
  const navStyles = `w-full fixed h-10 py-2 px-4 ${theme} z-[1000003]`;

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <nav className={`hidden sm:flex sm:items-center gap-2 ${navStyles}`}>
        <NavOptions />
      </nav>
      <nav className={`flex justify-between sm:hidden ${navStyles}`}>
        <BurgerBtn>
          <NavOptions />
        </BurgerBtn>
        <CogBtn />
      </nav>
    </>
  );
};

export default Nav;
