import React from 'react'
import Styles from './inputbox.module.css'

interface InputBoxProps {
    InputBoxLabel1: string;
    InputBoxLabel2: string;
    InputBoxTitle: string;
  }

  const InputBox: React.FC<InputBoxProps> = ({InputBoxLabel1, InputBoxLabel2,InputBoxTitle }) => {
  return (
    <>
    <h3 className={Styles.InputBoxTitle}>{InputBoxTitle}</h3>
    <div className={Styles.InputBoxContainer}>
    <label className={Styles.InputboxLabel} htmlFor="input">{InputBoxLabel1}</label>
    <input className={Styles.InputboxInput} type="input" id='InputBox'/>
    <label className={Styles.InputboxLabel} htmlFor="input">{InputBoxLabel2}</label>
    </div>

    </>
  )
}

export default InputBox;