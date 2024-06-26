import React from 'react'
import Styles from './page.module.css'
import NavBar from '@/app/components/navbar/navbar'
import Logo from "../../components/logo/logo"
import Line from "../../components/line/line"
import CheckBox from "../../components/preferencecomponents/checkbox/checkbox"
import InputBox from "../../components/preferencecomponents/inputbox/inputbox"
import WhiteSpace from "../../components/whitespace/whitespace"
import OutlineButton2 from "../../components/outlinebutton2/outlinebutton2"
import DropDown from "../../components/preferencecomponents/dropdown/dropdown"

export default function page() {

  return (
    <>
      <Logo></Logo>
      <div className={Styles.ContentArea}>
        <h2 className={Styles.PageTitle}>Datum & Tijd</h2>
        <Line></Line>
        <InputBox InputBoxTitle="Datum" InputBoxLabel1="" InputBoxLabel2=""></InputBox>
        <h3 className={Styles.InputBoxTitle}>Tijd</h3>
        <InputBox InputBoxTitle="" InputBoxLabel1="Van" InputBoxLabel2=""></InputBox>
        <InputBox InputBoxTitle="" InputBoxLabel1="Tot" InputBoxLabel2=""></InputBox>

        <h2 className={Styles.PageTitle}>Activiteitstype</h2>
        <Line></Line>
        <h3 className={Styles.InputBoxTitle}>Categorieën</h3>
        <div className={Styles.FlexContainer}>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Sport"></CheckBox>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Recreatie"></CheckBox>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Culinair"></CheckBox>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Cultureel"></CheckBox>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Gezelschapsspellen"></CheckBox>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Creatief"></CheckBox>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Wellness"></CheckBox>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Natuur"></CheckBox>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Creatief "></CheckBox>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Creatief "></CheckBox>
        </div>
        <InputBox InputBoxTitle="Specifieke Activiteiten" InputBoxLabel1="" InputBoxLabel2=""></InputBox>
        <h2 className={Styles.PageTitle}>Locatie</h2>
        <Line></Line>
        <InputBox InputBoxTitle="Stad" InputBoxLabel1="" InputBoxLabel2=""></InputBox>
        <InputBox InputBoxTitle="Afstand" InputBoxLabel1="" InputBoxLabel2=""></InputBox>
        <h2 className={Styles.PageTitle}>Budget</h2>
        <Line></Line>
        <InputBox InputBoxTitle="" InputBoxLabel1="Minimaal" InputBoxLabel2=""></InputBox>
        <InputBox InputBoxTitle="" InputBoxLabel1="Maximaal" InputBoxLabel2=""></InputBox>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Geen Voorkeur"></CheckBox>

        <h2 className={Styles.PageTitle}>Vervoer</h2>
        <Line></Line>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Eigen Vervoer"></CheckBox>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Openbaar Vervoer"></CheckBox>

        <h2 className={Styles.PageTitle}>Selecteer Groep</h2>
        <Line></Line>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Solo Activiteit"></CheckBox>
        <CheckBox CheckBoxTitle="" CheckBoxLabel="Zonder Groep"></CheckBox>
        <OutlineButton2 ButtonText={"Bevestigen"}></OutlineButton2>
        <WhiteSpace></WhiteSpace>
      </div>

      <NavBar activePage="activity"></NavBar>
    </>
  )
}
