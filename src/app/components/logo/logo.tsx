import Image from "next/image";
import Styles from "./logo.module.css";
import Logo from "../../../../public/img/icons/Logo.svg";

export default function Home() {
  return (
   <>
      <Image className={Styles.TopLogo} src={Logo} width={133} height={66} alt="" />
   </>
  );
}
