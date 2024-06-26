import Image from "next/image";
import Styles from "./page.module.css";
import Logo from "./components/logo/logo"
import NavBar from "./components/navbar/navbar";
import TestGroup from "./components/testgroup/testgroup";
import NewGroup from "./components/newgroup/newgroup";
import Line from "./components/line/line";
import FilterIcon from '../../public/img/icons/Filter.svg';

export default function Home() {
  return (
    <>
      <Logo></Logo>
      <div className={Styles.ContentArea}>
        <div className={Styles.PageTitleContainer}>
          <h2 className={Styles.PageTitle}>Aangemaakt</h2>
          <Image src={FilterIcon} width={20} height={20} alt="Home" />
        </div>

        <Line></Line>
        <TestGroup
          groupName="Group 1"
          members={4}
          date="2024-06-24"
          location="Bowlen Dolfijn, Tilburg"
        ></TestGroup>
        <Line></Line>
        <NewGroup></NewGroup>
      </div>
      <NavBar activePage="home"></NavBar>
    </>
  );
}
