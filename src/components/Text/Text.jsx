import React from 'react';
import style from "./Text.module.scss"

const Text = ({title, props}) => {
  return (
    <div {...props}>
        <span className={style.spans}>{title}</span>
    </div>
  )
}

export default Text