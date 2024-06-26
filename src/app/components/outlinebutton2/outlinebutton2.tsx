import React from 'react'
import Styles from './outlinebutton2.module.css'

interface OutlineButtonProps2 {
    ButtonText: string;
  }

  const OutlineButton2: React.FC<OutlineButtonProps2> = ({ButtonText}) => {
  return (
    <div className={Styles.OutlineButtonContainer}>
        <p>{ButtonText}</p>
    </div>
  )
}

export default OutlineButton2;