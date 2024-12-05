"use client";

// next components
import Link from "next/link";
import { usePathname } from "next/navigation";

// react components
import { useState } from "react";

// ui
import {
  BsList,
  BsGraphUpArrow,
  BsPeopleFill,
  BsPersonVcardFill,
  BsLightbulbFill,
  BsGearFill,
  BsLightningChargeFill,
} from "react-icons/bs";

// utils
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isNavActive, setNavActive] = useState(false);
  return (
    <>
      <button
        onClick={() => setNavActive(!isNavActive)}
        className="h-max w-10 lg:hidden"
      >
        <BsList className="size-7" />
      </button>
      <div className="px-3 lg:w-full">
        <img src="/TESLA.svg" alt="" className="lg:mb-10" />
        <nav
          className={cn(
            "z-30 gap-2 bg-white transition-transform duration-300 max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-dvh max-lg:w-60 max-lg:p-4",
            isNavActive ? "translate-x-0" : "max-lg:-translate-x-full",
          )}
        >
          <div className="space-y-2">
            <NavItem path="/dashboard">
              <BsGraphUpArrow />
              Reports
            </NavItem>
            <NavItem path="/library">
              <BsLightningChargeFill />
              Library
            </NavItem>
            <NavItem path="/people">
              <BsPeopleFill />
              People
            </NavItem>
            <NavItem path="/activity">
              <BsPersonVcardFill />
              Activities
            </NavItem>
          </div>
          <div className="mb-3 mt-10 pl-3 text-sm font-medium text-foreground/90">
            Support
          </div>
          <div>
            <NavItem path="/su">
              <BsLightbulbFill />
              Get Started
            </NavItem>
            <NavItem path="/library">
              <BsGearFill />
              Settings
            </NavItem>
          </div>
        </nav>
        <div
          onClick={() => setNavActive(!isNavActive)}
          className={cn(
            "fixed inset-0 z-20 bg-black/15 lg:hidden",
            isNavActive ? "" : "hidden",
          )}
        ></div>
      </div>
    </>
  );
}

function NavItem({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  const pathname = usePathname();
  const active = pathname.startsWith(path);
  return (
    <>
      <Link
        href={path}
        className={cn(
          "flex min-w-full items-center gap-3 rounded-xl px-6 py-3 text-sm font-medium text-foreground/80 transition-colors [&_svg]:size-5",
          active ? "bg-primary/10 text-primary" : "hover:text-primary",
        )}
      >
        {children}
      </Link>
    </>
  );
}
