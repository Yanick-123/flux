import React from 'react'
import Styles from './testgroup.module.css'
import Image from 'next/image';
import ImageIcon from '../../../../public/img/icons/Image.svg';
import PersonGreenIcon from '../../../../public/img/icons/PersonGreen.svg';


interface TestGroupProps {
  groupName: string;
  members: number;
  date: string;
  location: string;
}

const TestGroup: React.FC<TestGroupProps> = ({ groupName, members, date, location }) => {
  return (
    <div className={Styles.ElementContainer}>
      <div className={Styles.GroupImage}><Image src={ImageIcon} width={50} height={50} alt="Home" /></div>
      <div className={Styles.GroupInfo}>
        <div className={Styles.GroupInfo1}>
          <h2>{groupName}</h2>
          <p>{date}</p>
        </div>
        <div className={Styles.GroupInfo2}>
          <div className={Styles.Members}>
            <p>{members}</p>
            <Image src={PersonGreenIcon} width={25} height={25} alt="Home" />
          </div>
          <p>{location}</p>
        </div>
      </div>



    </div>
  )
}


export default TestGroup;