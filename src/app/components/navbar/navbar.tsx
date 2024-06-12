import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import icon1 from '../../../../public/img/icons/Home.svg'
import icon2 from '../../../../public/img/icons/New-Group.svg'
import icon3 from '../../../../public/img/icons/Discover.svg'
import icon4 from '../../../../public/img/icons/Profile.svg'
import icon1Active from '../../../../public/img/icons/HomeActive.svg'
import icon2Active from '../../../../public/img/icons/New-GroupActive.svg'
import icon3Active from '../../../../public/img/icons/DiscoverActive.svg'
import icon4Active from '../../../../public/img/icons/ProfileActive.svg'

export default function NavBar() {
  return (
    <>
        <div className={styles.NavBarContainer}>
            <div>
                <Image src={icon1Active} width={25} height={25} alt="" />
                <p className={styles.TagActive}>Home</p>
            </div>
            <div>
                <Image src={icon2} width={25} height={25} alt="" />
                <p className={styles.Tag}>New Group</p>
            </div>
            <div>
                <Image src={icon3} width={25} height={25} alt="" />
                <p className={styles.Tag}>Discover</p>
            </div>
            <div>
                <Image src={icon4} width={25} height={25} alt="" />
                <p className={styles.Tag}>Profile</p>
            </div>
        </div>
    </>

  )
}
