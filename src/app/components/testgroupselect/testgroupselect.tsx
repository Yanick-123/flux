import React from 'react';
import Styles from './testgroupselect.module.css';
import Image from 'next/image';
import ImageIcon from '../../../../public/img/icons/Image.svg';
import PersonIcon from '../../../../public/img/icons/Person.svg';

interface TestGroupProps {
  groupName: string;
  members: number;
}

const TestGroupSelect: React.FC<TestGroupProps> = ({ groupName, members}) => {
  return (
    <div className={Styles.ElementContainer}>
      <div className={Styles.GroupImage}>
        <Image src={ImageIcon} width={50} height={50} alt="Group Image" />
      </div>
      <div className={Styles.GroupInfo}>
        <div className={Styles.GroupInfo1}>
          <h2>{groupName}</h2>
        </div>
        <div className={Styles.GroupInfo2}>
          <div className={Styles.Members}>
            <p>{members}</p>
            <Image src={PersonIcon} width={25} height={25} alt="Members Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestGroupSelect;
