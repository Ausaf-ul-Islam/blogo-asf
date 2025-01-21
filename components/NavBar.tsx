"use client";
import { auth } from '@/app/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { FaHome, FaInfoCircle, FaEnvelope, FaSignInAlt, FaUser, FaTachometerAlt } from 'react-icons/fa';

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
//checking the user active Status
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
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
        <div className="buttons gap-2 flex text-sm">
          {user ? (
            <>
              <Link
                className="px-4 py-2 border-2 border-gray-400 rounded-md text-gray-300 hover:border-purple-600 transition-colors duration-200 ease-in-out flex items-center"
                href="/profilePage"
              >
                <FaUser className="mr-1" /> Profile
              </Link>
              <Link
                className="px-4 py-2 border-2 border-gray-400 rounded-md text-gray-300 hover:border-purple-600 transition-colors duration-200 ease-in-out flex items-center"
                href="/dashboard"
              >
                <FaTachometerAlt className="mr-1" /> Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                className="px-4 py-2 border-2 border-gray-400 rounded-md text-gray-300 hover:border-purple-600 transition-colors duration-200 ease-in-out flex items-center"
                href="/login"
              >
                <FaSignInAlt className="mr-1" /> Login
              </Link>
              <Link
                className="px-4 py-2 border-2 border-gray-400 rounded-md text-gray-300 hover:border-purple-600 transition-colors duration-200 ease-in-out flex items-center"
                href="/signup"
              >
                <FaUser className="mr-1" /> Signup
              </Link>
            </>
          )}
        </div>
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
