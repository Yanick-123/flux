import React from 'react'
import Styles from './outlinebutton.module.css'

interface OutlineButtonProps {
    ButtonText: string;
  }

  const OutlineButton: React.FC<OutlineButtonProps> = ({ButtonText}) => {
  return (
    <div className={Styles.OutlineButtonContainer}>
        <p>{ButtonText}</p>
    </div>
  )
}

export default OutlineButton;