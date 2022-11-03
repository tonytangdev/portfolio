"use client";

import React, { useState } from "react";
import Links from "./Links";

type Props = {};

const Navbar = (props: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const links = [
    { title: "About", link: "/about" },
    { title: "Projects", link: "/projects" },
    { title: "Mentoring", link: "/mentoring" },
    { title: "World map", link: "/world-map" },
  ];

  const onOpenMenu = () => {
    setMenuIsOpen((val) => !val);
  };

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-none"></div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none hidden sm:block">
          <ul className="menu menu-horizontal p-0">
            <Links links={links} />
          </ul>
        </div>
        <button
          className="btn btn-square btn-ghost sm:hidden"
          onClick={onOpenMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`${
          menuIsOpen ? "block" : "hidden"
        } menu bg-base-100 w-full sm:hidden`}
      >
        <Links links={links} />
      </ul>
    </nav>
  );
};

export default Navbar;
