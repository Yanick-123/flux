import React from 'react'
import Image from 'next/image'
import Styles from './newgroup.module.css'
import NewActivityIcon from '../../../../public/img/icons/NewActivityWhite.svg'
import NewGroupIcon from '../../../../public/img/icons/NewGroupWhite.svg'
import EditGroupIcon from '../../../../public/img/icons/EditGroup.svg'
import Link from 'next/link';

export default function newgroup() {
  return (
    <>
    <div className={Styles.ButtonContainer}>
    <Link href='/pages/activity' className={Styles.ElementBorderSolid}>
      <Image src={NewActivityIcon} width={35} height={35} alt="" />
        <p className={Styles.ElementText}>New Activity</p>
    </Link>
    <Link href='/' className={Styles.ElementBorderSolid}>
    <Image src={NewGroupIcon} width={35} height={35} alt="" />
        <p className={Styles.ElementText}>New Group</p>
    </Link>
    <Link href='/' className={Styles.ElementBorderSolid}>
    <Image src={EditGroupIcon} width={35} height={35} alt="" />
        <p className={Styles.ElementText}>Edit Group</p>
    </Link>
    </div>
    </>
  )
}
