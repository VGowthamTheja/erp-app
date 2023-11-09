"use client";

// components/Header.js
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { getItem } from "@/utils/storage";
import {
  MaterialSymbolsManageAccounts,
  SolarLogout3BoldDuotone,
} from "./common/Icons";

const Header = () => {
  const user = useRef<string | null>();

  useEffect(() => {
    user.current = getItem("user");
  }, []);

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="text-white font-bold text-xl">
          Lore.erp
        </Link>

        {/* Navigation */}
        {user.current ? (
          <nav className="space-x-4">
            <Link href={"/login"} className="text-white hover:text-gray-300">
              Login
            </Link>
            <Link
              href={"/register"}
              className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
            >
              Register
            </Link>
          </nav>
        ) : (
          <Dropdown>
            <DropdownTrigger>
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem
                startContent={
                  <MaterialSymbolsManageAccounts className="text-gray-600" />
                }
                key="new"
              >
                Profile
              </DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem
                startContent={
                  <SolarLogout3BoldDuotone className="text-gray-600 hover:text-white" />
                }
                key="delete"
                className="text-danger"
                color="danger"
              >
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </div>
    </header>
  );
};

export default Header;
