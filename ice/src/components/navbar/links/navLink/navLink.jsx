"use client";

import { usePathname } from 'next/navigation'
import styles from './navLink.module.css'
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io"


const NavLink = ({item}) => {
    const pathName = usePathname();


  return (
    
        <Link href={item.path} 
                className={`${styles.container} ${
                    pathName === item.path && styles.active
            }`}
            >
            {item.title}
            {item.icon && <IoIosArrowDown className={styles.arrow}/>}
        </Link>
    
  )
}

export default NavLink