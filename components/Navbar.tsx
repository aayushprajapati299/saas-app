"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

const Navbar = () => {
    const { isLoaded, userId } = useAuth();

    return (
        <nav className="navbar">
            <Link href={"/"}>
                <div className={"flex items-center gap-2.5 cursor-pointer"}>
                    <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
                </div>
            </Link>

            <div className={"flex items-center gap-8"}>
                <NavItems />

                {isLoaded && !userId && (
                    <SignInButton mode="modal">
                        <button className="btn-signin">Sign In</button>
                    </SignInButton>
                )}

                {isLoaded && userId && (
                    <UserButton />
                )}
            </div>
        </nav>
    );
};

export default Navbar;