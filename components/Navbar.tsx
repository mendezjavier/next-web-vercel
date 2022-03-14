import Link from "next/link";
import React from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["menu-ctn"]}>
      {menuItems.map((item, idx) => <ActiveLink key={idx} href={item.href} text={item.text}/>)}
    </nav>
  );
};
