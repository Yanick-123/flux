import React from 'react'
import Styles from './page.module.css'
import NavBar from '@/app/components/navbar/navbar'
import Logo from "../../components/logo/logo"
import Line from "../../components/line/line";

export default function page() {
  return (
    <>
      <Logo></Logo>
      <div className={Styles.ContentArea}>
        <Line></Line>
        <p>Discover</p>
      </div>
      <NavBar activePage="discover"></NavBar>
    </>
  )
}
