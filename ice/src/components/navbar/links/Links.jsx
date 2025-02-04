"use client";

import styles from "./links.module.css"
import Link from "next/link";
import NavLink from "./navLink/navLink";
import { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import Button from "./button/Button";




const links = [
    {
        title: 'Courses',
        path: "/courses",
        icon: true,
    },
    {
        title: "About Us",
        path: "/about",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Hire a Talent",
        path: "/hire",
    },
    {
        title: "Workspace",
        path: "/workspace",
    },
    {
        title: "Partnership & Sponsorship",
        path: "/partnership",
    },
    {
        title: "Blogs & Activities",
        path: "/blogs",
    },

];
const Links = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className={styles.container}>
    <div className={styles.links}>
      {links.map((link=>(
        <NavLink item={link} key={link.title}/>
      )))}
    </div>
    <RiBarChartHorizontalLine className={styles.menuBar} onClick={() => setOpen((prev) => !prev)}/>
    {open && (
        <div className={styles.mobileLinks}>
      <hr className={styles.line}/>

             {links.map((link=>(
        <NavLink item={link} key={link.title}/>
        
      )))}
      <hr className={styles.line}/>
      
        <Button/>
        </div>
    )}
    </div>
  )
}

export default Links