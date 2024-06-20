import React from 'react';
import Styles from './navbar.module.css';
import Image from 'next/image';
import Icon1 from '../../../../public/img/icons/Home.svg';
import Icon2 from '../../../../public/img/icons/NewActivity.svg';
import Icon3 from '../../../../public/img/icons/Discover.svg';
import Icon4 from '../../../../public/img/icons/Profile.svg';
import Icon1Active from '../../../../public/img/icons/HomeActive.svg';
import Icon2Active from '../../../../public/img/icons/NewActivityActive.svg';
import Icon3Active from '../../../../public/img/icons/DiscoverActive.svg';
import Icon4Active from '../../../../public/img/icons/ProfileActive.svg';
import Link from 'next/link';

interface NavBarProps {
  activePage: string;
}

const NavBar: React.FC<NavBarProps> = ({ activePage }) => {
  return (
    <div className={Styles.NavBarContainer}>
      <Link href='/'>
        <div className={Styles.NavButton}>
          <Image src={activePage === 'home' ? Icon1Active : Icon1} width={25} height={25} alt="Home" />
          <p className={activePage === 'home' ? Styles.TagActive : Styles.Tag}>Home</p>
        </div>
      </Link>
      <Link href='/pages/activity'>
        <div className={Styles.NavButton}>
          <Image src={activePage === 'activity' ? Icon2Active : Icon2} width={25} height={25} alt="New Activity" />
          <p className={activePage === 'activity' ? Styles.TagActive : Styles.Tag}>New Activity</p>
        </div>
      </Link>
      <Link href='/pages/discover'>
        <div className={Styles.NavButton}>
          <Image src={activePage === 'discover' ? Icon3Active : Icon3} width={25} height={25} alt="Discover" />
          <p className={activePage === 'discover' ? Styles.TagActive : Styles.Tag}>Discover</p>
        </div>
      </Link>
      <Link href='/pages/profile'>
        <div className={Styles.NavButton}>
          <Image src={activePage === 'profile' ? Icon4Active : Icon4} width={25} height={25} alt="Profile" />
          <p className={activePage === 'profile' ? Styles.TagActive : Styles.Tag}>Profile</p>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
