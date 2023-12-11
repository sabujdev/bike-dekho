"use client";
import { cn } from "@/lib/uitils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { buttonVariants } from "../ul/Button";
import { getTransition } from "../ul/getTransition";

const navContainer = [
  { href: "/", label: "Home" },
  { href: "/#shop", label: "Shop" },
  { href: "/#ews", label: "News" },
  { href: "/#Contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.header
        initial={{ translateY: "100vh" }}
        animate={{ translateY: 0 }}
        transition={getTransition(0.35, 1.5)}
        className=" h-20 w-full p-20 bg-blue-500 flex justify-center items-center"
      >
        <div className="wrapper flex justify-around bg-green-300">
          <nav className="flex justify-center items-center">
            <ul className="">
              <li>
                <Link href="/" className="text-3xl font-bold">
                  Biki Dekho
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className="flex gap-9 justify-center items-center">
              {navContainer.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "link-item",
                      pathname === item.href ? "text-black" : "text-black/50"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/login"
                  className={cn(buttonVariants({ variant: "secondary" }))}
                >
                  {" "}
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
