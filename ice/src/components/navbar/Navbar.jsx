"use client";

import styles from "./navbar.module.css"
import Links from "./links/Links"
import Image from "next/image"
import Button from "./links/button/Button";
import Link from "next/link";




const Navbar = () => {
  

  return (
    <div className={styles.container}>
        
      
          <Link href="/" className={styles.myImg}><Image src="/image/logo.png" className={styles.myImg}
              alt="Logo"
              width={90}
              height={90}/></Link>
        

              
                  <div className={styles.navItems}>
            
                  <div className={styles.links}>
                      <Links/>
                  </div>
                  <div className={styles.but}>
                    <Button/>
                  </div>
                    
                  </div>
        
             
    </div>
  )
}

export default Navbar