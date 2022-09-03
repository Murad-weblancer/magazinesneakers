import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import {FaFacebookF, FaInstagram, FaTwitter, FaVimeoSquare} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import './Popup.scss'

export const Popup = ({open,modal}) => {
    const [value,setValue] = useState('')
    const handleClick = () => {
      if(value === ""){
        alert("Write your Email")
      }else{
        setValue('')
        modal()
      }

    }
  return (
    <AnimatePresence>
      {open && (
        <>
         
            <>
              <motion.div
                onClick={modal}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="modal-main"
              />


              
                <motion.div
                  initial={{
                    right: 100,
                  }}
                  animate={{
                    right: 0,
                    transition: {
                      duration: 0.3,
                      delay: 0.1,
                    },
                  }}

                  className="modal-main-wrapper-con"
                >
                    <span onClick={modal}> <AiOutlineClose size={20}/> </span>
                    <div className='socials'>
                        <FaFacebookF className='icons' size={25} />
                        <FaInstagram className='icons' size={25} />
                        <FaTwitter className='icons' size={25} />
                        <FaVimeoSquare className='icons' size={25} />
                    </div>
                    <h1>
                    Subscribe to our newsletter
                    </h1>
                    <input type="text" value={value} onChange={e=>setValue(e.target.value)} placeholder='Enter your email adress' />
                    <button onClick={handleClick}> Sign up </button>
                </motion.div>
            </>
        </>
      )}
    </AnimatePresence>
  )
}
