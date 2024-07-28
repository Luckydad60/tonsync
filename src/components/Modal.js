import React from 'react'
import {Link} from "react-router-dom";

function Modal({setModal, modal}) {
  return (
    <div className='modal container'>
        <div className='modal'>
            <img alt='??' src='../errorbg.png' />
            <p>Error!! Wrong Seed Phrase</p>
        </div>
        <Link to="/" className='btn modal_btn' onClick={setModal(!modal)}>cancle</Link>
    </div>
  )
}

export default Modal;