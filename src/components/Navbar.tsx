'use client';
import React, { useState } from "react";
import { Menu, MenuItem, } from "./ui/Navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null)
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-5x1 mx-20 z-50")}>

        <Menu setActive={setActive}>

        <MenuItem setActive={setActive} active={active} item="Home">
            <Link href="/Home" onClick={() => setActive("Home")}>Home</Link>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="about">
            <Link href="/about"  onClick={() => setActive("About")}>about</Link>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="contact">
            <Link href="/contact"  onClick={() => setActive("contact")}>contact</Link>
        </MenuItem>
        </Menu>
        
    </div>
  )
}

export default Navbar