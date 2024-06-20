import Image from "next/image";
import styles from "./page.module.css";
import Logo from "./components/logo/logo"
import NavBar from "./components/navbar/navbar";
import TestGroup from "./components/testgroup/testgroup";
import NewGroup from "./components/newgroup/newgroup";
import Line from "./components/line/line";

export default function Home() {
  return (
   <>
   <Logo></Logo>
      <div className={styles.ContentArea}>
        <Line></Line>
        <TestGroup></TestGroup>
        <Line></Line>
        <NewGroup></NewGroup>
      </div>
      <NavBar activePage="home"></NavBar>
   </>
  );
}
