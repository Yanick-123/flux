import React from 'react'
import Styles from './checkbox.module.css'

interface CheckBoxProps {
    CheckBoxLabel: string;
    CheckBoxTitle: string;
  }

  const CheckBox: React.FC<CheckBoxProps> = ({CheckBoxLabel, CheckBoxTitle}) => {
  return (
    <>
    <h3 className={Styles.CheckBoxTitle}>{CheckBoxTitle}</h3>
    <div className={Styles.CheckBoxContainer}>
    <input className={Styles.CheckboxInput} type="checkbox" id='CheckBox'/>
    <label className={Styles.CheckboxLabel} htmlFor="CheckBox">{CheckBoxLabel}</label>
    </div>

    </>
  )
}

export default CheckBox;