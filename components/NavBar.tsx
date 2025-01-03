"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  // Start progress bar on page navigation
  useEffect(() => {
    setProgress(30);
    setTimeout(() => setProgress(70), 100);
    setTimeout(() => setProgress(100), 800);
  }, [pathname]);

  // Reset progress bar after load
  useEffect(() => {
    setTimeout(() => setProgress(0), 900);
  }, []);

  return (
    <nav className="h-16 bg-background/50 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between z-10">
      {/* Top Loading Bar */}
      <LoadingBar
        color="#6028ff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {/* Logo */}
      <div className="text-lg font-bold md:text-xl">
        <Link href={"/"} aria-label="Blogo.asf Home">
          Blogo.asf
        </Link>
      </div>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex w-full justify-end items-center space-x-4">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Blog", path: "/blog" },
          { name: "Contact", path: "/contact" },
        ].map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className={`${pathname === link.path
                ? "text-purple-600 dark:text-purple-400 font-semibold"
                : ""
                } hover:text-purple-800 dark:hover:text-purple-300`}
              aria-label={link.name}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li className="buttons px-4 space-x-2">
          <Link
            href={"/authenticationForm"}
            className={buttonVariants({ variant: "default" })}
          >
            Login
          </Link>
          <Link
            href={"/authenticationForm"}
            className={buttonVariants({ variant: "default" })}
          >
            Sign Up
          </Link>
        </li>
      </ul>
      {/* Dark Mode Toggle */}
      <ModeToggle />
      {/* Mobile Navigation */}
      <div className="flex items-center justify-center md:hidden">
        <Sheet>
          <SheetTrigger aria-label="Open Mobile Menu">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
