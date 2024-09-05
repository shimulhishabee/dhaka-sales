"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";

function Header() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <header className="bg-background px-4 lg:px-6 h-14 flex items-center border-b">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>

      <div className="ml-auto flex items-center gap-4">
        <Button variant="outline" className="relative" onClick={() => {}}>
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
            {cartItems.length}
          </span>
        </Button>
        {/* <Button variant="secondary" className="ml-auto">
          Contact Sales
        </Button> */}
      </div>
    </header>
  );
}

export default Header;

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
